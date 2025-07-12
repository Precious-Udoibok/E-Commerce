import jwt, { SignOptions } from "jsonwebtoken";
import { env } from "process";
import { Response } from "express";
import * as bcrypt from "bcrypt";
import * as uuid from "uuid";
import { ErrorType, handleSystemError } from "../constants";

// NOT IDEAL BUT SHOULD DO
const JWT_SECRET =
  "vcpyjkscwiuexksajtjblwkazspqnzkpgjocxahseglossmqhakgcowkpjgiohvhpteyqbsgxqhqklbmjinlvlhgqjjwwnhsrllceyhmfsoaeigjglcmvzedeswmzjxnmndsjdsmmsd879qnmzxjayuoieq";

export const respondWithError = (
  res: Response,
  statusCode: number,
  errorType: ErrorType
) => {
  res.status(statusCode).json({
    ok: false,
    error: handleSystemError(errorType),
    data: null,
  });
};
export const generateId = (length?: number) => {
  return uuid.v4();
};

export function generateEmailToken(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function generateJwtToken({
  payload,
  expiresIn,
}: {
  payload: string;
  expiresIn: number | string;
}): string {
  const jwtPayload = { value: payload };

  const options: SignOptions | undefined = expiresIn
    ? { expiresIn: expiresIn as SignOptions["expiresIn"] }
    : undefined;

  return jwt.sign(jwtPayload, JWT_SECRET, options);
}
export function decodeJwtToken(token: string): {
  value?: string;
  error?: string;
} {
  const payload = jwt.verify(token, JWT_SECRET) as { value: string };

  if (!payload?.value) {
    return { error: "invalid token" };
  }

  return { value: payload.value };
}

export async function generateHash(value: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(value, saltRounds);
}

export function generateOtpToken(): string {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export async function compareWithHash(
  plainValue: string,
  hash: string | null
): Promise<Boolean> {
  if (!hash) return false;
  const saltRounds = 10;
  return await bcrypt.compare(plainValue, hash);
}

export function matchPath(path: string, matchers: Array<string | RegExp>) {
  let match = false;

  for (const matcher of matchers) {
    if (typeof matcher == "string") {
      match = matcher == path;
    } else if (matcher instanceof RegExp) {
      match = matcher.test(path);
    }

    if (match) break;
  }

  return match;
}

export function enumFromStringValue<T>(
  enm: { [s: string]: T },
  value: string
): T | undefined {
  return (Object.values(enm) as unknown as string[]).includes(value)
    ? (value as unknown as T)
    : undefined;
}

/**
 *
 * @param enm
 * @param values
 * @returns {Boolean} - Returns `true` when the list contains only valid enums
 */
export function validateEnumList<T>(
  enm: { [s: string]: T },
  values: string[] | null | undefined
): Boolean {
  if (!values) {
    return false;
  }
  return values
    .map((v) =>
      (Object.values(enm) as unknown as string[]).includes(v)
        ? (values as unknown as T)
        : undefined
    )
    .includes(undefined);
}

export function dateFromStringValue(value: string | null): Date | undefined {
  if (!value) {
    return undefined;
  }
  const date = new Date(value);

  if (isNaN(date.getTime()) || !date) {
    return undefined;
  }

  return date;
}

/**
 *
 * @param dates - Dates list
 * @returns {Date | null}
 */
export function calculateAverageTime(dates: Date[]): Date | null {
  if (dates.length === 0) return null; // No dates to average

  const totalTime = dates.reduce((acc, date) => acc + date.getTime(), 0);
  const averageTime = totalTime / dates.length;

  return new Date(averageTime);
}

export function numberToExcelColumn(num: number) {
  let result = "";
  while (num > 0) {
    num--; // Adjust to zero-based index
    result = String.fromCharCode(65 + (num % 26)) + result;
    num = Math.floor(num / 26);
  }
  return result;
}

export function getSupabasePublicUrl(bucket: string, filePath: string): string {
  const isDevelopment = process.env.NODE_ENV === "development";
  const encodedPath = encodeURIComponent(filePath);

  if (isDevelopment) {
    // Development: Use the local Supabase URL with a signed path
    return `http://127.0.0.1:54321/storage/v1/object/sign/${bucket}/${encodedPath}`;
  } else {
    // Production: Use the Supabase project ID to construct the public URL
    const SUPABASE_PROJECT_ID = process.env.SUPABASE_PROJECT_ID;
    return `https://${SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/${bucket}/${encodedPath}`;
  }
}

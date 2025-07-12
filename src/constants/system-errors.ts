export enum ErrorType {
  // Auth & Session
  AuthorizationMissing,
  InvalidAuthorization,
  AuthorizationExpired,
  SessionNotFound,
  SessionExpired,
  InvalidCredentials,
  UnAuthorized,
  AccountNotFound,
  PasswordMismatch,
  AccountSuspended,

  // User Validation
  NameValueMissing,
  EmailValueMissing,
  PhoneNumberValueMissing,
  PasswordValueMissing,
  EmailAvailable,
  PhoneNumberAvailable,
  InvalidEmailFormat,
  InvalidPhoneNumberFormat,
  NewPasswordValueMissing,
  TypeValueMissing,

  // Vendor Validation
  BusinessNameValueMissing,
  BusinessTypeValueMissing,
  VendorNotFound,

  // UserService / VendorService Validation
  ServiceNameValueMissing,
  ServicePriceMissing,
  ServiceImageMissing,
  VendorIdMissing,
  ServiceNotFound,

  // Appointment Validation
  AppointmentTimeMissing,
  AppointmentNotFound,
  UserIdMissing,

  // Session Fields
  RefreshTokenValueMissing,
  FCMTokenValueMissing,

  // General Validation
  RequestBodyMissing,
  InvalidDateFormat,

  // Generic
  RateLimitExceeded,
  SomethingWentWrong,
  PageNotFound,
}

type StandardSystemErrorLogData = Partial<
  Record<"userAgent" | "location" | "ip", string>
> & { requestId: string };

type StandardSystemErrorReporting = Partial<
  Record<"errorMessage" | "stackTrace", string>
>;

export class SystemError<T extends ErrorType = any> extends Error {
  #type: ErrorType;
  #statusCode: number;
  #code: number;

  constructor(type: T) {
    let { message, statusCode, code } = handleSystemError(type as T);
    super(message);
    this.#type = type;
    this.#statusCode = statusCode;
    this.#code = code;

    Error.captureStackTrace(this, this.constructor);
  }

  get type(): ErrorType {
    return this.#type;
  }

  get statusCode(): number {
    return this.#statusCode;
  }

  get code(): number {
    return this.#code;
  }

  static isSystemError(error: any) {
    if (error instanceof SystemError) return true;
    return false;
  }

  static throw<T extends ErrorType>(type: T) {
    return new SystemError<T>(type);
  }
}

export function handleSystemError<T extends ErrorType>(
  type: T
): { code: number; message: string; statusCode: number } {
  switch (type) {
    case ErrorType.AuthorizationMissing:
      return {
        statusCode: 401,
        message: "Authorization header missing",
        code: 1001,
      };
    case ErrorType.InvalidAuthorization:
      return {
        statusCode: 401,
        message: "Invalid authorization token",
        code: 1002,
      };
    case ErrorType.AuthorizationExpired:
      return {
        statusCode: 401,
        message: "Authorization token expired",
        code: 1003,
      };
    case ErrorType.SessionNotFound:
      return { statusCode: 404, message: "Session not found", code: 1004 };
    case ErrorType.SessionExpired:
      return { statusCode: 401, message: "Session expired", code: 1005 };
    case ErrorType.InvalidCredentials:
      return { statusCode: 401, message: "Invalid credentials", code: 1006 };
    case ErrorType.UnAuthorized:
      return { statusCode: 403, message: "Unauthorized access", code: 1007 };

    case ErrorType.AccountNotFound:
      return { statusCode: 403, message: "Account not found", code: 1008 };

    case ErrorType.PasswordMismatch:
      return { statusCode: 403, message: "Password mismatch", code: 1009 };

    case ErrorType.NameValueMissing:
      return { statusCode: 400, message: "Missing name", code: 2001 };
    case ErrorType.EmailValueMissing:
      return { statusCode: 400, message: "Missing email", code: 2002 };
    case ErrorType.TypeValueMissing:
      return { statusCode: 400, message: "Missing account type", code: 2002 };
    case ErrorType.PhoneNumberValueMissing:
      return { statusCode: 400, message: "Missing phone number", code: 2003 };
    case ErrorType.PasswordValueMissing:
      return { statusCode: 400, message: "Missing password", code: 2004 };
    case ErrorType.PasswordValueMissing:
      return { statusCode: 400, message: "Missing password", code: 2004 };
    case ErrorType.EmailAvailable:
      return { statusCode: 400, message: "Email already exists", code: 2005 };
    case ErrorType.PhoneNumberAvailable:
      return {
        statusCode: 400,
        message: "Phone number already exists",
        code: 2006,
      };
    case ErrorType.InvalidEmailFormat:
      return { statusCode: 400, message: "Invalid email format", code: 2007 };
    case ErrorType.InvalidPhoneNumberFormat:
      return {
        statusCode: 400,
        message: "Invalid phone number format",
        code: 2008,
      };

    case ErrorType.BusinessNameValueMissing:
      return { statusCode: 400, message: "Missing business name", code: 3001 };
    case ErrorType.BusinessTypeValueMissing:
      return { statusCode: 400, message: "Missing business type", code: 3002 };
    case ErrorType.VendorNotFound:
      return { statusCode: 404, message: "Vendor not found", code: 3003 };

    case ErrorType.ServiceNameValueMissing:
      return { statusCode: 400, message: "Missing service name", code: 4001 };
    case ErrorType.ServicePriceMissing:
      return { statusCode: 400, message: "Missing service price", code: 4002 };
    case ErrorType.VendorIdMissing:
      return { statusCode: 400, message: "Missing vendor ID", code: 4003 };
    case ErrorType.ServiceNotFound:
      return { statusCode: 404, message: "Service not found", code: 4004 };
    case ErrorType.ServiceImageMissing:
      return { statusCode: 404, message: "Missing service image", code: 4004 };

    case ErrorType.AppointmentTimeMissing:
      return {
        statusCode: 400,
        message: "Missing appointment time",
        code: 5001,
      };
    case ErrorType.AppointmentNotFound:
      return { statusCode: 404, message: "Appointment not found", code: 5002 };
    case ErrorType.UserIdMissing:
      return { statusCode: 500, message: "Missing user ID", code: 5003 };

    case ErrorType.RefreshTokenValueMissing:
      return { statusCode: 400, message: "Missing refresh token", code: 6001 };
    case ErrorType.FCMTokenValueMissing:
      return { statusCode: 500, message: "Missing FCM token", code: 6002 };

    case ErrorType.RequestBodyMissing:
      return { statusCode: 500, message: "Request body missing", code: 7001 };
    case ErrorType.InvalidDateFormat:
      return { statusCode: 500, message: "Invalid date format", code: 7002 };

    case ErrorType.AccountSuspended:
      return { statusCode: 500, message: "Account suspended", code: 7003 };

    case ErrorType.RateLimitExceeded:
      return {
        statusCode: 429,
        message: "Rate limit exceeded. Try again later.",
        code: 8001,
      };
    case ErrorType.PageNotFound:
      return { statusCode: 404, message: "API method not found", code: 8002 };

    case ErrorType.SomethingWentWrong:
    default:
      return {
        statusCode: 500,
        message: "Something went wrong. Try again.",
        code: 9999,
      };
  }
}

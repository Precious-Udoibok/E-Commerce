import {
  JsonWebTokenError,
  TokenExpiredError,
  NotBeforeError,
} from "jsonwebtoken";

export function handleJwtError(
  error:
    | JsonWebTokenError
    | TokenExpiredError
    | NotBeforeError
    | null
    | undefined
): { message: string; code: number } {
  if (!error) {
    return { message: "Something went wrong", code: 4000 };
  }

  // Switch based on the error type using constructor.name
  switch (error.constructor.name) {
    case "TokenExpiredError":
      return { message: "Token has expired", code: 4001 };

    case "NotBeforeError":
      return { message: "Token not active", code: 4002 };

    case "JsonWebTokenError":
      return { message: "Invalid token", code: 4003 };

    default:
      return { message: "Something went wrong", code: 4004 };
  }
}

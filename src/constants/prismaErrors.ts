export enum PrismaErrorType {
  UniqueConstraintViolation = "P2002",
  ForeignKeyConstraintViolation = "P2003",
  RecordNotFound = "P2025",
  TransactionRollback = "P8000",
  ConnectivityError = "P1000",
  QueryTimeout = "P3001",
  MissingField = "P4001",
  OtherError = "OtherError",
}

interface PrismaError {
  code: string;
  message: string;
}

export function handlePrismaError(error: PrismaError | null | undefined): {
  message: string;
  code: number;
  statusCode: number;
} {
  if (!error || !error.code) {
    return { message: "Something went wrong", code: 3000, statusCode: 500 };
  }

  switch (error.code) {
    case PrismaErrorType.UniqueConstraintViolation:
      return { message: "Duplicate entry", code: 1012, statusCode: 409 };
    case PrismaErrorType.ForeignKeyConstraintViolation:
      return {
        message: "Foreign key constraint violation",
        code: 1013,
        statusCode: 400,
      };
    case PrismaErrorType.RecordNotFound:
      return { message: "Record not found", code: 1014, statusCode: 404 };
    case PrismaErrorType.TransactionRollback:
      return { message: "Transaction rollback", code: 1015, statusCode: 500 };
    case PrismaErrorType.ConnectivityError:
      return {
        message: "Database connectivity error",
        code: 1016,
        statusCode: 503,
      };
    case PrismaErrorType.QueryTimeout:
      return { message: "Query timeout", code: 1017, statusCode: 504 };
    case PrismaErrorType.MissingField:
      return {
        message: "Required field is missing",
        code: 1018,
        statusCode: 400,
      };
    default:
      return {
        message: "Something went wrong, Please try again later",
        code: 1000,
        statusCode: 500,
      };
  }
}

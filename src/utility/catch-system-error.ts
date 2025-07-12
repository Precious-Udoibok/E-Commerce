import e, { NextFunction, Request, Response } from "express";
import {
  ErrorType,
  handlePrismaError,
  handleSystemError,
  PrismaErrorType,
  SystemError,
} from "../constants/index.js";
import { JsonWebTokenError } from "jsonwebtoken";
import { Prisma } from "../../prisma/generated/prisma/client.js";

type IExpressRouteReturn = (
  req: Request,
  res: Response
) => Promise<void> | void;

type IExpressMiddleReturn = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

let errorHandle = (req: Request, res: Response, error: any) => {
  let statusCode = 500,
    code = 1000,
    message = "Oops! Something went wrong. Please try again later";

  console.error("Error: ", error);
  // Check if the error is a known Prisma error
  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === PrismaErrorType.RecordNotFound
  ) {
    let sysErr = handleSystemError(ErrorType.SessionNotFound);
    statusCode = sysErr.statusCode;
    code = sysErr.code;
    message = sysErr.message;

    res.status(statusCode);
    res.json({
      ok: false,
      data: null,
      error: {
        code,
        message,
      },
    });
    return;
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    res
      .status(400)
      .json({ ok: false, data: null, error: handlePrismaError(error) });
    return;
  }

  if (error instanceof JsonWebTokenError) {
    res.status(400).json({
      ok: false,
      data: null,
      error: handleSystemError(ErrorType.SessionExpired),
    });
    return;
  }

  if (SystemError.isSystemError(error)) {
    let sysErr = error as SystemError;
    statusCode = sysErr.statusCode;
    code = sysErr.code;
    message = sysErr.message;

    res.status(statusCode);
    res.json({
      ok: false,
      data: null,
      error: {
        code,
        message,
      },
    });

    return;
  }

  let url = new URL(req.url || String(), `http://${req.headers.host}`);

  let prismaErr = handlePrismaError(error);

  statusCode = prismaErr.statusCode;
  code = prismaErr.code;
  message = prismaErr.message;

  res.status(statusCode);
  res.json({
    ok: false,
    data: null,
    error: {
      code,
      message,
    },
  });
};

export const catchSystemRouteError =
  (routeCallback: IExpressRouteReturn) => (req: Request, res: Response) => {
    try {
      Promise.resolve(routeCallback(req, res)).catch((error) =>
        errorHandle(req, res, error)
      );
    } catch (error) {
      errorHandle(req, res, error);
    }
  };

export const catchSystemMiddlewareError =
  (routeCallback: IExpressMiddleReturn) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      Promise.resolve(routeCallback(req, res, next)).catch((error) =>
        errorHandle(req, res, error)
      );
    } catch (error) {
      errorHandle(req, res, error);
    }
  };
export { Response };

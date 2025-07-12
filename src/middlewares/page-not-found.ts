import { NextFunction, Request, Response } from "express";
import { catchSystemMiddlewareError } from "../utility/catch-system-error";
import { ErrorType, SystemError } from "../constants/system-errors";

/**
 * Page not found handler
 */
export function pageNotFound() {
  return catchSystemMiddlewareError(function (
    _req: Request,
    _res: Response,
    _next: NextFunction
  ) {
    console.log("API: ", _req.url);
    throw SystemError.throw(ErrorType.PageNotFound);
  });
}

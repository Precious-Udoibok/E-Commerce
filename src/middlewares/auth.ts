import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { ErrorType, SystemError } from "../constants";
import { decodeJwtToken, prismaClient } from "../utility";
import { isAfter } from "date-fns";
import { ACCOUNT_ID_KEY } from "../constants/values";
import { catchSystemMiddlewareError } from "../utility/catch-system-error";

export function authMiddleware() {
  return catchSystemMiddlewareError(async function (
    req: Request,
    _: Response,
    next: NextFunction
  ) {
    const authHeader = req.header("authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      throw SystemError.throw(ErrorType.AuthorizationMissing);
    }

    const decodedJwt = decodeJwtToken(token);

    if (!decodedJwt.value) {
      throw SystemError.throw(ErrorType.InvalidAuthorization);
    }

    let sessionData;
    try {
      sessionData = JSON.parse(decodedJwt.value);
    } catch {
      throw SystemError.throw(ErrorType.InvalidAuthorization);
    }

    const { sessionId, expiresIn } = sessionData;

    if (!sessionId || !expiresIn) {
      throw SystemError.throw(ErrorType.InvalidAuthorization);
    }

    if (isAfter(new Date(), new Date(expiresIn))) {
      throw SystemError.throw(ErrorType.SessionNotFound);
    }

    const session = await prismaClient.userSession.findUnique({
      where: {
        id: sessionId,
      },
      select: { accountId: true },
    });

    if (!session) {
      throw (SystemError.throw(ErrorType.SessionNotFound), next());
    }

    req.store.set(ACCOUNT_ID_KEY, session.accountId);
    next();
  });
}

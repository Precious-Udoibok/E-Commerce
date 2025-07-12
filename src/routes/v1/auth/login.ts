import express from "express";
import { catchSystemRouteError } from "../../../utility/catch-system-error";
import { ErrorType, Response, SystemError } from "../../../constants";
import {
  compareWithHash,
  generateId,
  generateJwtToken,
  prismaClient,
} from "../../../utility";
import { addDays } from "date-fns";
import { ACCESS_TOKEN_EXPIRATION_DURATION } from "../../../constants/values";

const LogInRoute = express.Router();

interface LoginRequestBody {
  email: string;
  password: string;
  isAdmin: boolean;
}

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Log into an existing account
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SigninRequestBody'
 *     responses:
 *       200:
 *         description: Login success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     session:
 *                       type: object
 *                       properties:
 *                         accessToken:
 *                           type: string
 *                         expiresIn:
 *                           type: string
 *                           format: date-time
 *                     account:
 *                       $ref: '#/components/schemas/Account'
 *                 error:
 *                   $ref: '#/components/schemas/ServerError'
 *       400:
 *         description: Missing or invalid login info
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

LogInRoute.post(
  "/",
  catchSystemRouteError(async (req, res) => {
    const body = req.body as LoginRequestBody;
    console.log(body);
    if (!body?.email) throw SystemError.throw(ErrorType.EmailValueMissing);
    if (!body?.password)
      throw SystemError.throw(ErrorType.NewPasswordValueMissing);

    const account = await prismaClient.account.findUnique({
      where: { email: body.email },
      select: {
        id: true,
        password: true,
        isSuspended: true,
      },
    });

    if (!account) throw SystemError.throw(ErrorType.AccountNotFound);
    if (account.isSuspended == true)
      throw SystemError.throw(ErrorType.AccountSuspended);
    if (!account.password)
      throw SystemError.throw(ErrorType.NewPasswordValueMissing);

    const passwordMatch = await compareWithHash(
      body.password,
      account.password
    );
    if (!passwordMatch) throw SystemError.throw(ErrorType.PasswordMismatch);

    const sessionId = generateId();
    const expiration = addDays(new Date(), 30);

    await prismaClient.userSession.create({
      data: {
        id: sessionId,
        accountId: account.id,
        expiration,
      },
    });

    const accessToken = generateJwtToken({
      payload: JSON.stringify({
        sessionId,
        expiresIn: expiration.getTime(),
      }),
      expiresIn: ACCESS_TOKEN_EXPIRATION_DURATION,
    });

    res.status(200).json(
      Response.success({
        accessToken,
        expiresIn: expiration,
      })
    );
  })
);

export default LogInRoute;

/**
 * @swagger
 * components:
 *   schemas:
 *     SigninRequestBody:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           example: vendor@example.com
 *           description: The email address of the user or vendor.
 *         password:
 *           type: string
 *           example: mySecurePassword123
 *           description: The password for the account.
 */

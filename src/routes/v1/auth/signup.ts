import express from "express";
import { catchSystemRouteError } from "../../../utility/catch-system-error";
import { ErrorType, Response, SystemError } from "../../../constants";
import {
  generateHash,
  generateId,
  generateJwtToken,
  prismaClient,
} from "../../../utility";
import { addDays } from "date-fns";
import { ACCESS_TOKEN_EXPIRATION_DURATION } from "../../../constants/values";
import { $Enums } from "../../../../prisma/generated/prisma/client";

const SignUpRoute = express.Router();

interface SignupRequestBody {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  businessName?: string;
  businessType?: $Enums.BusinessType;
  type: $Enums.AccountType;
}

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Register a new user or vendor account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignupRequestBody'
 *     responses:
 *       200:
 *         description: Successfully created a new account
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
 *         description: Missing or invalid input fields
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       409:
 *         description: Email or phone number already in use
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
SignUpRoute.post(
  "/",
  catchSystemRouteError(async (req, res) => {
    const body = req.body as SignupRequestBody;

    if (!body?.email) throw SystemError.throw(ErrorType.EmailValueMissing);
    if (!body?.phoneNumber)
      throw SystemError.throw(ErrorType.PhoneNumberValueMissing);
    if (!body?.fullName) throw SystemError.throw(ErrorType.NameValueMissing);
    if (!body?.password)
      throw SystemError.throw(ErrorType.PasswordValueMissing);
    if (!body?.type) throw SystemError.throw(ErrorType.TypeValueMissing);

    const existing = await prismaClient.account.findFirst({
      where: {
        OR: [{ email: body.email }, { phoneNumber: body.phoneNumber }],
      },
    });

    if (existing?.email === body.email) {
      throw SystemError.throw(ErrorType.EmailAvailable);
    }

    if (existing?.phoneNumber === body.phoneNumber) {
      throw SystemError.throw(ErrorType.PhoneNumberAvailable);
    }

    const passwordHash = await generateHash(body.password);

    const accountId = generateId();
    const sessionId = generateId();
    const now = new Date();
    const expiration = addDays(now, 30);

    const account = await prismaClient.account.create({
      data: {
        id: accountId,
        name: body.fullName,
        email: body.email,
        password: passwordHash,
        phoneNumber: body.phoneNumber,
        businessName: body.businessName,
        businessType: body.businessType,
        type: body.type,
      },
    });

    await prismaClient.userSession.create({
      data: {
        id: sessionId,
        accountId,
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

export default SignUpRoute;

/**
 * @swagger
 * components:
 *   schemas:
 *     SignupRequestBody:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - fullName
 *         - phoneNumber
 *         - type
 *       properties:
 *         email:
 *           type: string
 *           example: vendor@example.com
 *           description: The email address of the user or vendor.
 *         password:
 *           type: string
 *           example: mySecurePassword123
 *           description: The password for the account.
 *         fullName:
 *           type: string
 *           example: Jane Doe
 *           description: The full name of the user or vendor.
 *         phoneNumber:
 *           type: string
 *           example: "+2348012345678"
 *           description: The phone number of the user or vendor.
 *         businessName:
 *           type: string
 *           example: "Jane's Hair Studio"
 *           description: The name of the business (optional, for vendors).
 *         businessType:
 *           type: string
 *           enum: [BeautyProfessional, ECommerce, Services]
 *           description: The type of business (optional, for vendors).
 *         type:
 *           type: string
 *           enum: [USER, VENDOR]
 *           description: The type of account being created.
 *     Account:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the account.
 *         name:
 *           type: string
 *           description: The name associated with the account.
 *         email:
 *           type: string
 *           description: The email address of the account.
 *         phoneNumber:
 *           type: string
 *           description: The phone number of the account.
 *         businessName:
 *           type: string
 *           description: The name of the business (if applicable).
 *         businessType:
 *           type: string
 *           description: The type of business (if applicable).
 *         type:
 *           type: string
 *           description: The type of account (USER or VENDOR).
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the account was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the account was last updated.
 */

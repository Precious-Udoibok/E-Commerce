import express from "express";
import { catchSystemRouteError } from "../../../utility/catch-system-error";
import { ErrorType, Response, SystemError } from "../../../constants";
import { generateHash, prismaClient } from "../../../utility";
import { ACCOUNT_ID_KEY } from "../../../constants/values";
import { compareSync } from "bcrypt";
import { authMiddleware } from "../../../middlewares";

const ForgetPasswordRoute = express.Router();

ForgetPasswordRoute.use(authMiddleware());

interface ForgetPasswordRequestBody {
  newPassword: string;
  password: string;
}

/**
 * @swagger
 * /auth/forget-password:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Change users password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForgetPasswordRequestBody'
 *     responses:
 *       200:
 *         description: The new user authentication data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: string
 *                       example: Success
 *                 error:
 *                   $ref: '#/components/schemas/ServerError'
 *                   nullable: true
 *       400:
 *         description: Bad request due to missing fields or validation errors.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *                 error:
 *                   $ref: '#/components/schemas/ServerError'
 *       429:
 *         description: Too many signup attempts.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: false
 *                 data:
 *                   type: object
 *                   nullable: true
 *                   example: null
 *                 error:
 *                   $ref: '#/components/schemas/ServerError'
 */

ForgetPasswordRoute.post(
  "/",
  catchSystemRouteError(async (req, res) => {
    const body: ForgetPasswordRequestBody | null = req.body;

    const userId = req.store.get(ACCOUNT_ID_KEY);

    if (!body || !body.newPassword || !body.password) {
      throw SystemError.throw(ErrorType.RequestBodyMissing);
    }

    const { newPassword, password } = body;

    const user = await prismaClient.account.findUnique({
      where: { id: userId },
      select: { id: true, password: true },
    });

    if (!user) {
      throw SystemError.throw(ErrorType.AccountNotFound);
    }

    if (!compareSync(password, user.password ?? "")) {
      throw SystemError.throw(ErrorType.PasswordMismatch);
    }

    const hashedPassword = await generateHash(newPassword);

    await prismaClient.account.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    res.status(200).json(
      Response.success({
        status: "Success",
      })
    );
  })
);

export default ForgetPasswordRoute;

/**
 * @swagger
 * components:
 *   schemas:
 *     ForgetPasswordRequestBody:
 *       type: object
 *       required:
 *         - newPassword
 *         - password
 *       properties:
 *         newPassword:
 *           type: string
 *           description: The users new password
 *           example: dbwnkjqeq
 *         password:
 *           type: string
 *           description: The users old password
 *           example: dbwnkjqeq
 */

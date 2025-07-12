import express from "express";
import SignUpRoute from "./signup";
import ResetPasswordRoute from "./resetPassword";
import ForgetPasswordRoute from "./forgetPassword";
import LogInRoute from "./login";

const AuthRoute = express.Router();

AuthRoute.use("/signup", SignUpRoute);

AuthRoute.use("/login", LogInRoute);

AuthRoute.use("/reset-password", ResetPasswordRoute);

AuthRoute.use("/forget-password", ForgetPasswordRoute);

export default AuthRoute;

/**
 * @swagger
 * components:
 *   schemas:
 *     Auth:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *           description: The access token for the user's new session.
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.....
 *         expiresIn:
 *           type: number
 *           description: The expiration time of the user's new session access token is in milliseconds since midnight, January 1, 1970 UTC.
 *           example: 1726917976292
 *         refreshToken:
 *           type: string
 *           nullable: true
 *           description: The refresh token for the user's new session.
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.....
 *       example:
 *         accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.....
 *         refreshToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.....
 *         expiresIn: 1726917976292
 *
 *
 */

import express from "express";

const ResetPasswordRoute = express.Router();

// interface ResetPasswordRequestBody {
//   newPassword: string;
// }

// /**
//  * @swagger
//  * /auth/reset-password:
//  *   post:
//  *     tags:
//  *       - Authentication
//  *     summary: Reset users password.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/ResetPasswordRequestBody'
//  *     responses:
//  *       200:
//  *         description: The new user authentication data.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 ok:
//  *                   type: boolean
//  *                   example: true
//  *                 data:
//  *                   type: object
//  *                   properties:
//  *                     status:
//  *                       type: string
//  *                       example: Success
//  *                 error:
//  *                   $ref: '#/components/schemas/ServerError'
//  *                   nullable: true
//  *       400:
//  *         description: Bad request due to missing fields or validation errors.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 ok:
//  *                   type: boolean
//  *                   example: false
//  *                 data:
//  *                   type: object
//  *                   nullable: true
//  *                   example: null
//  *                 error:
//  *                   $ref: '#/components/schemas/ServerError'
//  *       429:
//  *         description: Too many signup attempts.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 ok:
//  *                   type: boolean
//  *                   example: false
//  *                 data:
//  *                   type: object
//  *                   nullable: true
//  *                   example: null
//  *                 error:
//  *                   $ref: '#/components/schemas/ServerError'
//  */

// ResetPasswordRoute.post(
//   "/",
//   catchSystemRouteError(async (req, res) => {
//     const body: ResetPasswordRequestBody | null = req.body;

//     if (!body || !body.newPassword) {
//       throw SystemError.throw(ErrorType.RequestBodyMissing);
//     }

//     const { newPassword } = body;

//     const authHeader = req.header("authorization");
//     const authToken = authHeader && authHeader.split(" ")[1];

//     if (!authToken) {
//       throw SystemError.throw(ErrorType.AuthorizationMissing);
//     }

//     let decodedJwt;
//     decodedJwt = decodeJwtToken(authToken);

//     if (!decodedJwt || !decodedJwt.value) {
//       throw SystemError.throw(ErrorType.InvalidAuthorization);
//     }

//     let sessionData;

//     try {
//       sessionData = JSON.parse(decodedJwt.value);
//     } catch {
//       throw SystemError.throw(ErrorType.InvalidAuthorization);
//     }

//     const { sessionId, expiresIn, type } = sessionData;

//     if (!sessionId || !expiresIn || !type || type != "ResetPassword") {
//       throw SystemError.throw(ErrorType.InvalidAuthorization);
//     }

//     if (isAfter(new Date(), new Date(expiresIn))) {
//       throw SystemError.throw(ErrorType.SessionExpired);
//     }

//     // Get session
//     const session = await prismaClient.userSession.findFirst({
//       where: { id: sessionId },
//       select: { id: true, emailToken: true, userId: true },
//     });

//     if (!session) {
//       throw SystemError.throw(ErrorType.SessionNotFound);
//     }

//     const hashedPassword = await generateHash(newPassword);

//     await prismaClient.$transaction([
//       // Update password
//       prismaClient.user.update({
//         where: { id: session.userId },
//         data: { password: hashedPassword },
//       }),

//       // Delete session
//       prismaClient.userSession.delete({
//         where: { id: session.id },
//       }),
//     ]);

//     res.status(200).json(
//       Response.success({
//         status: kSuccess,
//       })
//     );
//   })
// );

export default ResetPasswordRoute;

/**
 * @swagger
 * components:
 *   schemas:
 *     ResetPasswordRequestBody:
 *       type: object
 *       required:
 *         - newPassword
 *       properties:
 *         newPassword:
 *           type: string
 *           description: The users new password
 *           example: dbwnkjqeq
 */

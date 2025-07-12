import express from "express";
import { catchSystemRouteError } from "../../../utility/catch-system-error";
import { Response } from "../../../constants";
import { kAdminMail, prismaClient } from "../../../utility";
import { ACCOUNT_ID_KEY } from "../../../constants/values";
import { authMiddleware } from "../../../middlewares";

const AccountRoute = express.Router();
AccountRoute.use(authMiddleware());

/**
 * @swagger
 * /account:
 *   get:
 *     tags:
 *       - Account
 *     summary: Fetch the authenticated account’s profile
 *     responses:
 *       200:
 *         description: Account details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Account'
 *                 error:
 *                   type: object
 *                   nullable: true
 *       401:
 *         description: Unauthorized request (missing or invalid token)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
AccountRoute.get(
  "/",
  catchSystemRouteError(async (req, res) => {
    const accountId: string = req.store.get(ACCOUNT_ID_KEY);

    const account = await prismaClient.account.findFirst({
      where: {
        id: accountId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        avatarUrl: true,
        type: true,
        isSuspended: true,
        businessName: true,
        businessType: true,
        rating: true,
        createdAt: true,
        services: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
            price: true,
            createdAt: true,
          },
        },
        appointmentsAsUser: {
          select: {
            id: true,
            time: true,
            opened: true,
            createdAt: true,
            vendor: {
              select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
              },
            },
          },
        },
        appointmentsAsVendor: {
          select: {
            id: true,
            time: true,
            opened: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json(
      Response.success({
        ...account,
        isAdmin: account?.email == kAdminMail,
      })
    );
  })
);

AccountRoute.patch(
  "/",
  catchSystemRouteError(async (req, res) => {
    const accountId: string = req.store.get(ACCOUNT_ID_KEY);
    const { name, email, phone } = req.body;

    const account = await prismaClient.account.update({
      where: {
        id: accountId,
      },
      data: {
        name: name,
        email: email,
        phoneNumber: phone,
      },
      select: {
        id: true,
        name: true,
        email: true,
        isSuspended: true,
        phoneNumber: true,
        avatarUrl: true,
        type: true,
        businessName: true,
        businessType: true,
        rating: true,
        createdAt: true,
        services: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
            price: true,
            createdAt: true,
          },
        },
        appointmentsAsUser: {
          select: {
            id: true,
            time: true,
            opened: true,
            createdAt: true,
            vendor: {
              select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
              },
            },
          },
        },
        appointmentsAsVendor: {
          select: {
            id: true,
            time: true,
            opened: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json(
      Response.success({
        ...account,
      })
    );
  })
);

export default AccountRoute;

/**
 * @swagger
 * components:
 *   schemas:
 *     Account:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         avatarUrl:
 *           type: string
 *           nullable: true
 *         businessName:
 *           type: string
 *           nullable: true
 *         businessType:
 *           type: string
 *           enum: [BeautyProfessional, ECommerce, Services]
 *           nullable: true
 *         type:
 *           type: string
 *           enum: [USER, VENDOR]
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         services:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *                 nullable: true
 *               price:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *         appointmentsAsUser:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               time:
 *                 type: string
 *                 format: date-time
 *               opened:
 *                 type: boolean
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *               vendorId:
 *                 type: string
 *         appointmentsAsVendor:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               time:
 *                 type: string
 *                 format: date-time
 *               opened:
 *                 type: boolean
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *               userId:
 *                 type: string
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *           example: false
 *         data:
 *           nullable: true
 *           example: null
 *         error:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: Unauthorized
 *             code:
 *               type: number
 *               example: 401
 */

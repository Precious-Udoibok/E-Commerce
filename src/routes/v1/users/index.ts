import express from "express";
import { catchSystemRouteError } from "../../../utility/catch-system-error";
import { Response } from "../../../constants";
import { kAdminMail, prismaClient } from "../../../utility";

const UsersRoute = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Vendor
 *     summary: Get all system users
 *     responses:
 *       200:
 *         description: List of all accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   description: Indicates the request was successful
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/VendorWithDetails'
 *                 error:
 *                   type: null
 *                   description: Null when the request is successful
 *       401:
 *         description: Unauthorized access
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
UsersRoute.get(
  "/",
  catchSystemRouteError(async (_req, res) => {
    const vendors = await prismaClient.account.findMany({
      where: { email: { not: kAdminMail } },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        avatarUrl: true,
        type: true,
        businessName: true,
        businessType: true,
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

    res.status(200).json(Response.success(vendors));
  })
);

export default UsersRoute;

/**
 * @swagger
 * components:
 *   schemas:
 *     VendorWithDetails:
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
 *         type:
 *           type: string
 *           enum: [USER, VENDOR]
 *         businessName:
 *           type: string
 *         businessType:
 *           type: string
 *           enum: [BeautyProfessional, ECommerce, Services]
 *         createdAt:
 *           type: string
 *           format: date-time
 *         services:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/VendorService'
 *         appointmentsAsUser:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/AppointmentSummary'
 *         appointmentsAsVendor:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/AppointmentSummary'
 *     VendorService:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         imageUrl:
 *           type: string
 *         price:
 *           type: number
 *         createdAt:
 *           type: string
 *           format: date-time
 *     AppointmentSummary:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         time:
 *           type: string
 *           format: date-time
 *         opened:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         vendorId:
 *           type: string
 *           nullable: true
 *         userId:
 *           type: string
 *           nullable: true
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *           example: false
 *         error:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *             code:
 *               type: string
 *         data:
 *           type: null
 */

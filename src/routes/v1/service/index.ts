import express from "express";
import { catchSystemRouteError } from "../../../utility/catch-system-error";
import { ErrorType, Response, SystemError } from "../../../constants";
import { prismaClient } from "../../../utility";
import { authMiddleware } from "../../../middlewares";
import { ACCOUNT_ID_KEY } from "../../../constants/values";
import AppointmentRoute from "./appointment";

const VendorServiceRoute = express.Router();

VendorServiceRoute.use(authMiddleware());

VendorServiceRoute.use("/appointment", AppointmentRoute);

interface ServiceCreateBody {
  name: string;
  imageUrl: string;
  price: number;
}

/**
 * @swagger
 * /vendor/service:
 *   post:
 *     tags:
 *       - Vendor Service
 *     summary: Create a new vendor service
 *     description: Creates a new service for an authenticated vendor.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServiceCreateBody'
 *     responses:
 *       200:
 *         description: Successfully created a new vendor service
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
 *                   $ref: '#/components/schemas/VendorService'
 *                 error:
 *                   type: null
 *                   description: Null when the request is successful
 *       400:
 *         description: Missing or invalid input fields
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized access (authentication required)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
VendorServiceRoute.post(
  "/",
  catchSystemRouteError(async (req, res) => {
    const body = req.body as ServiceCreateBody;

    if (!body?.name) throw SystemError.throw(ErrorType.ServiceNameValueMissing);
    if (!body?.price) throw SystemError.throw(ErrorType.ServicePriceMissing);
    if (!body?.imageUrl) throw SystemError.throw(ErrorType.ServiceImageMissing);

    const accountId: string = req.store.get(ACCOUNT_ID_KEY);

    const service = await prismaClient.vendorService.create({
      data: {
        name: body.name,
        imageUrl: body.imageUrl,
        price: body.price,
        vendorId: accountId,
      },
      select: {
        id: true,
        name: true,
        imageUrl: true,
        price: true,
      },
    });

    res.status(200).json(
      Response.success({
        ...service,
      })
    );
  })
);

/**
 * @swagger
 * components:
 *   schemas:
 *     ServiceCreateBody:
 *       type: object
 *       required:
 *         - name
 *         - imageUrl
 *         - price
 *       properties:
 *         name:
 *           type: string
 *           example: "Haircut"
 *           description: The name of the vendor service
 *         imageUrl:
 *           type: string
 *           example: "https://example.com/images/haircut.jpg"
 *           description: URL of the service image
 *         price:
 *           type: number
 *           example: 25.99
 *           description: Price of the service
 *     VendorService:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the service
 *         name:
 *           type: string
 *           description: The name of the service
 *         imageUrl:
 *           type: string
 *           description: URL of the service image
 *         price:
 *           type: number
 *           description: Price of the service
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *           description: Indicates the request failed
 *           example: false
 *         error:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               description: Description of the error
 *             code:
 *               type: string
 *               description: Error code
 *         data:
 *           type: null
 *           description: Null when the request fails
 */

export default VendorServiceRoute;

import express from "express";
import { catchSystemRouteError } from "../../../utility/catch-system-error";
import { ErrorType, Response, SystemError } from "../../../constants";
import { prismaClient } from "../../../utility";
import { authMiddleware } from "../../../middlewares";
import { ACCOUNT_ID_KEY } from "../../../constants/values";

const AppointmentRoute = express.Router();

AppointmentRoute.use(authMiddleware());

interface AppointmentCreateBody {
  time: Date;
  note?: string;
  vendorId: string;
}

interface AppointmentUpdateBody {
  appointmentId: string;
  opened: boolean;
}

/**
 * @swagger
 * /vendor/service/appointment:
 *   post:
 *     tags:
 *       - Appointment
 *     summary: Create a new appointment
 *     description: Allows an authenticated user to book an appointment with a vendor.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AppointmentCreateBody'
 *     responses:
 *       200:
 *         description: Successfully created a new appointment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Appointment'
 *                 error:
 *                   type: "null"
 *                   example: null
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

AppointmentRoute.post(
  "/",
  catchSystemRouteError(async (req, res) => {
    const body = req.body as AppointmentCreateBody;

    if (!body?.vendorId) throw SystemError.throw(ErrorType.VendorIdMissing);
    if (!body?.time) throw SystemError.throw(ErrorType.AppointmentTimeMissing);

    const accountId: string = req.store.get(ACCOUNT_ID_KEY);

    const service = await prismaClient.appointMent.create({
      data: {
        time: new Date(body.time),
        userId: accountId,
        opened: true,
        note: body.note,
        vendorId: body.vendorId,
      },
      select: {
        id: true,
        time: true,
        opened: true,
        vendorId: true,
        createdAt: true,
      },
    });

    res.status(200).json(
      Response.success({
        ...service,
      })
    );
  })
);

AppointmentRoute.patch(
  "/",
  catchSystemRouteError(async (req, res) => {
    const body = req.body as AppointmentUpdateBody;

    const service = await prismaClient.appointMent.update({
      where: { id: body.appointmentId },
      data: {
        opened: body.opened,
      },
      select: {
        id: true,
        time: true,
        opened: true,
        vendorId: true,
        createdAt: true,
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
 *     AppointmentCreateBody:
 *       type: object
 *       required:
 *         - time
 *         - vendorId
 *       properties:
 *         time:
 *           type: number
 *           example: 1720418400000
 *           description: The timestamp (in milliseconds) of the appointment.
 *         vendorId:
 *           type: string
 *           example: "clxy6t3mc0000y36ds6oj4z9d"
 *           description: The ID of the vendor to book an appointment with.
 *     Appointment:
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
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         ok:
 *           type: boolean
 *           example: false
 *         data:
 *           type: "null"
 *           example: null
 *         error:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Vendor ID is missing"
 *             code:
 *               type: number
 *               example: 2070
 */
export default AppointmentRoute;

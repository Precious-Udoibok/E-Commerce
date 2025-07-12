import "dotenv/config";
import express from "express";
import swaggerJsdoc, { Options as swaggerJSDocOption } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import AuthRoute from "./v1/auth";
import VendorServiceRoute from "./v1/service";
import AccountRoute from "./v1/account";
import VendorsRoute from "./v1/vendors";
import UsersRoute from "./v1/users";
import UserSuspensionRoute from "./v1/users/suspend";

const v1Route = express.Router();

const options: swaggerJSDocOption = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "👷👩‍🍳👨‍🔧 E-Commerce",
      description: "E-Commerce Platform ",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/v1`,
        description: "Development server",
      },
      {
        url: `${process.env.HOST_URL}`,
        description: "Production server",
      },
    ],
  },
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      scheme: "bearer",
      in: "header",
    },
  },
  apis: ["**/v1/**/*.ts"], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);

v1Route.use("/account", AccountRoute);

v1Route.use("/docs", swaggerUi.serve);

v1Route.get("/docs", swaggerUi.setup(swaggerSpec));

v1Route.use("/auth", AuthRoute);

v1Route.use("/vendors", VendorsRoute);

v1Route.use("/vendor/service", VendorServiceRoute);

v1Route.use("/users", UsersRoute);
v1Route.use("/users/suspension", UserSuspensionRoute);

export default v1Route;

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *   schemas:
 *     ServerError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: The error's message.
 *         code:
 *           type: integer
 *           description: The error's code.
 */

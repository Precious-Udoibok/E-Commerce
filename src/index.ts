import { config } from "dotenv";
import express from "express";
import { env } from "process";
import v1Route from "./routes";
import cors from "cors";
import { kDefaultApiVersion } from "./constants/values";
import { pageNotFound } from "./middlewares";
import { requestTempStore } from "./utility";
import path from "path";

config({ path: path.join(__dirname, "../../../.env") });

const port = env.PORT || 4000;
const app = express();

app.use(express.json());

app.use(requestTempStore());

app.use(cors());

app.use("/v1", v1Route);

app.get("/", (_, res) => {
  res.redirect("/docs");
});

app.get("/docs", (_, res) => {
  res.redirect(`/${kDefaultApiVersion}/docs`);
});

app.use(pageNotFound());

try {
  // Listen and serve
  app.listen(port, () => {
    console.log("Running at port: " + port);
  });
} catch (e) {
  console.error("Start up error: ", e);
}

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import { carRouter } from "./routes/carRoutes";
import { HandleErrors } from "./middlewares/handleErrors.middleware";

export const app = express();

app.use(json());
app.use("/cars", carRouter);
app.use(HandleErrors.execute);
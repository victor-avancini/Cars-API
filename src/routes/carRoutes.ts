import { Router } from "express";
import { container } from "tsyringe";
import { CarControllers } from "../controllers/car.controllers";
import { CarServices } from "../services/car.services";
import { IsCarIdValid, ValidateBody } from "../middlewares";
import { carCreateSchema, carUpdateSchema } from "../schemas/car.schemas";

export const carRouter = Router();

container.registerSingleton("CarServices", CarServices);
const carControllers = container.resolve(CarControllers);

carRouter.post("/", ValidateBody.execute(carCreateSchema), (req, res) => carControllers.create(req, res));
carRouter.get("/", (req, res) => carControllers.getMany(req, res));
carRouter.get("/:id", IsCarIdValid.execute, (req, res) => carControllers.getOne(req, res));
carRouter.patch("/:id", IsCarIdValid.execute, ValidateBody.execute(carUpdateSchema), (req, res) => carControllers.update(req, res));
carRouter.delete("/:id", IsCarIdValid.execute, (req, res) => carControllers.delete(req, res));
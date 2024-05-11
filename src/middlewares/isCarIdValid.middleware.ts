import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";

export class IsCarIdValid {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const carId = String(req.params.id);

        const car = await prisma.car.findFirst({ where: { id: carId } });

        if(!car) {
            throw new AppError(404, "Car not found.");
        }

        res.locals.car = car;

        return next();
    }
}
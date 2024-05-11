import "reflect-metadata";
import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { Car, CarCreate, CarUpdate } from "../interfaces/car.interfaces";

@injectable()
export class CarServices {
    async create(body: CarCreate): Promise<Car> {
        const response = await prisma.car.create({ data: body });

        return response;
    };

    async getMany(): Promise<Car[]> {
        const response = await prisma.car.findMany();

        return response;
    };

    async getOne(carId: string): Promise<Car | null> {
        return await prisma.car.findFirst({ where: { id: carId } })
    };

    async update(body: CarUpdate, carId: string): Promise<Car> {
        const updatedCar = { ...body }

        return await prisma.car.update({ where: { id: carId }, data: updatedCar })
    };

    async delete(carId: string): Promise<void> {
        await prisma.car.delete({ where: { id: carId } });
    };
};

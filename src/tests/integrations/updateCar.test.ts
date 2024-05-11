import { prisma } from "../../database/prisma"
import { carCreateBodyMock, carUpdateBodyMock } from "../mocks/car.mocks"
import { request } from "../utils/request";

describe("Integration test: update car", () => {
    test("should be able to update a car successfully", async () => {
        const car = await prisma.car.create({ data: carCreateBodyMock });

        const data = await request.patch(`/cars/${car.id}`).send(carUpdateBodyMock).expect(200).then(response => response.body);

        const newCar = { ...car, ...carUpdateBodyMock };

        expect(data).toStrictEqual(newCar);
    });

    test("should throw error when car is invalid", async () => {
        const data = await request.patch("/cars/a06d33ca-d611-4ff1-a497-2e50ee539986").expect(404).then(response => response.body);

        expect(data.message).toBe("Car not found.");
    })
});
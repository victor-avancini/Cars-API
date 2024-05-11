import { prisma } from "../../database/prisma"
import { carCreateBodyMock } from "../mocks/car.mocks"
import { request } from "../utils/request";

describe("Integration test: delete car", () => {
    test("should be able to delete a car successfully", async () => {
        const car = await prisma.car.create({ data: carCreateBodyMock });

        await request.delete(`/cars/${car.id}`).expect(204);
    });

    test("should throw error when car is invalid", async () => {
        const data = await request.delete("/cars/a06d33ca-d611-4ff1-a497-2e50ee539986").expect(404).then(response => response.body)

        expect(data.message).toBe("Car not found.")
    });
});
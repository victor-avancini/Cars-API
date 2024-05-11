import { CarServices } from "../../services/car.services";
import { carCreateBodyMock, carMock, invalidCarMock } from "../mocks/car.mocks";
import { prismaMock } from "../mocks/prisma";

describe("Unit test: create car", () => {
    test("should be able to create a car successfully", async () => {
        const carServices = new CarServices();

        prismaMock.car.create.mockResolvedValue(carMock);

        const data = await carServices.create(carCreateBodyMock);

        expect(data).toBe(carMock);
    });
});
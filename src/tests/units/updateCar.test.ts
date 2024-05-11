import { CarServices } from "../../services/car.services"
import { carMock, carUpdateBodyMock } from "../mocks/car.mocks";
import { prismaMock } from "../mocks/prisma";

describe("Unit test: update car", () => {
    test("should be able to update a car successfully", async () => {
        const carServices = new CarServices();

        const newCarExpect = { ...carMock, ...carUpdateBodyMock };

        prismaMock.car.update.mockResolvedValue(newCarExpect);

        const data = await carServices.update(carUpdateBodyMock, carMock.id);

        expect(data).toStrictEqual(newCarExpect);
    })
})
import { CarServices } from "../../services/car.services";
import { carListMock, carMock } from "../mocks/car.mocks"
import { prismaMock } from "../mocks/prisma"

describe("Unit test: get many cars", () => {
    test("should be able to get many cars successfully", async () => {
        prismaMock.car.findMany.mockResolvedValue(carListMock);

        const carServices = new CarServices();

        const data = await carServices.getMany();

        expect(data).toHaveLength(2);
        expect(data).toBe(carListMock);
    });

    test("should be able to get a single car by the id correctly", async () => {
        prismaMock.car.findFirst.mockResolvedValue(carMock);

        const carServices = new CarServices();

        const data = await carServices.getOne(carMock.id);

        expect(data).toStrictEqual(carMock);
    })
})
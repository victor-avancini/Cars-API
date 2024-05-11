import { prisma } from "../../database/prisma"
import { carCreateBodyMock, carCreateListBodyMock, carMock } from "../mocks/car.mocks"
import { request } from "../utils/request";

describe("Integration test: get many cars", () => {
    test("should be able to get many cars successfully", async () => {
        await prisma.car.createMany({ data: carCreateListBodyMock });

        const data = await request.get("/cars").expect(200).then(response => response.body);

        expect(data).toHaveLength(2);
        expect(data[0].id).toBeDefined();
        expect(data[0].name).toBe(carCreateListBodyMock[0].name);
        expect(data[0].description).toBe(carCreateListBodyMock[0].description);
        expect(data[0].brand).toBe(carCreateListBodyMock[0].brand);
        expect(data[0].year).toBe(carCreateListBodyMock[0].year);
        expect(data[0].km).toBe(carCreateListBodyMock[0].km);
        expect(data[1].name).toBe(carCreateListBodyMock[1].name);
        expect(data[1].description).toBe(carCreateListBodyMock[1].description);
        expect(data[1].brand).toBe(carCreateListBodyMock[1].brand);
        expect(data[1].year).toBe(carCreateListBodyMock[1].year);
        expect(data[1].km).toBe(carCreateListBodyMock[1].km);
    });

    test("should be able to get a single car by the id correctly", async () => {
        const car = await prisma.car.create({ data: carCreateBodyMock });

        const data = await request.get(`/cars/${car.id}`).expect(200).then(response => response.body);

        expect(data.id).toBeDefined();
        expect(data.name).toBe(carCreateBodyMock.name);
    })
});
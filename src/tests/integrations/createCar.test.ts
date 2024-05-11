import { carCreateBodyMock } from "../mocks/car.mocks";
import { request } from "../utils/request";


describe("Integration test: create car", () => {
    test("should be able to create a car successfully", async () => {
        const data = await request.post("/cars").send(carCreateBodyMock).expect(201).then(response => response.body);

        expect(data.id).toBeDefined();
        expect(data.name).toBe(carCreateBodyMock.name);
        expect(data.description).toBe(carCreateBodyMock.description);
        expect(data.brand).toBe(carCreateBodyMock.brand);
        expect(data.year).toBe(carCreateBodyMock.year);
        expect(data.km).toBe(carCreateBodyMock.km);
    });
});
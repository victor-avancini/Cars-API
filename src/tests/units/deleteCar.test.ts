import { CarServices } from "../../services/car.services"
import { carMock } from "../mocks/car.mocks";

describe("Unit test: delete car", () => {
    test("should be able to delete a car successfully", async () => {
        const carServices = new CarServices();

        await carServices.delete(carMock.id);
    });
});
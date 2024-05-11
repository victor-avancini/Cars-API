import { inject, injectable } from "tsyringe";
import { CarServices } from "../services/car.services";
import { Request, Response } from "express";

@injectable()
export class CarControllers {
    constructor(@inject("CarServices") private carServices: CarServices) { }

    async create(req: Request, res: Response): Promise<Response> {
        const response = await this.carServices.create(req.body);

        return res.status(201).json(response)
    }

    async getMany(req: Request, res: Response): Promise<Response> {
        const response = await this.carServices.getMany();

        return res.status(200).json(response)
    }

    async getOne(req: Request, res: Response): Promise<Response> {
        const response = await this.carServices.getOne(req.params.id);

        return res.status(200).json(response)
    }

    async update(req: Request, res: Response): Promise<Response> {
        const response = await this.carServices.update(req.body, req.params.id);

        return res.status(200).json(response)
    }

    async delete(req: Request, res: Response): Promise<Response> {
        await this.carServices.delete(req.params.id);

        return res.status(204).json();
    }
}
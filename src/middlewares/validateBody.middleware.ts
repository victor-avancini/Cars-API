import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export class ValidateBody {
    static execute(schema: ZodSchema) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = await schema.parse(req.body);

            return next();
        }
    }
}
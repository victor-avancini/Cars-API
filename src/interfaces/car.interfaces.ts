import { z } from "zod";
import { carCreateSchema, carSchema, carUpdateSchema } from "../schemas/car.schemas";

export type Car = z.infer<typeof carSchema>;

export type CarCreate = z.infer<typeof carCreateSchema>;

export type CarUpdate = z.infer<typeof carUpdateSchema>;
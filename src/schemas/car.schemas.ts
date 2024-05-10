import { z } from "zod";

const carSchema = z.object({
    id: z.string(),
    name: z.string().min(1),
    description: z.string().optional(),
    brand: z.string().min(1),
    year: z.number().positive(),
    km: z.number().positive()
})
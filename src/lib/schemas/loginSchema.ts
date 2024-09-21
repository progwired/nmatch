import { z } from "zod";


export const loginSchema = z.object({
    email: z.string().email().min(6),
    password: z.string().min(6, {
        message: "Password must be with min 6 characters!"
    })
})

export type LoginSchema = z.infer<typeof loginSchema>
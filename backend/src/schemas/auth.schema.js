import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required",
    }),
    email: z.string({
        required_error: "Email is required",
    }).email({
        required_error: "Invalid email",
    }),
    password: z.string({
        required_error: "password is required",
    }).min(6,{
        message: "password must be a least 6 characters"
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email({
        message: "Email is not valid",
    }),
    password: z.string({
        required_error: "password is required",
    }).min(6,{
        message: "password must be at least 6 characters"
    }),
});
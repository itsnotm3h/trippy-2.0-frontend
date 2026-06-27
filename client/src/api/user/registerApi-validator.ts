import z from "zod";

export const RegisterRequestSchema = z.object({
    firstName: z.string().min(1, "Field is required").max(50, { message: "Max 50 chars" }),
    lastName: z.string().min(1, "Field is required").max(50, { message: "Max 50 chars" }),
    email: z.email(),
    password: z.string().min(8, "Min 8 chars").max(25, { message: "Max 25 chars" }),
    confirmPassword: z.string().min(8, "Min 8 chars").max(25, { message: "Max 25 chars" }),
    displayName: z.string().min(5, "Min 5 chars").max(16, { message: "Max 16 chars" })
}).superRefine((data, ctx) => {
    if (data.password != data.confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "Confirm password is incorrect",
            path: [`confirmPassword`]
        })
    }
    if (data.displayName.includes(" ")) {
        ctx.addIssue({
            code: "custom",
            message: "Confirm password is incorrect",
            path: [`displayName`]
        })
    }
})


export type RegisterFormType = z.infer<typeof RegisterRequestSchema>;
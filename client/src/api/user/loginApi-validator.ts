import z from "zod";

export const LoginSchema = z.object({
    email:z.email(),
    password:z.string().min(1,"Field is required").max(50,{message:"Invalid password"})
})

export type LoginFormType = z.infer<typeof LoginSchema>;
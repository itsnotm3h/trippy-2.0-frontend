import { Stack } from "@mui/material"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterPanel } from "./RegisterPanel";
import { RegisterRequestSchema } from "@/api/user/registerApi-validator";

export const RegisterPage = () => {

  const form = useForm({
        resolver: zodResolver(RegisterRequestSchema),
    });

  return (
    <FormProvider {...form}>
      <Stack sx={{ m: "auto" }}>
        <RegisterPanel />
      </Stack>
    </FormProvider>
  )
}
import { Stack } from "@mui/material"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/api/user/loginApi-validator";
import { LoginPanel } from "./LoginPanel";

export const LoginPage = () => {

  const form = useForm({
        resolver: zodResolver(LoginSchema),
    });

  return (
    <FormProvider {...form}>
      <Stack sx={{ m: "auto" }}>
        <LoginPanel />
      </Stack>
    </FormProvider>
  )
}
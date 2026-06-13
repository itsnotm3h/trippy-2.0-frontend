import { Box, Card, CardContent, Stack, Typography } from "@mui/material"
import { LoginPanel } from "./LoginPanel"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/api/user/loginApi-validator";

export const LoginRegisterPage = () => {

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
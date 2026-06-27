import { type LoginFormType } from "@/api/user/loginApi-validator";
import { useLoginUser } from "@/api/user/loginQueries";
import { GenericTextField } from "@/component/FormField/GenericTextField";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";


export const LoginPanel = () => {
    const { handleSubmit } = useFormContext<LoginFormType>();
    const { mutate, isError, error} = useLoginUser();

    const onSubmit = (data: LoginFormType) => {
        mutate(data);
    }

    const formFields = [
        { label: "Email", name: "email", type: "text", placeholder: "Enter email", required: true },
        { label: "Password", name: "password", type: "password", placeholder: "Enter password", required: true }
    ]

    return (
        <Stack
            sx={{
                backgroundColor: "#fff",
                minWidth: 450,
                m: "auto",
                borderRadius: "var(--border-radius-md)",
                px: 5,
                py: 10
            }}>
            <Stack sx={{ justifyContent: "center", alignItems: "center",mb:1 }}>
                <Box component="img" src="login.svg" alt="visualcon" sx={{ width: "20%" }} />
                <Typography variant="h2">Login</Typography>
                <Box>Don't have an account? <Link to="/register">Sign up here.</Link></Box>
            </Stack>

            <Stack sx={{ gap: 2 }}>

                {formFields.map((item) => {
                    return (
                        <Box key={`formField_${item.name}`}>
                            <Typography>{item.label}</Typography>
                            <GenericTextField name={item.name} type={item.type} placeholder={item.placeholder} required={item.required} />
                        </Box>)
                })}

                <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>Login</Button>

            </Stack>

            {isError && (<Stack sx={{mt:1}}><Typography color="error">{error.response?.data?.message}</Typography></Stack>)}

        </Stack>
    );
}
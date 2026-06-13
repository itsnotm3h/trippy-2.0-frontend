import { type LoginFormType } from "@/api/user/loginApi-validator";
import { GenericTextField } from "@/component/FormField/GenericTextField";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";


export const LoginPanel = () => {
    const {handleSubmit} = useFormContext<LoginFormType>();

    const onSubmit = (data:LoginFormType)=>{
        console.log(data);
    }

    return (
        <Stack
            sx={{
                backgroundColor: "#fff",
                minWidth: 450,
                m: "auto",
                borderRadius: "var(--border-radius-md)",
                px:5,
                py:10
            }}>
            <Stack sx={{ justifyContent: "center", alignItems: "center", }}>
                <Box component="img" src="login.svg" alt="visualcon" sx={{ width: "20%" }} />
                <Typography variant="h2">Login</Typography>
                <Stack>Don't have an account?{}</Stack>
            </Stack>

            <Stack sx={{gap:2}}>
                <Box>
                Email
                <GenericTextField name="email" type="text" placeholder="Enter email" required={true} />
                </Box>

                <Box>
                Password
                <GenericTextField name="password" type="password" placeholder="Enter password" required={true} />
                </Box>

                <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>Login</Button>

            </Stack>

        </Stack>
    );
}
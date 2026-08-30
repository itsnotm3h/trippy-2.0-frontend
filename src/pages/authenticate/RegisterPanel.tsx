import type { RegisterFormType } from "@/api/user/registerApi-validator";
import { useRegisterUser } from "@/api/user/registerQueries";
import { GenericTextField } from "@/component/FormField/GenericTextField";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";


export const RegisterPanel = () => {
    const { handleSubmit } = useFormContext<RegisterFormType>();

    const { mutate, isError, error } = useRegisterUser();

    const onSubmit = (data: RegisterFormType) => {
        mutate(data);
    }

    return (
        <Stack
            sx={{
                backgroundColor: "#fff",
                minWidth: 450,
                m: "auto",
                borderRadius: "var(--border-radius-md)",
                p: 5
            }}>
            <Stack sx={{ justifyContent: "center", alignItems: "center", mb: 1 }}>
                <Box component="img" src="login.svg" alt="visualcon" sx={{ width: "20%" }} />
                <Typography variant="h2">Register</Typography>
            </Stack>

            <Stack sx={{ gap: 2, flexWrap: "wrap" }}>

                <Stack direction={"row"} sx={{ gap: 1 }}>
                    <Stack>
                        <Typography>First Name</Typography>
                        <GenericTextField name="firstName" type="text" required={true} />
                    </Stack>
                    <Stack>
                        <Typography>Last Name</Typography>
                        <GenericTextField name="lastName" type="text" required={true} />
                    </Stack>
                </Stack>

                <Stack>
                    <Typography>Display Name</Typography>
                    <GenericTextField name="displayName" type="text" required={true} />
                </Stack>


                <Stack>
                    <Typography>Email</Typography>
                    <GenericTextField name="email" type="text" required={true} />
                </Stack>

                <Stack direction={"row"} sx={{ gap: 1 }}>
                    <Stack>
                        <Typography>Password</Typography>
                        <GenericTextField name="password" type="password" required={true} />
                    </Stack>
                    <Stack>
                        <Typography>Confirm Password</Typography>
                        <GenericTextField name="confirmPassword" type="password" required={true} />
                    </Stack>
                </Stack>


                <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>Register</Button>

            </Stack>

            {isError && (<Stack sx={{mt:1}}><Typography color="error">{error.response?.data?.message}</Typography></Stack>)}

        </Stack>
    );
}
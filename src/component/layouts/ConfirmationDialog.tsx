import { Box, Button, Stack, Typography } from "@mui/material"
import { GenericButton } from "../ui/GenericButton"


interface ConfirmationDialogProps {
    title: string,
    message: React.ReactNode,
    confirmText?: string,
    confirmationClick?: any
}

export const ConfirmationDialog = ({ title, message, confirmText = "Confirm", confirmationClick }: ConfirmationDialogProps) => {

    return (
        <Stack sx={{ mb: 2 }}>
            <Typography sx={{ textAlign: "center" }} variant="h1">{title}</Typography>
            <Stack sx={{ m: "auto", mb: 1, gap: 1 }}>
                <img src="/warning.svg" width={"100%"} alt="warning"/>

                <Stack>
                    {message}
                    <Box sx={{ mt: 3 }}>
                        <GenericButton label={confirmText} fullWidth={true} onClick={confirmationClick} />
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}
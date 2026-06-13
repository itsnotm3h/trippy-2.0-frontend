import { Chip, Stack } from "@mui/material"

interface LoginButtonProps {
    loggedIn: boolean;
}

export const LoginButton = ({ loggedIn }: LoginButtonProps) => {
    return (
        <Stack>
            <Chip label={loggedIn ? "Logout" : "Login"} size='small' sx={{
                width: 90,
                cursor: "pointer",
                backgroundColor: 'var(--color-black)',
                color: "#fff",
                fontWeight: 400,
                fontFamily:"var(--font-family-base)",
                fontSize:"var(--font-size-xs)",
                fontStyle:"normal",
                transition: {
                    backgroundColor:"var(--button-transition)"
                },
                transform: "var(--button-transition)",
                '&:hover': {
                     backgroundColor: '#e98c00',
                }
            }} />
        </Stack>
    )
}
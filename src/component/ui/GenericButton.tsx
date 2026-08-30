import { Button, Chip, Stack } from "@mui/material"

interface LoginButtonProps {
    label: string;
    type?:string;
    fullWidth?:boolean;
    onClick?: ()=>void;
}

export const GenericButton = ({label,type, onClick,fullWidth}: LoginButtonProps) => {
    return (
            <Button size='small' sx={{
                width: fullWidth ? "100%" : 90,
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
            }} 
            type={type}
            onClick={onClick}
            >
                {label} 
            </Button>
    )
}
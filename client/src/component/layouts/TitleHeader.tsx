import { Stack, Typography } from "@mui/material"
import type { ReactNode } from "react";

export interface TitleHeaderProps {
    title:string;
    additionalComponent?:ReactNode;
}

export const TitleHeader = ({title, additionalComponent}:TitleHeaderProps)=>{
    return(
        <Stack direction={"row"} sx={{mt:3}}>
            <Typography variant="h1">{title}</Typography>
            {additionalComponent}
        </Stack>
    )
}
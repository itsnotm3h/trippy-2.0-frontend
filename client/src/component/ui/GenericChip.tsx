import { Chip, type SxProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

export interface GenericChipProps{
    type:string;
    label:ReactNode;
    size?:"small" | "medium";
    sx?:SxProps<Theme>;
    onClick?:()=>void;
}

export const CHIP_TYPE = {
    CUSTOM:"CUSTOM",
    BUTTON:"BUTTON"
}




export const GenericChip = ({type,label,size, sx, onClick}:GenericChipProps)=>{

    if(type == CHIP_TYPE.CUSTOM){
        return <Chip label={label} size={size} sx={sx} onClick={onClick}/>

    } else if (type == CHIP_TYPE.BUTTON){
        return <Chip label={label} size='small' sx={{
                cursor: "pointer",
                backgroundColor: 'var(--color-black)',
                color: "#fff",
                fontWeight: 400,
                fontFamily:"var(--font-family-base)",
                fontSize:"var(--font-size-xs)",
                fontStyle:"normal",
                height:"100%",
                transition: {
                    backgroundColor:"var(--button-transition)"
                },
                transform: "var(--button-transition)",
                '&:hover': {
                     backgroundColor: '#e98c00',
                }
            }} 
            onClick={onClick}
        />
    }

    else{
        return <></>
    }
}
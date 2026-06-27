import { GenericTextField } from "@/component/FormField/GenericTextField"
import { Search } from "@mui/icons-material"
import { Button, InputAdornment, Stack, TextField } from "@mui/material"
import { useForm, useWatch } from "react-hook-form"
import { useTripsContext } from "./TripsContext"

export const TripsAction = () => {

    const{register,watch} = useForm();

    const {setSearch} = useTripsContext();

    return (
        <Stack direction={"row"} sx={{ ml: "auto", gap: 1 }}>
            <Button variant="contained" size="small">+ New Trip</Button>
            <TextField
            {...register("search")}
                size="small"
                placeholder="Search"
                sx={{
                    width: 400,
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '19px',
                    },
                }}
                onChange = {(e=>{
                    if(e!==undefined) setSearch(e.target.value);
                })}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                    },
                }}

            />
        </Stack>
    )
}
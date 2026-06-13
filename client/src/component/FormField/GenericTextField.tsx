import { TextField, useTheme } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface GenericTextFieldProps {
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    name: string;
}

export const GenericTextField = ({ type, placeholder, disabled, name, required}: GenericTextFieldProps) => {

    const { register, formState: { errors } } = useFormContext();
    
    const hasError = !!errors[name]; 

    const theme = useTheme();

    return (
        <TextField
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            size="small"
            error={hasError} 
            fullWidth
            helperText={errors[name]?.message as string}
            required={required}
            {...register(`${name}`)}
        />
    )
}
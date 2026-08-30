import { InputAdornment, TextField, type SxProps, type Theme } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { DataFormatter } from "@/utils/DataFormatter";



interface GenericTextFieldProps {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  name: string;
  isStyling?: boolean;
  unit?: string;
}

export const GenericTextField = ({
  type,
  placeholder,
  disabled,
  name,
  required,
  isStyling,
  unit
}: GenericTextFieldProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const hasError = !!errors[name];
  
  const countryCode = watch("country");

  const styling: SxProps<Theme> = isStyling != undefined
    ? {
      "& .MuiOutlinedInput-root": {
        background: "none",
      },
      "& .MuiInputBase-input": {
        background: "none",
        padding: 0,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiFormHelperText-root":{
        margin:0
      }
    }
    : {};

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
      sx={styling}
      slotProps={unit ? {
        input: {
          endAdornment: <InputAdornment position="end">{DataFormatter.formatCurrency(countryCode)}</InputAdornment>,
        }
      } : {}}
    />
  );
};

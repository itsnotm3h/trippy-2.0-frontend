import { TextField, useTheme, type SxProps, type Theme } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface GenericTextFieldProps {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  name: string;
  isStyling?: boolean;
}

export const GenericTextField = ({
  type,
  placeholder,
  disabled,
  name,
  required,
  isStyling,
}: GenericTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = !!errors[name];

  const styling: SxProps<Theme> | undefined = !isStyling
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
      }
    : undefined;

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
    />
  );
};

import type { Theme } from "@emotion/react";
import { Typography, type SxProps } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";

interface FormDatePickerProps {
    name: string;
    required?: boolean;
}
export const FormDatePicker = ({ name,required }: FormDatePickerProps) => {

    const {
        control,
        formState: { errors },
    } = useFormContext();

    const hasError = Boolean(errors?.[name]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <DatePicker
                        value={value ?? null}
                        onChange={onChange}
                        slotProps={{
                            textField: {
                                size: 'small',
                                required:required,
                                error:hasError,
                                helperText: hasError ? `${errors[name]?.message as string}` : "",
                                sx: {
                                    '& fieldset': { border: 'none !important', padding:0 },
                                    '& .MuiPickersInputBase-root': { padding: 0}, // Targets the text zone
                                    '& .MuiPickersSectionList-root': { padding: 0}, // Targets the text zone
                                    '& .MuiFormHelperText-root':{margin:0}
                                }
                            },

                        }
                        }
                    />
                )}
            />
        </LocalizationProvider>
    )
}
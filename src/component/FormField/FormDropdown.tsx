import { ArrowDropDown } from "@mui/icons-material";
import { Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

export interface Dropdown {
  value:string;
  label:string;
}
interface FormDropdownProps {
  type: string;
  disabled?: boolean;
  options?: Dropdown[];
  name: string;
  label?: string;
}

export const FormDropdown = ({
  type,
  disabled,
  name,
  options,
  label
}: FormDropdownProps) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const hasError = Boolean(errors?.[name]);

  //Set the form with this function. 
  const handleSelect = (formfieldName: string, value: string) => {
    setValue(formfieldName, value,{
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    } );
    setAnchorEl(null);
  }

  const watchValue = watch(name);

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const open = Boolean(anchorEl);

  // Opens the menu by setting the button as the anchor target
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Closes the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  function getCountryName (name:string){
    const result = options?.find((item)=> item.value == name);
    return result?.label ?? name;
  }

  return (

    <Stack sx={{ width: "100%", justifyContent: "space-evenly", height:"100%", position:"relative"}}>
      <Stack direction={"row"}
        onClick={handleClick}
        role="button"
        aria-controls={open ? `dropdown-menu_${type}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          width: "100%",
          justifyContent: "space-between",
          cursor: 'pointer',
          pointerEvents: disabled ? "none" : "auto",
          '&:hover': { backgroundColor: 'action.hover' } // Smooth hover feedback
        }}
      >
        <Typography sx={{ fontWeight: 700 }}>{label}</Typography>
        <ArrowDropDown />
      </Stack>
      <Menu
        id={`dropdown-menu_${type}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ width: "100%" }}
        defaultValue="-"
      >

        {options?.map((item) =>
          <MenuItem key={`${type}_option_${item.value}`} value="" onClick={() => handleSelect(name, item.value)}>{item.label}</MenuItem>
        )}

      </Menu>
      <Stack sx={{height:"100%", justifyContent:"space-evenly"}}>
      <Typography>{getCountryName(watchValue) == null ? "-" : getCountryName(watchValue)}</Typography>
      {hasError && <Typography color='error' variant="subtitle1">{errors[name]?.message as string}</Typography>}
      </Stack>
    </Stack>

  );
};

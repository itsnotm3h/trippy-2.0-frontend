import { GenericTextField } from "@/component/FormField/GenericTextField";
import { Search } from "@mui/icons-material";
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, useWatch } from "react-hook-form";
import { useModalStore } from "@/store/useModalStore";
import { TripForm } from "@/features/TripForm/TripForm";
import { useTripsContext } from "./TripsContext";

export const TripsAction = () => {
  const { register } = useForm();

  const { setSearch } = useTripsContext();
  const { openModal, setModalSetting } = useModalStore();

  const handleAddTrips = () => {
    setModalSetting({
      title: "",
      size: "lg",
      content: <TripForm title="Add New Trip" isEdit={false} />,
    });
    openModal();
  };

  return (
    <Stack direction={"row"} sx={{ gap: 1, mt: { xs: 1 } }}>
      <Button
        variant="contained"
        sx={{ gap: 1 }}
        size="small"
        fullWidth
        onClick={handleAddTrips}
      >
        <Typography component="span" sx={{ fontSize: "0.8rem" }}>
          +
        </Typography>
        <Typography
          component="span"
          sx={{ display: { xs: "none", sm: "flex" }, fontSize: "0.8rem" }}
        >
          New Trip
        </Typography>
      </Button>

      <TextField
        {...register("search")}
        size="small"
        placeholder="Search"
        sx={{
          minWidth: { xs: "80%", sm: 300, md: 400 },
          "& .MuiOutlinedInput-root": {
            borderRadius: "19px",
          },
        }}
        onChange={(e) => {
          if (e !== undefined) setSearch(e.target.value);
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          },
        }}
        fullWidth
      />
    </Stack>
  );
};

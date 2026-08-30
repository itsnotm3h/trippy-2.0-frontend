import {
  EditTripSchema,
  TRIP_TYPE,
  TripSchema,
  type TripInfoResponseType,
} from "@/api/trips/tripApi-validator";
import { ConfirmationDialog } from "@/component/layouts/ConfirmationDialog";
import { TripForm } from "@/features/TripForm/TripForm";
import useAuth from "@/hooks/useAuth";
import { useModalStore } from "@/store/useModalStore";
import { DataFormatter } from "@/utils/DataFormatter";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,

} from "@mui/material";
import type { Countries } from "country-to-currency";

interface TripsCardProps {
  trip: TripInfoResponseType;
  index: number;
}
export const TripsCard = ({ trip, index }: TripsCardProps) => {
  const tripDuration = DataFormatter.formatTripDuration(
    trip.startDate,
    trip.endDate,
  );

  const { user } = useAuth();

  const isEditable = user?.id == trip?.leaderId;

  const transition = {
    left: { opacity: 1, top: 10 },
    up: { opacity: 1 },
  };

  const getCardColor = (index: number) => {
    const colors = [
      "var(--color-pink)",
      "var(--color-green)",
      "var(--color-green2)",
      "var(--color-blue)",
      "var(--color-purple)",
      "var(--color-yellow)",
      "var(--color-orange)",
    ];

    return colors[index % colors.length];
  };

  const { setModalSetting, openModal } = useModalStore()
  const handleEdit = () => {

    const editFormValues = EditTripSchema.parse(trip);

    setModalSetting({
      title: "",
      size: "lg",
      content: <TripForm title="Edit Trip" isEdit={true} editFormValues={editFormValues} />,
    });
    openModal();

  }
  const handleDelete = (trip:TripInfoResponseType) => {
    setModalSetting({
      title: "",
      size: "xs",
      content: 
      <ConfirmationDialog title="Delete Trip" 
      message={
        <Stack sx={{textAlign:"center"}}>
          You are about to delete this trip:
          <Typography variant="h3" sx={{fontWeight:700}}>{trip.title} | {DataFormatter.formatCountry(trip.country)}</Typography>
        </Stack>
    } />,
    });
    openModal();
  }

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
      <Card
        sx={{
          borderRadius: "10px",
          minHeight: 250,
          display: "flex",
          flexDirection: "column",
          "&:hover .hoverActions": {
            ...transition.left,
          },
          "&:hover .showTrippy": {
            ...transition.up,
          },
          "&:hover .cardBottom": {
            flex: 2,
          },
          "&:hover .cardTop": {
            flex: 8,
          },
        }}
      >
        <CardContent
          className="cardTop"
          sx={{
            backgroundColor: getCardColor(index),
            flex: 9,
            position: "relative",
            transition: "all 0.4s ease-in-out",
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>
            {trip.isActive == true ? "Active" : "Archived"}
          </Typography>
          <Typography variant="h3">{trip.title}</Typography>
          {isEditable && (
            <Stack
              className="hoverActions"
              direction="row"
              sx={{
                position: "absolute",
                top: -10,
                right: 10,
                opacity: 0,
                gap: 1,
                transition: "all 0.4s ease-in-out",
              }}
            >
              <Box onClick={handleEdit}><img src="../tileSetting.svg" width="26" /></Box>
              <Box onClick={() => handleDelete(trip)}><img src="../tileDelete.svg" width="26" /></Box>
            </Stack>
          )}
          <Stack
            className="showTrippy"
            sx={{
              position: "absolute",
              bottom: -2,
              margin: 0,
              left: 0,
              right: 0,
              alignItems: "center",
              width: "100%",
              opacity: 0,
              transition: "all 0.4s ease-in-out",
            }}
          >
            <img src="./peek.svg" width="20%" />
          </Stack>
        </CardContent>
        <CardContent
          className="cardBottom"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            transition: "all 0.4s ease-in-out",
          }}
        >
          <Stack>
            <Typography>{DataFormatter.formatCountry(trip.country as Countries)}</Typography>
            <Typography sx={{ fontSize: "0.8rem" }}>{tripDuration}</Typography>
          </Stack>
          <Stack sx={{ ml: "auto" }}>
            <img
              src={trip.type == TRIP_TYPE.SOLO ? "../solo.svg" : "../group.svg"}
              width="24px"
              alt="tripType"
            />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

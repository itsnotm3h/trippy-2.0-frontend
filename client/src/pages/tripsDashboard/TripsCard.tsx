import {
  TRIP_TYPE,
  type TripInfoResponseType,
} from "@/api/trips/tripApi-validator";
import useAuth from "@/hooks/useAuth";
import { DataFormatter } from "@/utils/DataFormatter";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

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
              <img src="../tileSetting.svg" width="26" />
              <img src="../tileDelete.svg" width="26" />
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
            <Typography>{trip.country}</Typography>
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

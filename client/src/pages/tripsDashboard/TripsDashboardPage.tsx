import { TitleHeader } from "@/component/layouts/TitleHeader";
import { Grid, Stack, Typography } from "@mui/material";
import { TripsAction } from "./TripsAction";
import { useGetUserTrips } from "@/api/trips/TripsQueries";
import { TripsCard } from "./TripsCard";
import type { TripInfoResponseType } from "@/api/trips/tripApi-validator";
import { TripsContext, TripsProvider, useTripsContext } from "./TripsContext";
import { useContext } from "react";
import useDebounce from "@/hooks/useDebounce";

export const TripsDashboardPage = () => {
  const { search } = useTripsContext();
  const debouncedSearch = useDebounce(search, 500);

  const { data: trips, isLoading } = useGetUserTrips({
    search: debouncedSearch,
  });

  const tripsComponent = () => {
    if (isLoading) return <Typography>Loading</Typography>;
    // else if (error) return <Typography>Unable To Load Trips</Typography>
    else {
      return (
        <Grid container spacing={3}>
          {trips.map((item: TripInfoResponseType, index: number) => {
            return (
              <TripsCard
                key={`tripCard_${item.tripId}`}
                trip={item}
                index={index}
              />
            );
          })}
        </Grid>
      );
    }
  };

  return (
    <Stack sx={{ p: 2, mx: 3, gap: 2 }}>
      <TitleHeader title="Trips" additionalComponent={<TripsAction />} />
      {tripsComponent()}
    </Stack>
  );
};

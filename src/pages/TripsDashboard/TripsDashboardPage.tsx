import { TitleHeader } from "@/component/layouts/TitleHeader";
import { Grid, Stack, Typography } from "@mui/material";
import { useGetUserTrips } from "@/api/trips/TripsQueries";
import type { TripInfoResponseType } from "@/api/trips/tripApi-validator";
import useDebounce from "@/hooks/useDebounce";
import { TripsCard } from "../TripsDashboard/TripsCard";
import { useTripsContext } from "../TripsDashboard/TripsContext";
import { TripsAction } from "../TripsDashboard/TripsAction";

export const TripsDashboardPage = () => {
  const { search } = useTripsContext();
  const debouncedSearch = useDebounce(search, 500);

  const { data: trips, isLoading } = useGetUserTrips({
    search: debouncedSearch,
  });

  const tripsComponent = () => {
    if (isLoading) return <Typography>Loading</Typography>;
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

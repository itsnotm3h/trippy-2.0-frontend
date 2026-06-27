import { TRIP_TYPE, type TripInfoResponseType } from "@/api/trips/tripApi-validator";
import { DataFormatter } from "@/utils/DataFormatter";
import { Card, CardContent, CardMedia, Grid, Stack, Typography, useTheme } from "@mui/material"


interface TripsCardProps {
    trip: TripInfoResponseType;
    index: number;
}
export const TripsCard = ({ trip, index }: TripsCardProps) => {

    const tripDuration = DataFormatter.formatTripDuration(trip.startDate, trip.endDate);

    const getCardColor = (index: number) => {
        const colors = [
            'var(--color-pink)',
            'var(--color-green)',
            'var(--color-green2)',
            'var(--color-blue)',
            'var(--color-purple)',
            'var(--color-yellow)',
            'var(--color-orange)',
        ];

        return colors[index % colors.length];
    };

    return (
        <Grid size={{ xs: 6, md: 4, lg: 3 , xl:2}}>
            <Card sx={{
                borderRadius: "10px", minHeight: 250, display: 'flex',
                flexDirection: 'column'
            }}>
                <CardContent sx={{ backgroundColor: getCardColor(index) , flex: 8, position: "relative" }}>
                    <Typography sx={{ fontWeight: 500 }}>{trip.isActive == true ? "Active" : "Archived"}</Typography>
                    <Typography variant="h3">{trip.title}</Typography>
                    <Stack sx={{ position: "absolute", top: 10, right: 10 }}><img src="../tileSetting.svg" width="24px" /></Stack>
                    <Stack sx={{ position: "absolute", bottom: -1, margin: 0, left: 0, right: 0, alignItems: "center", width: "100%" }}><img src="./peek.svg" width="20%" /></Stack>
                </CardContent>
                <CardContent sx={{ flex: 2, display: "flex", flexDirection: "row" }}>
                    <Stack>
                        <Typography>{trip.country}</Typography>
                        <Typography sx={{ fontSize: "0.8rem" }}>{tripDuration}</Typography>
                    </Stack>
                    <Stack sx={{ ml: "auto" }}>
                        <img src={TRIP_TYPE.SOLO ? "../solo.svg" : "../group.svg"} width="24px" alt="tripType" />
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    )
}
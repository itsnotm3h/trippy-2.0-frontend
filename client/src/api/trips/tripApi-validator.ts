import z from "zod";


export const TRIP_TYPE = {
  SOLO: 'SOLO',
  GROUP: 'GROUP',
} as const;

export const ExpenseTypeSchema = z.enum([
  TRIP_TYPE.SOLO,
  TRIP_TYPE.GROUP,
]);


export const TripInfoRequestSchema = z.object({
    tripId:z.number()
})

export const TripsResponseSchema = z.object({
    tripId:z.number(),
    country:z.string(),
    createdAt:z.string(),
    currencyRate:z.number(),
    startDate:z.string(),
    endDate:z.string(),
    isActive:z.boolean(),
    isDeleted:z.boolean(),
    leaderId:z.number(),
    title:z.string(),
    type:ExpenseTypeSchema
})


export type TripInfoRequestType = z.infer<typeof TripInfoRequestSchema>;
export type TripInfoResponseType = z.infer<typeof TripsResponseSchema>;

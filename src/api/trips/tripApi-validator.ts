import BigNumber from "bignumber.js";
import dayjs, { Dayjs } from "dayjs";
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
  tripId: z.number()
})

export const TripsResponseSchema = z.object({
  tripId: z.number(),
  country: z.string(),
  createdAt: z.string(),
  currencyRate: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  leaderId: z.number(),
  title: z.string(),
  type: ExpenseTypeSchema
})

export const TripMemberFormSchema = z.object({
  email: z.string(),
  status:z.string(),

});

export const TripSchema = z.object({
  // tripId: z.coerce.number(),
  title: z
    .string()
    .max(150, "Max 150 characters"),
  type: z.enum(TRIP_TYPE),
  country: z
    .string()
    .transform((val) => val.toUpperCase()),
  tripMemberList: z.array(TripMemberFormSchema).nullable(),
  currencyRate: z
    .coerce.number()
    .positive("Invaild rate")
    .refine(
      (val) => {
        return new BigNumber(val).isFinite();
      },
      { message: "Invalid rate" },
    )
    .transform((val) => new BigNumber(val).toFixed(3)),
  startDate: z.custom<Dayjs>(
    (val) => dayjs.isDayjs(val) && val.isValid(),
    { message: "Enter a valid date" }
  ),
  endDate: z.custom<Dayjs>(
    (val) => dayjs.isDayjs(val) && val.isValid(),
    { message: "Enter a valid date" }
  ),
  isActive: z.boolean("Invalid value"),
  isDeleted: z.boolean("Invalid value"),
}).superRefine((data, ctx) => {
  if (data.endDate == null) {
    ctx.addIssue({
      code: "custom",
      message: "Invalid Date",
      path: [`endDate`]
    })
  }
  if (data.startDate == null) {
    ctx.addIssue({
      code: "custom",
      message: "Invalid Date",
      path: [`startDate`]
    })
  }
  if (data.endDate?.isBefore(data.startDate)) {
    ctx.addIssue({
      code: "custom",
      message: "Invalid Date",
      path: [`endDate`]
    })
  }
});


export const EditTripSchema = z.object({
  tripId: z.coerce.number(),
  title: z
    .string().min(5, "Min 5 characters")
    .max(150, "Max 150 characters"),
  type: z.enum(TRIP_TYPE),
  country: z
    .string()
    .transform((val) => val.toUpperCase()),
  tripMemberList: z.array(TripMemberFormSchema).nullable().optional(),
  currencyRate: z
    .coerce.number()
    .positive("Invaild rate")
    .refine(
      (val) => {
        return new BigNumber(val).isFinite();
      },
      { message: "Invalid rate" },
    )
    .transform((val) => new BigNumber(val).toFixed(3)),
  startDate: z.custom<Dayjs>().transform((val)=> dayjs(val)),
  endDate: z.custom<Dayjs>().transform((val)=> dayjs(val)),
  isActive: z.boolean("Invalid value"),
  isDeleted: z.boolean("Invalid value"),
}).superRefine((data, ctx) => {
  if (data.endDate == null) {
    ctx.addIssue({
      code: "custom",
      message: "Invalid Date",
      path: [`endDate`]
    })
  }
  if (data.startDate == null) {
    ctx.addIssue({
      code: "custom",
      message: "Invalid Date",
      path: [`startDate`]
    })
  }
  if (data.endDate?.isBefore(data.startDate)) {
    ctx.addIssue({
      code: "custom",
      message: "Invalid Date",
      path: [`endDate`]
    })
  }
  if (data.startDate?.isAfter(data.endDate)) {
    ctx.addIssue({
      code: "custom",
      message: "Invalid Date",
      path: [`startDate`]
    })
  }
});

export const emailSchema = z.email();

export type TripInfoRequestType = z.infer<typeof TripInfoRequestSchema>;
export type TripFormType = z.infer<typeof EditTripSchema>;
export type TripInfoResponseType = z.infer<typeof TripsResponseSchema>;

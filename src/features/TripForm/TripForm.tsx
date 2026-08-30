import { Alert, Stack, Typography } from "@mui/material";
import { Form, FormProvider, useForm } from "react-hook-form";
import { TripInformationSection } from "./FormSections/TripInformationSection";
import { TripMemberSection } from "./FormSections/TripMemberSection";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditTripSchema, TRIP_TYPE, TripSchema, type TripFormType } from "@/api/trips/tripApi-validator";
import { useAddUserTrip, useUpdateUserTrip } from "@/api/trips/TripsQueries";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "@/store/useModalStore";
import { useQueryClient } from "@tanstack/react-query";


interface TripFormProps {
  title: string;
  editFormValues?: TripFormType;
  isEdit: boolean
}

export const TripForm = ({ title, editFormValues, isEdit }: TripFormProps) => {
  const [alert, setAlert] = useState({message:"", isShow:false});
  const { closeModal } = useModalStore();

  const form = useForm({
    resolver: zodResolver(isEdit ? EditTripSchema : TripSchema),
    defaultValues: editFormValues ?? {
      title: "",
      type: "SOLO",
      country: "",
      tripMemberList: [],
      currencyRate: 1,
      startDate: undefined,
      endDate: undefined,
      isActive: true,
      isDeleted: false,
    },
    mode:"onTouched"
  });
  const tripType = form.watch("type");

  const { mutateAsync, isError } = useAddUserTrip();
  const { mutateAsync:updateTrip, isError: updateTripError } = useUpdateUserTrip();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const submit = async (data: TripFormType) => {

    if (isEdit) {
      await updateTrip(data,{
        onSuccess: (response) => {
          queryClient.invalidateQueries({
            queryKey:['tripsDashboard']
          })
          console.log(response);
          setAlert({isShow:true, message:response.message});
        },
        onError:(error:any)=>{
          setAlert({isShow:true, message:error?.response?.data?.message});
        }
      });
      return;
    }

    await mutateAsync(data, {
      onSuccess: (response) => {
        if (alert.isShow) setAlert((prev)=> ({...prev, isShow:false}));
        closeModal();
        navigate(`/trip-information/${response.tripId}`)

      },
    })
  }

useEffect(() => {
  const subscription = form.watch(() => {
    if (alert.message !== "") setAlert({isShow:false,message:""})
  });
  return () => subscription.unsubscribe();
}, [alert.message]);


  return (
    <FormProvider {...form}>
      <Form onSubmit={form.handleSubmit(submit)}>
        <Typography sx={{ textAlign: "center", mb: 1 }} variant="h1">{title}</Typography>
        <Stack sx={{ gap: 3, mb: 3 }}>
          <TripInformationSection />
          {tripType == "GROUP" && <TripMemberSection isEdit={isEdit} />}
          {alert.isShow ?  <Alert severity={updateTripError? "error" : "success"}>{alert.message}</Alert> : ""}
        </Stack>
      </Form>
    </FormProvider>
  );
};

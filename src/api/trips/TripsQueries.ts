import { useMutation, useQuery } from "@tanstack/react-query";
import { addUserTrip, deleteUserTrip, getUserTrips, updateUserTrip } from "./TripsApi";
import type { TripFormType } from "./tripApi-validator";

export type filterTrips = {
    search?:string;
}

export const useGetUserTrips = (search:filterTrips) => {
    
    return useQuery({
        queryKey: ["tripsDashboard",{search}],
        queryFn:()=> getUserTrips(search),
    })

}
export const useAddUserTrip = () => {  
    return useMutation({
        mutationFn: (params: TripFormType) => addUserTrip(params),

    })
}

export const useUpdateUserTrip = () => {  
    return useMutation({
        mutationFn: (params: TripFormType) => updateUserTrip(params),
    })
}
export const useDeleteUserTrip = () => {  
    return useMutation({
        mutationFn: (tripId: number) => deleteUserTrip(tripId),
    })
}


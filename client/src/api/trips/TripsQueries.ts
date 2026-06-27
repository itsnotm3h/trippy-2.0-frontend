import { useQuery } from "@tanstack/react-query";
import { getUserTrips } from "./TripsApi";

export type filterTrips = {
    search?:string;
}

export const useGetUserTrips = (search:filterTrips) => {
    
    return useQuery({
        queryKey: ["tripsDashboard",{search}],
        queryFn:()=> getUserTrips(search),
    })

}


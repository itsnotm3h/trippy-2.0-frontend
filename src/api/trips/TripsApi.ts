import { axiosInstance } from "../client"
import type { TripFormType } from "./tripApi-validator";
import type { filterTrips } from "./TripsQueries";

export const getUserTrips = async (search:filterTrips):Promise<any>=>{

    const {data} = await axiosInstance.get("/trips",   {
        params: search,
    } );
    return data;

}

export const addUserTrip = async (params:TripFormType):Promise<any>=>{

    const {data} = await axiosInstance.post("/trips",   {
        ...params,
    } );

    
    return data;

}
export const updateUserTrip = async (params:TripFormType):Promise<any>=>{

    const {tripId} = params;

    const {data} = await axiosInstance.patch(`/trips/update/${tripId}`,   {
        ...params,
    } );

    return data;

}
export const deleteUserTrip = async (tripId:number):Promise<any>=>{


    const {data} = await axiosInstance.patch(`/trips/delete/${tripId}`);

    return data;

}


//Key examples.
// export const tripKeys = {
//     all: ['trips'] as const,
//     detail: (id: string) => ['trips', id] as const, 
// };
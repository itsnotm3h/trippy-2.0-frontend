import { axiosInstance } from "../client"
import type { filterTrips } from "./TripsQueries";

export const getUserTrips = async (search:filterTrips):Promise<any>=>{

    const {data} = await axiosInstance.get("/trips",   {
        params: search,
    } );
    return data;

}



//Key examples.
// export const tripKeys = {
//     all: ['trips'] as const,
//     detail: (id: string) => ['trips', id] as const, 
// };
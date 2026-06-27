import dayjs from "dayjs";

export const DataFormatter = {
    formatTripDuration: (startDate: string, endDate: string) => {

        if (startDate == undefined || endDate == undefined) {
            return "Invalid Dates"
        }

        const start = dayjs(startDate).format("DD MMM YYYY").split(" ");
        const end = dayjs(endDate).format("DD MMM YYYY").split(" ");

        const isDiffMonth = dayjs(startDate).diff(endDate, "month") >= 1;
        

        if (start[2]===(end[2])) {

            if(isDiffMonth) return `${start[0]} ${start[1]} - ${end[0]} ${end[1]} ${end[2]} `
            else{
               return `${start[0]} - ${end[0]} ${end[1]} ${end[2]} ` 
            }
        } else {
                return `${start.join(" ")} - ${end.join(" ")} ` 
        }   

    }

}
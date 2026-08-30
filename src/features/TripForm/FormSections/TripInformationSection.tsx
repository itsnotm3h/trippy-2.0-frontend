import { Stack, Typography } from "@mui/material"
import type { FormInfo } from "@/utils/FieldControl";
import { FormSectionFields } from "@/component/FormField/FormSectionFields";
import { GenericButton } from "@/component/ui/GenericButton";
import * as countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
countries.registerLocale(enLocale);


export const TripInformationSection = () => {

    const countryCode = countries.getNames("en", { select: "official" })
    const countryList = Object.entries(countryCode).map(([code, name]) => ({
        value: code,
        label: Array.isArray(name) ? name[0] : name, // Handles cases where names return alternate variants
    }));

    const section1 = [
        {
            label: "Trip Title",
            name: "title",
            type: "text",
            placeholder: "Give your trip a name",
            fieldType: "text",
            flex: { xs: 11, sm: 9, md: 9 },
            required: true,
        },
        {
            label: "Type",
            name: "type",
            type: "text",
            options: [{ label: "Solo", value: "SOLO" }, { label: "Group", value: "GROUP" }],
            fieldType: "dropDown",
            flex: { xs: 6, sm: 2, md: 2 },
        },
        // {
        //     label: "Visibility",
        //     name: "isActive",
        //     type: "text",
        //     options: ["Private", "Activity"],
        //     fieldType: "dropDown",
        //     flex: { xs: 6, sm: 2, md: 2 },
        // },
    ];

    const section2 = [
        {
            label: "Country",
            name: "country",
            type: "text",
            options: countryList,
            fieldType: "dropDown",
            flex: { xs: 12, sm: 6 },
        },
        {
            label: "Rate",
            name: "currencyRate",
            placeholder: "currency",
            unit: "SGD",
            type: "number",
            fieldType: "text",
            flex: { xs: 12, sm: 5 },
            required: true,

        },
    ];

    const section3 = [
        {
            label: "Start Date",
            name: "startDate",
            type: "text",
            fieldType: "datePicker",
            flex: { xs: 12, sm: 5 },
            required: true,
        },
        {
            label: "End Date",
            name: "endDate",
            type: "text",
            fieldType: "datePicker",
            flex: { xs: 12, sm: 5 },
            required: true,
        }
    ];

    

    return (
        <Stack sx={{ gap: 1 }}>
            <Stack direction={'row'} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: 800 }} variant="h1">Information</Typography>
                <GenericButton label="Submit" type="submit" />
            </Stack>
            <Stack sx={{ gap: 1 }}>
                <FormSectionFields formInfo={section1 as FormInfo[]} />

                <Stack direction="row" sx={{ gap: 1 }}>
                    <FormSectionFields formInfo={section2 as FormInfo[]} />
                    <FormSectionFields formInfo={section3 as FormInfo[]} />
                </Stack>
            </Stack>
        </Stack>
    )
}
import { emailSchema, type TripFormType } from "@/api/trips/tripApi-validator"
import { GenericButton } from "@/component/ui/GenericButton"
import { Cancel } from "@mui/icons-material";
import { Box, Chip, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Controller, useForm, useFormContext, useWatch } from "react-hook-form";


interface EmailList {
    email: string;
    status: string;
}

interface TripMemberSectionProps{
    isEdit:boolean;
}


export const TripMemberSection = ({isEdit}:TripMemberSectionProps) => {
    const [error, setError] = useState("");
    const {
        setValue: formSetValue,
        watch,
    } = useFormContext<TripFormType>();

    const tripMembers = watch("tripMemberList");

    // function  getChipLabel (email:string, status:string) {

    //     if(email==undefined || status == undefined) return "";
    //     if(status == "PENDING" || status == "ACTIVE") return <Cancel onClick={() => { removeMember(email) }} />
    //     if(status == ") return <Cancel onClick={() => { removeMember(email) }} />
    //     if(status == "PENDING") return <Cancel onClick={() => { removeMember(email) }} />
    // }

    const formattedTripMember = tripMembers?.map((item)=>({
        email:item.email,
        status:item.status
    }))



    const [invitationList, setInvitationList] = useState<EmailList[] | null>(formattedTripMember ?? null);

    const emailForm = useForm();
    const email = emailForm.watch("email");

    const removeMember = (email: string) => {
        setInvitationList((prev: any) => {
            const filterEmail = prev?.filter((item: any) => item.email != email);
            return (filterEmail)
        })
    }

    const inviteMembers = () => {

        const validateEmail = emailSchema.safeParse(email);

        if (!validateEmail.success) {
            const errorMessage = JSON.parse(validateEmail.error.message);
            setError(errorMessage[0].message);
            return;
        }

        if (validateEmail.data == undefined) {
            setError("Invalid Email")
            return;
        }

        if (invitationList?.find((item) => item.email == validateEmail.data)) {
            setError("Email is already in the list.")
            return;
        }

        setInvitationList((prev: any) => {
            if (prev == null) return [{ email: validateEmail.data, status:"INVITED"}]
            return [...prev, { email: validateEmail.data, status:"INVITED" }]
        });

        emailForm.setValue("email", null);
    }

    useEffect(() => {
        formSetValue("tripMemberList", invitationList);
    }, [invitationList])

    return (
        <Stack sx={{ gap: 1 }}>
            <Stack direction={'row'} sx={{ justifyContent: "space-between" }}>
                <Typography sx={{ fontSize: "1.3rem", fontWeight: 800 }} variant="h1">Members</Typography>
            </Stack>
            <Stack
                sx={{
                    borderRadius: "10px",
                    backgroundColor: "#dfdfdf",
                    flexGrow: 1,
                    p: 2
                }}
            >
                <Stack
                    direction={"row"}
                    sx={{ gap: 1, alignItems: "center", justifyContent: "space-between" }}
                >
                    <Controller

                        control={emailForm.control}
                        name="email"

                        render={({ field: { onChange, value } }) => (
                            <TextField
                                size="small"
                                placeholder="Enter member's email."
                                fullWidth
                                value={value}
                                type="email"
                                {...emailForm.register("email")}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        background: "none",
                                    },
                                    "& .MuiInputBase-input": {
                                        background: "none",
                                        padding: 0,
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                }}
                                onChange={(e) => {
                                    onChange(e.target.value);
                                    if (error !== "") setError("")
                                }}

                            />

                        )}


                    />
                    <GenericButton label="Invite" onClick={inviteMembers} />
                </Stack>
                {error !== "" && <Typography color="error" sx={{ fontSize: "0.825rem" }}>{error}</Typography>}
            </Stack>
            <Stack
                sx={{
                    borderRadius: "10px",
                    backgroundColor: "#dfdfdf",
                    flexGrow: 1,
                }}
            >
                <Stack sx={{ gap: 1, p: 2 }}>
                    <Typography sx={{ fontWeight: 700 }}>Invitation List</Typography>
                    {invitationList?.map((item) => {
                        const chipColor = getStatusColor("chipStatus", item.status);
                        // const getLabel = getLabel();

                        return (<Stack key={`${item.email}_item`} direction="row">
                            <Box sx={{ flexGrow: 1 }}>{item?.email}</Box>
                            <Box>
                                {isEdit && <Chip size="small" color={chipColor} label={item.status} />}
                                {!isEdit && <Cancel onClick={() => { removeMember(item.email) }} />}
                            </Box>
                        </Stack>)

                    }
                    )}
                </Stack>
            </Stack>
        </Stack>
    )
}

export function getStatusColor(type: string, status: string) {
    switch (type) {
        case "chipStatus":
            switch (status) {
                case "INVITED": return "inherit"
                case "Accepted": return "success"
                case "REJECTED": return "error"
            }
            break;
        default: return undefined
    }
}

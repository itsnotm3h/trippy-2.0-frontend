import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "./AuthenticateApi";
import type { AxiosError } from "axios";

export const useRegisterUser = ()=>{

    const {setAuth} = useAuthStore();

    return useMutation({
        mutationFn:registerUser,
        onSuccess:(data)=>{
            setAuth(data.accessToken, data.user);
        },
        onError: (error:AxiosError<{ message: string }>) => {
            console.error("Failed to register:", error?.response?.data?.message);
        }
    })
}
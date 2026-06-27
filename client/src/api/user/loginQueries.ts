import { useMutation } from "@tanstack/react-query";
import { loginUser, logoutUser } from "./AuthenticateApi";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

export const useLoginUser = () => {

    const { setAuth } = useAuthStore();

    return useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            setAuth(data.accessToken, data.user);
        },
        onError: (error: AxiosError<{ message: string }>) => {
            console.error("Failed to login:", error?.response?.data?.message);
        }
    })

}

export const useLogoutUser = () => {

    const { clearAuth } = useAuthStore();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: logoutUser,
        onSuccess: () => {
            clearAuth();
            navigate("/login");

        },
        onError: (error:AxiosError<{ message: string }>) => {
            console.error("Failed to logout:", error?.response?.data?.message);
        }
    })
}
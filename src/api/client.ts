import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:
        import.meta.env.VITE_API_URL,
    withCredentials: true, //I used signedCookie

    timeout: 1000,
    headers: {
        "Content-Type":
            "application/json",
    }
});


//Request interceptor to get the token to ensure that the request is authorised.
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = useAuthStore.getState().accessToken;

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if ((error.response?.status === 401 || error.response?.status === 403) && !originalRequest._retry) {
            originalRequest._retry = true;

            try {

                const response = await axiosInstance.post('/authenticate/refreshToken');

                const newAccessToken = response.data.accessToken;
                const user= response.data.user;
                useAuthStore.getState().setAuth(newAccessToken,user);

                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

                return axiosInstance(originalRequest);

            } catch (error) {
                useAuthStore.getState().clearAuth();

                return Promise.reject(error)

            }

        }
        return Promise.reject(error)
    }
)
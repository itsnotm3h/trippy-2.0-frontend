import type { LoginFormType } from "./loginApi-validator"
import { axiosInstance } from "../client"
import type { RegisterFormType } from "./registerApi-validator";

export const loginUser = async (loginCredential:LoginFormType):Promise<any>=>{
    const {data} = await axiosInstance.post("/authenticate/login", loginCredential);
    return data;

}

export const logoutUser = async ():Promise<any>=>{
    const {data} = await axiosInstance.post("/authenticate/logout");
    return data;

}

export const registerUser = async (registerForm:RegisterFormType):Promise<any>=>{
    const {data} = await axiosInstance.post("/authenticate/register",registerForm);
    return data;
}


//Key examples.
// export const tripKeys = {
//     all: ['trips'] as const,
//     detail: (id: string) => ['trips', id] as const, 
// };
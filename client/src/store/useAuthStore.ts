import {create} from 'zustand';



export interface UserType {
    id:number;
    displayName:string;
    
}

export interface AuthStateType{
    accessToken:string|null;
    user:UserType | null;
    setAuth: (accessToken:string | null, user:UserType | null)=>void;
    clearAuth:()=>void;
}

export const useAuthStore = create<AuthStateType>((set)=>({
    accessToken:null,
    user:null,
    setAuth: (accessToken, user)=>set({accessToken,user}),
    clearAuth:()=> set({accessToken:null,user:null}),
}))
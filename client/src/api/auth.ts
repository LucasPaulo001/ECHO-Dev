import { axiosInstance } from "./axiosInstance";

export async function LoginAPI(email: string, password: string){
    const res = await axiosInstance.post("/api/auth/login", { email, password });

    return res.data;
}

export async function RegisterAPI(name: string, userName: string, email: string, password: string){
    const res = await axiosInstance.post("/api/auth/register", { name, userName, email, password });

    return res.data;
}
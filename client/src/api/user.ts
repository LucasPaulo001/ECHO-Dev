import { axiosInstance } from "./axiosInstance";

export async function ProfileAPI(token: string){
    const data = await axiosInstance.get("/api/user/profile", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return data.data;
}
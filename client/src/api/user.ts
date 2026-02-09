import { axiosInstance } from "./axiosInstance";

export async function ProfileAPI(token: string | null){
    const res = await axiosInstance.get("/api/user/profile", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data;
}
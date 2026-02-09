import { axiosInstance } from "./axiosInstance";

export async function RegisterProjectAPI(token: string | null, title: string, description: string, status: string, tags: string[], isPublic: boolean, link: string) {

    const res = await axiosInstance.post("/api/project",  {
        title,
        description,
        status,
        tags,
        isPublic,
        link
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data;

}

export async function MyProjectsAPI(token: string | null){
    const res = await axiosInstance.get(`/api/project`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data;
}
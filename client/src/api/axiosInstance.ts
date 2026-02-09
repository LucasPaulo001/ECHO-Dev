import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://echo-dev-z2rv.onrender.com",
    timeout: 50000,
    headers: {
        "Content-Type": "application/json"
    }
})
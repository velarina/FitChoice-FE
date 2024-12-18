import axios from "axios";
import config from "./config"

const axiosInstance = axios.create({
    baseURL: config.NGROK_SERVER,
    withCredentials: true,
    headers: {
        Accept: "application/json",
    },
});

export default axiosInstance;
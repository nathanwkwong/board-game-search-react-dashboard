import axios, { AxiosInstance } from "axios";

const axiosConfig: AxiosInstance = axios.create({
  baseURL: "https://api.boardgameatlas.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosConfig;

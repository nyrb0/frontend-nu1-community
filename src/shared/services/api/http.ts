import axios from "axios";

export const axiosService = axios.create({
  baseURL: "http://localhost:4200/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

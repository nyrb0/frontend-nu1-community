import axios from "axios";

export const axiosService = axios.create({
  baseURL: process.env.BASE_URL ?? "",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

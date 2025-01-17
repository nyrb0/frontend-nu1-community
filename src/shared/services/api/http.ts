import axios from "axios";

export const axiosService = axios.create({
  baseURL: "http://localhost:4200/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

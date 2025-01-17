import { IAuth, IAuthResponse } from "../types/auth.types";
import { axiosService } from "./api/http";
import { removeFromStorage, saveTokenStorage } from "./auth-token.service";

export const authService = {
  async auth(path: "regis" | "login", data: IAuth) {
    const res = await axiosService.post<IAuthResponse>(`auth/${path}`, data);
    if (res.data.accessToken) return saveTokenStorage(res.data.accessToken);
  },
  async getNewToken(path: "regis" | "login", data: IAuth) {
    const res = await axiosService.post<IAuthResponse>(`auth/${path}`, data);
    if (res.data.accessToken) return saveTokenStorage(res.data.accessToken);
  },
  async logout() {
    const response = await axiosService.post<IAuthResponse>("auth/logout");
    if (response.data) removeFromStorage();

    return response;
  },
};

import { IAuth, IAuthResponse } from '../types/auth.types';
import { axiosService } from './api/http';
import { removeFromStorage, saveTokenStorage } from './auth-token.service';

export const authService = {
    async auth(path: 'regis' | 'login', data: IAuth) {
        const res = await axiosService.post<IAuthResponse>(`auth/${path}`, data);
        if (res.data.accessToken) saveTokenStorage(res.data.accessToken);
        return res;
    },
    async getNewTokens() {
        const res = await axiosService.post<IAuthResponse>(`auth/login/access-token`);
        if (res.data.accessToken) saveTokenStorage(res.data.accessToken);
        return res;
    },
    async logout() {
        const response = await axiosService.post<IAuthResponse>('auth/logout');
        if (response.data) removeFromStorage();
        console.log('hello');
        return response;
    },

    async isAuth(): Promise<boolean> {
        const response = await axiosService.get('auth/isauth');
        return response.data;
    },
};

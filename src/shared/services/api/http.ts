import axios from 'axios';
import { getAccessToken, removeFromStorage } from '../auth-token.service';
import { errorCatch } from './error';
import { authService } from '../auth.service';

const setting = {
    baseURL: 'http://localhost:4200/api',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
};

export const axiosService = axios.create(setting);
export const axiosServiceAuth = axios.create(setting);

axiosServiceAuth.interceptors.request.use(config => {
    const accessToken = getAccessToken();

    if (config.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
});

axiosServiceAuth.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config;

        if (
            error.reponse.status === 401 ||
            errorCatch(error) === 'jwt expired' ||
            (errorCatch(error) === 'jwt must be provided' && error.config && !error.config._isRetry)
        ) {
            originalRequest._isRetry = true;

            try {
                await authService.getNewTokens();
                return axiosServiceAuth.request(originalRequest);
            } catch (error) {
                if (errorCatch(error) === 'jwt expired') removeFromStorage();
            }
        }

        throw error;
    }
);

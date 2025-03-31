import { IUpdateUser } from '../types/user.types';
import { axiosServiceAuth } from './api/http';

class UserService {
    BASE_URL = '/user';
    async getProfileUser(username: string) {
        const response = await axiosServiceAuth.get(`${this.BASE_URL}/${username}`);
        return response.data;
    }
    async updateUser(username: string, body: IUpdateUser) {
        const response = await axiosServiceAuth.patch(`${this.BASE_URL}/${username}`, body);
        return response;
    }
}

export const userService = new UserService();

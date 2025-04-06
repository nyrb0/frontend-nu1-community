import { IUser } from '../types/user.types';
import { axiosServiceAuth } from './api/http';

class UserService {
    BASE_URL = '/user';
    async getProfileUser(username: string) {
        const response = await axiosServiceAuth.get(`${this.BASE_URL}/username/${username}`);
        return response;
    }
    async updateUser(userId: string, body: IUser) {
        const response = await axiosServiceAuth.patch(`${this.BASE_URL}/username/${userId}`, body);
        return response;
    }
    async getAll() {
        const response = await axiosServiceAuth.get(`${this.BASE_URL}/getAll`);
        return response;
    }
}

export const userService = new UserService();

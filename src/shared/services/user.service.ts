import { axiosServiceAuth } from './api/http';

class UserService {
    BASE_URL = '/user';
    async getProfileUser(username: string) {
        const response = await axiosServiceAuth.get(`${this.BASE_URL}/${username}`);
        return response.data;
    }
}

export const userService = new UserService();

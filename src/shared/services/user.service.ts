import { axiosServiceAuth } from './api/http';

class UserService {
    BASE_URL = '/user';
    async getProfileUser() {
        const response = await axiosServiceAuth.get(this.BASE_URL);
        return response.data;
    }
}

export const userService = new UserService();

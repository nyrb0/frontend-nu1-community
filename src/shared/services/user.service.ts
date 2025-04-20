import { IUser } from '../types/user.types';
import { axiosServiceAuth } from './api/http';

class UserService {
    BASE_URL = '/user';
    async getProfileUser(username: string) {
        const response = await axiosServiceAuth.get(`${this.BASE_URL}/username/${username}`);
        return response;
    }
    async updateUser(userId: string, body: IUser) {
        const formData = new FormData();
        if (body.description) formData.append('description', body.description);
        if (body.username) formData.append('username', body.username);
        if (body.name) formData.append('name', body.name);
        if (body.lastName) formData.append('lastName', body.lastName);
        if (body.email) formData.append('email', body.email);
        if (body.headerImageUrl) formData.append('headerImageUrl', body.headerImageUrl);
        if (body.avatarUrl) formData.append('avatarUrl', body.avatarUrl);

        // if (body.avatarUrl instanceof File) {
        //     if (body.avatarUrl) formData.append('avatarUrl', body.avatarUrl);
        // }
        // if (body.headerImageUrl instanceof File) {
        //     formData.append('headerImage', body.headerImageUrl);
        // }

        const response = await axiosServiceAuth.patch(`${this.BASE_URL}/username/${userId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response;
    }
    async getAll() {
        const response = await axiosServiceAuth.get(`${this.BASE_URL}/getAll`);
        return response;
    }
}

export const userService = new UserService();

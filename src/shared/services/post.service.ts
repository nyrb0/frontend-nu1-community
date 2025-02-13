import { PostUserI, PulicationUserI } from '../types/publication.types';
import { axiosServiceAuth } from './api/http';

export const postService = {
    async create(body: PostUserI): Promise<PulicationUserI> {
        const formData = new FormData();
        if (body.title) formData.append('title', body.title);
        if (body.description) formData.append('description', body.description);
        if (body.imageUrl) formData.append('imageUrl', body.imageUrl);
        const response = await axiosServiceAuth.post('/posts', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    },

    async getAllUser(username: string): Promise<PulicationUserI[]> {
        const response = await axiosServiceAuth.get(`/posts/${username}`);
        return response.data;
    },

    async getAllLikeUser(): Promise<PulicationUserI[]> {
        const response = await axiosServiceAuth.get('/posts/likes');
        return response.data;
    },
    async getAllSavedUser(): Promise<PulicationUserI[]> {
        const response = await axiosServiceAuth.get('/posts/saves');
        return response.data;
    },

    async deletePost(postId: string): Promise<PulicationUserI> {
        const response = await axiosServiceAuth.delete(`/posts/${postId}`);
        return response.data;
    },
    async updatePost(postId: string): Promise<PulicationUserI> {
        const response = await axiosServiceAuth.patch(`/posts/${postId}`, {});
        return response.data;
    },
};

import { PostUserI, PulicationUserI } from '../types/publication.types';
import { axiosServiceAuth } from './api/http';

export const postService = {
    async create(body: PostUserI): Promise<PulicationUserI> {
        const response = await axiosServiceAuth.post('/posts', body);
        return response.data;
    },

    async getAllUser(): Promise<PulicationUserI[]> {
        const response = await axiosServiceAuth.get('/posts');
        return response.data;
    },
};

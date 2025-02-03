import { axiosServiceAuth } from '@/shared/services/api/http';

export const savePostService = {
    async saved(postId: string) {
        const response = await axiosServiceAuth.post(`/save/do/${postId}`);
        return response.data;
    },
    async unSaved(postId: string) {
        const response = await axiosServiceAuth.delete(`/save/do/${postId}`);
        return response.data;
    },
    async checkSaved(postId: string): Promise<boolean> {
        const response = await axiosServiceAuth.get(`/save/check/${postId}`);
        return response.data;
    },
};

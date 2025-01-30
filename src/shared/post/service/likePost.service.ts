import { axiosServiceAuth } from '@/shared/services/api/http';

export const likePostService = {
    async liked(postId: string) {
        const response = await axiosServiceAuth.post(`/like/do/${postId}`);
        return response.data;
    },
    async unLiked(postId: string) {
        const response = await axiosServiceAuth.delete(`/like/do/${postId}`);
        return response.data;
    },
    async checkLiked(postId: string): Promise<boolean> {
        const response = await axiosServiceAuth.get(`/like/check/${postId}`);
        return response.data;
    },
};

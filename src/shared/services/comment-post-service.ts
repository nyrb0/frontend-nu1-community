import { axiosServiceAuth } from './api/http';

export const commentPostService = {
    async getAll(postId: string) {
        const response = await axiosServiceAuth.get(`/comment/do/${postId}`);
        return response;
    },
    async updateCommentById(postId: string, data: { text: string }) {
        const response = await axiosServiceAuth.patch(`/comment/do/${postId}`, data);
        return response;
    },
    async deleteCommentById(postId: string) {
        const response = await axiosServiceAuth.delete(`/comment/do/${postId}`);
        return response;
    },
    async likeCommentById(commentId: string) {
        const response = await axiosServiceAuth.post(`/comment/like/${commentId}`);
        return response;
    },
    async unlikeCommentById(commentId: string) {
        const response = await axiosServiceAuth.delete(`/comment/like/${commentId}`);
        return response;
    },
};

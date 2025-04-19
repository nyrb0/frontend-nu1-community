import { axiosServiceAuth } from './api/http';

export const commentPostService = {
    async createComment(postId: string, body: { text: string; parentId?: string }) {
        const response = await axiosServiceAuth.post(`/comment/do/${postId}`, body);
        return response;
    },
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
    async checkLikedComment(commentId: string) {
        const response = await axiosServiceAuth.get(`/comment/check/${commentId}`);
        return response;
    },
    async getAllReplayById(body: { publicationId: string; parentId: string | null }) {
        const response = await axiosServiceAuth.get(`/comment/replay?postId=${body.publicationId}&parentId=${body.publicationId}`);
        return response;
    },
};

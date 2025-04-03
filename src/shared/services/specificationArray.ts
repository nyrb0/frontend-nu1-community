import { axiosService } from './api/http';

export const specificationService = {
    async getAll() {
        const response = await axiosService.get('/specification/all');
        return response.data;
    },
};

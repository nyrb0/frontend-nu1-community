import { IVacancy } from '../types/vacancy.types';
import { axiosServiceAuth } from './api/http';

export const vacancyService = {
    async getAll() {
        const response = await axiosServiceAuth.get('/vacancy/getAll');
        return response;
    },
    async getAllCompany(userId: string) {
        const response = await axiosServiceAuth.get(`/vacancy/getAll/${userId}`);
        return response;
    },
    async getById(vacancyId: string) {
        const response = await axiosServiceAuth.get(`/vacancy/${vacancyId}`);
        return response;
    },
    async create() {
        const response = await axiosServiceAuth.post(`/vacancy`);
        return response;
    },
    async updateVacancy(vacancyId: string, body: IVacancy) {
        const response = await axiosServiceAuth.patch(`/vacancy/${vacancyId}`, body);
        return response;
    },
    async deleteVacancy(vacancyId: string) {
        const response = await axiosServiceAuth.delete(`/vacancy/${vacancyId}`);
        return response;
    },
    async saveVacancy(vacancyId: string) {
        const response = await axiosServiceAuth.post(`/vacancy/save/${vacancyId}`);
        return response;
    },
    async unsaveVacancy(vacancyId: string) {
        const response = await axiosServiceAuth.delete(`/vacancy/save/${vacancyId}`);
        return response;
    },
};

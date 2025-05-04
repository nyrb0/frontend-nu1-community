import { ICraeteVacancy, IUpdateVacancy, IVacancy } from '../types/vacancy.types';
import { axiosServiceAuth } from './api/http';

export const vacancyService = {
    async getAll() {
        const response = await axiosServiceAuth.get<IVacancy[]>('/vacancy/getAll');
        return response;
    },
    async getAllCompany(userId: string) {
        const response = await axiosServiceAuth.get<IVacancy[]>(`/vacancy/getAll/${userId}`);
        return response;
    },
    async getById(vacancyId: string) {
        const response = await axiosServiceAuth.get<IVacancy>(`/vacancy/${vacancyId}`);
        return response;
    },
    async create(body: ICraeteVacancy) {
        const response = await axiosServiceAuth.post<IVacancy>(`/vacancy`, body);
        return response;
    },
    async updateVacancy(vacancyId: string, body: IUpdateVacancy) {
        const response = await axiosServiceAuth.patch<IVacancy>(`/vacancy/${vacancyId}`, body);
        return response;
    },
    async deleteVacancy(vacancyId: string) {
        const response = await axiosServiceAuth.delete<IVacancy>(`/vacancy/${vacancyId}`);
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

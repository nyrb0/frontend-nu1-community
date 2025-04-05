import { axiosServiceAuth } from './api/http';

const BASE_ROUTE = '/subscriptions';
export const subscribeService = {
    async getsubscriptions(userId: string) {
        const res = axiosServiceAuth.get(`${BASE_ROUTE}/${userId}`);
        return res;
    },
    async subscribe(userId: string) {
        const res = axiosServiceAuth.post(`${BASE_ROUTE}/${userId}/follow`);
        return res;
    },
    async unsubscribe(userId: string) {
        const res = axiosServiceAuth.delete(`${BASE_ROUTE}/${userId}/follow`);
        return res;
    },
};

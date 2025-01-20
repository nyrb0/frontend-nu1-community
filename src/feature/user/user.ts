import { axiosBaseQuery } from '@/shared/services/api/customAxiosBaseQuery';
import { IUser } from '@/shared/types/auth.types';
import { createApi } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery(),
    endpoints: builder => ({
        profile: builder.query<IUser, void>({
            query: () => ({
                url: '/user',
                method: 'GET',
            }),
        }),
    }),
});

export const { useProfileQuery } = userApi;

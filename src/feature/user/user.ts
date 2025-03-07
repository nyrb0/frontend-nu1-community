import { axiosBaseQuery } from '@/shared/services/api/customAxiosBaseQuery';
import { IUser } from '@/shared/types/user.types';

import { createApi } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery(),
    endpoints: builder => ({
        profile: builder.query<IUser, { username: string }>({
            query: ({ username }) => ({
                url: `/user/${username}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useProfileQuery } = userApi;

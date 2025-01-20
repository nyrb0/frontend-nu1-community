import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './feature/user/user';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: getdefault => getdefault().concat(userApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

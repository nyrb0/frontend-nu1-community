import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './feature/user/user';
import userSlice from './shared/redux/userSlice';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        user: userSlice,
    },
    middleware: getdefault => getdefault().concat(userApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatch = typeof store.dispatch;

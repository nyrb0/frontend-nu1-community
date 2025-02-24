import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userService } from '../services/user.service';
import { localUsername } from '@/pages/auth/username-local';
import { IUser } from '../types/auth.types';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const username = localUsername.get();
    const response = await userService.getProfileUser(username);
    return response;
});

const initialState: {
    user: IUser | null;
    loading: boolean;
    error: null | string;
} = {
    user: null,
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        cleareUser: state => {
            state.user = null;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUser.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? null;
            });
    },
});

export const { cleareUser } = userSlice.actions;

export default userSlice.reducer;

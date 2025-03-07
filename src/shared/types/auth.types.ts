import { IUser } from './user.types';

export interface IAuth {
    username: string;
    password: string;
}

export interface IAuthResponse {
    accessToken: string;
    user: IUser;
}

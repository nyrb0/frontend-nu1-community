import { IUser } from './user.types';

export interface IAuth {
    username: string;
    password: string;
}

export interface IRegisAuth {
    username: string;
    password: string;
    email: string;
    speciality: string;
    positionRole: string;
}

export interface IAuthResponse {
    accessToken: string;
    user: IUser;
}

export interface IAuth {
    username: string;
    password: string;
}

export interface IUser {
    name: string;
    username: string;
    email?: string;
    lastName?: string;
    avatarUrl?: string;
}

export interface IAuthResponse {
    accessToken: string;
    user: IUser;
}

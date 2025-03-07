import { BaseI } from './base.types';

export interface IUser {
    id: string;
    name?: string;
    username: string;
    lastName: string;
    email?: string;
    identification: boolean;
    description?: string;
    role: string;
    tel?: string;
    avatarUrl?: string;
}

export interface IUserWithBase extends IUser, BaseI {}

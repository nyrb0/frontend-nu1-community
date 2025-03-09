import { BaseI } from './base.types';

export interface IUser {
    id: string;
    name?: string;
    username: string;
    lastName?: string;
    email?: string;
    identification: boolean;
    description?: string;
    role: string;
    tel?: string;
    avatarUrl?: string;
}

export type IUpdateUser = Pick<IUser, 'name' | 'username' | 'email' | 'role' | 'tel' | 'avatarUrl' | 'lastName'>;

export interface IUserWithBase extends IUser, BaseI {}

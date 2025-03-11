import { extend } from 'dayjs';
import { BaseI } from './base.types';

export interface IUser extends BaseI {
    id: string;
    name?: string;
    username: string;
    lastName?: string;
    email?: string;
    identification: boolean;
    description: string;
    role: string;
    tel?: string;
    avatarUrl?: string;
    private: boolean;
}

export type IUpdateUser = Pick<IUser, 'name' | 'username' | 'email' | 'role' | 'tel' | 'avatarUrl' | 'lastName' | 'private' | 'description'>;

export interface IUserWithBase extends IUser, BaseI {}

import { BaseI } from './base.types';

export interface IUser {
    id: string;
    name: string;
    email: string;
    identification: boolean;
}

export interface IUserWithBase extends IUser, BaseI {}

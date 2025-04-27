import { BaseI } from './base.types';
import { IUser } from './user.types';

export interface IVacancy extends BaseI {
    id: string;
    title: string;
    position: string;
    location: string;
    description: string;
    isArchived: boolean;
    userId: string;
    salary: string;

    user: Pick<IUser, 'username' | 'avatarUrl' | 'lastName' | 'name'>;
}

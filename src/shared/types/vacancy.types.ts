import { BaseI } from './base.types';
import { IUser } from './user.types';

export interface IVacancy extends BaseI {
    id: string;
    title: string;
    position: string;
    location: string;
    description: string;
    remote: boolean;
    office: boolean;
    hybrid: boolean;
    timeWork: string;
    isArchived: boolean;
    userId: string;
    salary: string;

    salaryFrom: string;
    salaryTo: string;
    experience: number;
    minExperience: number;
    maxExperience: number;

    user: Pick<IUser, 'username' | 'avatarUrl' | 'lastName' | 'name' | 'identification'>;
}

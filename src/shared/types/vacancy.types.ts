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
    hourInDay: number;
    saved: boolean;
    experience: number;
    user: Pick<IUser, 'username' | 'avatarUrl' | 'lastName' | 'name' | 'identification'>;
}

export interface ICraeteVacancy {
    title: string;
    position: string;
    location: string;
    description: string;
    remote: boolean;
    office: boolean;
    hybrid: boolean;
    hourInDay: number | null;
    timeWork: string;
    salaryFrom: number | null;
    salaryTo: number | null;
    experience: number | null;
}

export interface IUpdateVacancy {
    id: string;
    title: string;
    position: string;
    location: string;
    description: string;
    remote: boolean;
    hourInDay: number;
    office: boolean;
    hybrid: boolean;
    timeWork: string;
    isArchived: boolean;
    salary: string;
    salaryFrom: string | null;
    salaryTo: string | null;
    experience: number;
}

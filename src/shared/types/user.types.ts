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
    speciality?: string;
    skills: string[];
    positionRole: string;
    lastLogin: string;
    lastActive: string;
    linkedin: string;
    avatarUrl?: string;
    headerImageUrl?: string;
    private: boolean;
    countPost: string;
    isFollowing: boolean;
}

export interface IUserWithBase extends IUser, BaseI {}

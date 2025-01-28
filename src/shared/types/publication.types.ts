import { IUser } from './auth.types';
import { BaseI } from './base.types';

export interface PulicationUserI extends BaseI {
    id: string;
    title?: string;
    description?: string;
    views: number;
    imageUrl: string;
    commentsCount: number;
    countLike: number;

    user: Omit<IUser, 'email'>;
}

export interface IPublicationUser {}

export interface PostUserI {
    title?: string;
    description?: string;
    imageUrl?: File | null;
}

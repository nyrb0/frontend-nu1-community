import { IUser } from './auth.types';
import { BaseI } from './base.types';

export interface PulicationUserI extends BaseI {
    id: string;
    title?: string;
    description?: string;
    views: number;
    imageUrl: string;
    showLikes: boolean;
    showComments: boolean;
    commentsCount: number;
    countLike: number;
    liked: boolean;
    saved: boolean;

    isOwner: boolean;

    user: Omit<IUser, 'email'>;
}

export interface IUpdatePublication {
    showLikes: boolean;
    showComments: boolean;
    title: string;
    description: string;
}

export interface PostUserI {
    title?: string;
    description?: string;
    imageUrl?: File | null;
}

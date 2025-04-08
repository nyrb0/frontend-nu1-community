import { BaseI } from './base.types';
import { IUser } from './user.types';

export interface PulicationUserI extends BaseI {
    id: string;
    title?: string;
    description?: string;
    views: number;
    imageUrl: string;
    showLikes: boolean;
    showComments: boolean;
    _count: ICountStatisticsPost;
    liked: boolean;
    saved: boolean;
    isEdit: boolean;
    isOwner: boolean;
    isLiked: boolean;

    user: Omit<IUser, 'email'>;
}

export interface ICountStatisticsPost {
    comments: number;
    likes: number;
    saves: number;
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

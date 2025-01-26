import { BaseI } from './base.types';

export interface PulicationUserI extends BaseI {
    id: string;
    title?: string;
    description?: string;
    views: number;
    imageUrl: string;
    commentsCount: number;
    countLike: number;
}

export interface PostUserI {
    title?: string;
    description?: string;
    imageUrl?: string;
}

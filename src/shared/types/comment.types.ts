import { IUser } from './user.types';

export interface IComment {
    id: string;
    userId: string;
    text: string;
    publicationId: string;
    parentId: null | string;
    createdAt: string;
    user: IUser;
    isLiked: boolean;
}

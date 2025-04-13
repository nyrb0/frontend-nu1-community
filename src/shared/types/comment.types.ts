import { IUser } from './user.types';

export interface IComment {
    id: string;
    userId: string;
    text: string;
    publicationId: string;
    parentId: null | string;
    createdAt: string;
    user: IUser;
    liked: boolean;

    isEdit: boolean;

    _count: {
        likes: number;
        replies: number;
    };
}

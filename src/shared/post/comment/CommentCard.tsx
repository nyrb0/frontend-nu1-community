import { IComment } from '@/shared/types/comment.types';

interface ICommentCard {
    data: IComment;
}

const CommentCard = ({ data }: ICommentCard) => {
    return <div>{data.text}</div>;
};

export default CommentCard;

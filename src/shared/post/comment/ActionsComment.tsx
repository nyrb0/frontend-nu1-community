import { useState } from 'react';
import { StyledPostDo } from '../posts.styled';
import { IComment } from '@/shared/types/comment.types';
import IconComment from '../UI/icon/IconComment';
import IconLike from '../UI/icon/IconLike';
import { commentPostService } from '@/shared/services/comment-post-service';

interface IActionsComment {
    data: IComment;
}

const ActionsComment = ({ data }: IActionsComment) => {
    const [count, setCount] = useState({ like: data._count.likes, comment: data._count.replies });
    const [liked, setLiked] = useState(data.liked);

    const handleLike = async () => {
        const commentId = data.id;
        const isLiked = await commentPostService.checkLikedComment(commentId);

        if (isLiked.data) {
            commentPostService.unlikeCommentById(commentId);
            setCount(prev => ({ ...prev, like: prev.like - 1 }));
            setLiked(false);
        } else {
            commentPostService.likeCommentById(commentId);
            setCount(prev => ({ ...prev, like: prev.like + 1 }));
            setLiked(true);
        }
    };

    return (
        <StyledPostDo>
            <ul className='df'>
                <li>
                    <IconLike isLiked={liked} onClick={handleLike} />
                    <p>{count.like} лайки</p>
                </li>
                <li>
                    <IconComment />
                    <p>{count.comment} ответы</p>
                </li>
                <li style={{ fontWeight: 700 }}>ответить</li>
            </ul>
        </StyledPostDo>
    );
};

export default ActionsComment;

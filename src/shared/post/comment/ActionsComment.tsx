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
                <li style={{ fontWeight: 600 }}>
                    ответить
                    <svg
                        style={{ transform: 'translateY(2px)' }}
                        width='14'
                        height='8'
                        viewBox='0 0 20 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M9 7L14 12M14 12L19 7M14 12V4.19691C14 3.07899 14 2.5192 13.7822 2.0918C13.5905 1.71547 13.2839 1.40973 12.9076 1.21799C12.4798 1 11.9201 1 10.8 1H1'
                            stroke='white'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </li>
            </ul>
        </StyledPostDo>
    );
};

export default ActionsComment;

import React, { useState } from 'react';
import { StyledPostDo } from './posts.styled';
import { PulicationUserI } from '../types/publication.types';
import IconLike from './UI/icon/IconLike';
import IconComment from './UI/icon/IconComment';
import IconShare from './UI/icon/IconShare';
import IconSave from './UI/icon/IconSave';
import { likePostService } from './service/likePost.service';
import { savePostService } from './service/savePost.service';
import { Link } from 'react-router-dom';

interface IActionsPost {
    data: PulicationUserI;
    isShowLikes: boolean;
    isShowComments: boolean;
}

const ActionsPost = ({ data: originalData, isShowLikes, isShowComments }: IActionsPost) => {
    const [data, setData] = useState<PulicationUserI>(originalData);
    const [count, setCount] = useState<{ like: number; comment: number; share: number; save: number }>({
        like: data._count.likes,
        comment: data._count.comments,
        share: 0,
        save: data._count.saves,
    });

    const handleLike = async () => {
        const postId = data.id;
        const isLiked = await likePostService.checkLiked(postId);
        if (isLiked) {
            likePostService.unLiked(postId);
            setCount(prev => ({ ...prev, like: prev.like - 1 }));
            setData(prev => ({ ...prev, liked: false }));
        } else {
            likePostService.liked(postId);
            setCount(prev => ({ ...prev, like: prev.like + 1 }));
            setData(prev => ({ ...prev, liked: true }));
        }
    };
    const handleSave = async () => {
        const postId = data.id;
        const isSaved = await savePostService.checkSaved(postId);
        if (isSaved) {
            savePostService.unSaved(postId);
            setCount(prev => ({ ...prev, save: prev.save - 1 }));
            data.saved = false;
        } else {
            savePostService.saved(postId);
            setCount(prev => ({ ...prev, save: prev.save + 1 }));
            data.saved = true;
        }
    };

    return (
        <StyledPostDo className='df jcsb'>
            <ul className='df'>
                <li>
                    <IconLike isLiked={data.liked} onClick={handleLike} />
                    {isShowLikes && <p>{count.like} лайки</p>}
                </li>

                {isShowComments && (
                    <Link to={`/post/${data.id}/comments`}>
                        <li>
                            <IconComment />
                            <p>{count.comment} комментарии</p>
                        </li>
                    </Link>
                )}
                <li>
                    <IconShare />
                    <p>{count.share} поделились</p>
                </li>
            </ul>

            <IconSave isSave={data.saved} onClick={handleSave} />
        </StyledPostDo>
    );
};

export default ActionsPost;

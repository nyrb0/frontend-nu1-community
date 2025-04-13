import { FC, useState } from 'react';
import CommentInput from '../UI/input/CommentInput';
import IconSend from './icon/IconSend';
import IconSmile from './icon/IconSmile';
import AvatarProfile from '@/shared/UI/AvatarProfile';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import Comments from './Comments';
import { PulicationUserI } from '@/shared/types/publication.types';
import { AnimatePresence } from 'framer-motion';
import { commentPostService } from '@/shared/services/comment-post-service';

interface IPostComment {
    disabled: boolean;
    data: PulicationUserI;
    isVisibleComments: boolean;
    setIsVisibleComments: (state: boolean) => void;
}

const PostComment: FC<IPostComment> = ({ disabled, isVisibleComments, data, setIsVisibleComments }) => {
    const [value, setValue] = useState('');

    const commentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await commentPostService.createComment(data.id, { text: value });
            if (response.status === 200) {
                setValue('');
                data = { ...data, _count: { ...data._count, comments: data._count.comments + 1 } };
            }
        } catch (err) {
            console.error('У вас ошибка: ', err);
        }
    };

    return (
        <div>
            <form className='df aic jcsb' onSubmit={commentHandler}>
                <div className='df' style={{ gap: 8 }}>
                    <AvatarProfile src={data.user.avatarUrl ? `${baseUrlAws}/${data.user?.avatarUrl}` : ''} width={40} height={40} />
                    <CommentInput
                        placeholder={!disabled ? 'Автор отключил комментрии' : 'Пишишите свой комментарии...'}
                        disabled={!disabled}
                        value={value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => disabled && setValue(e.target.value)}
                    />
                </div>
                <div className={'df'} style={{ gap: 8 }}>
                    <IconSmile />
                    <button type='submit'>
                        <IconSend />
                    </button>
                </div>
            </form>
            <AnimatePresence>{isVisibleComments && <Comments data={data} onClose={s => setIsVisibleComments(s)} />}</AnimatePresence>
        </div>
    );
};

export default PostComment;

import { FC, useState } from 'react';
import CommentInput from '../UI/input/CommentInput';
import IconSend from './icon/IconSend';
import IconSmile from './icon/IconSmile';
import AvatarProfile from '@/shared/UI/AvatarProfile';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import Comments from './Comments';
import { PulicationUserI } from '@/shared/types/publication.types';
import { AnimatePresence } from 'framer-motion';

interface IPostComment {
    disabled: boolean;
    data: PulicationUserI;
    isVisibleComments: boolean;
    setIsVisibleComments: (state: boolean) => void;
}

const PostComment: FC<IPostComment> = ({ disabled, isVisibleComments, data, setIsVisibleComments }) => {
    const [value, setValue] = useState('');

    const commentHandler = async () => {
        try {
            return '';
        } catch (err) {
            console.error('У вас ошибка: ', err);
        }
    };
    console.log('render');

    return (
        <div>
            <div className='df aic jcsb'>
                <div className='df' style={{ gap: 8 }}>
                    <AvatarProfile src={data.user.avatarUrl ? `${baseUrlAws}/${data.user?.avatarUrl}` : ''} width={40} height={40} />
                    <CommentInput
                        placeholder={!disabled ? 'Автор отключил комментрии' : 'Пишишите свой комментарии...'}
                        disabled={!disabled}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => disabled && setValue(e.target.value)}
                    />
                </div>
                <div className={'df'} style={{ gap: 8 }}>
                    <IconSmile />
                    <IconSend onClick={() => commentHandler} />
                </div>
            </div>
            <AnimatePresence>{isVisibleComments && <Comments data={data} onClose={s => setIsVisibleComments(s)} />}</AnimatePresence>
        </div>
    );
};

export default PostComment;

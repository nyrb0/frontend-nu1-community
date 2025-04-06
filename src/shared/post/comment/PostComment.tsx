import { FC, useState } from 'react';
import CommentInput from '../UI/input/CommentInput';
import IconSend from './icon/IconSend';
import IconSmile from './icon/IconSmile';
import AvatarProfile from '@/shared/UI/AvatarProfile';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import { PulicationUserI } from '@/shared/types/publication.types';

interface IPostComment {
    disabled: boolean;
    data: PulicationUserI;
}

const PostComment: FC<IPostComment> = ({ disabled, data }) => {
    const [value, setValue] = useState('');

    const commentHandler = async () => {
        try {
            console.log('');

            return '';
        } catch (err) {
            console.log(err);
        }
    };

    return (
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
    );
};

export default PostComment;

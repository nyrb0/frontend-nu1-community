import { FC, useState } from 'react';
import CommentInput from '../UI/input/CommentInput';
import IconSend from './icon/IconSend';
import IconSmile from './icon/IconSmile';
import AvatarProfile from '@/shared/profile/AvatarProfile';

interface IPostComment {
    disabled: boolean;
}

const PostComment: FC<IPostComment> = ({ disabled }) => {
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
                <AvatarProfile src='https://klike.net/uploads/posts/2022-07/1657607283_6.jpg' width={40} height={40} />
                <CommentInput
                    placeholder={!disabled ? 'К сожелению комментрии временно отключен' : 'Пишишите свой комментарии...'}
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

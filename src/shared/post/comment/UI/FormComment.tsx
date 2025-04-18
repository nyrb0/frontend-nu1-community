import AvatarProfile from '@/shared/UI/AvatarProfile';
import IconSmile from '../icon/IconSmile';
import IconSend from '../icon/IconSend';
import { commentPostService } from '@/shared/services/comment-post-service';
import { PulicationUserI } from '@/shared/types/publication.types';
import { useState } from 'react';
import CommentInput from '../../UI/input/CommentInput';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';

interface IFormComment {
    data: PulicationUserI;
    disabled: boolean;
}

const FormComment = ({ data, disabled }: IFormComment) => {
    const [value, setValue] = useState('');

    const commentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await commentPostService.createComment(data.id, { text: value });
            if (response.status === 200) {
                setValue('');
            }
        } catch (err) {
            console.error('У вас ошибка: ', err);
        }
    };
    return (
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
    );
};

export default FormComment;

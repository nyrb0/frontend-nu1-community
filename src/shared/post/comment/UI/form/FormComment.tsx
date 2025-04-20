import AvatarProfile from '@/shared/UI/AvatarProfile';
import IconSmile from '../../icon/IconSmile';
import IconSend from '../../icon/IconSend';
import { commentPostService } from '@/shared/services/comment-post-service';
import { PulicationUserI } from '@/shared/types/publication.types';
import { useState } from 'react';
import CommentInput from '../../../UI/input/CommentInput';
import { useCommentsContext } from '../../context/useCommentsContext';

interface IFormComment {
    data: PulicationUserI;
    disabled?: boolean;
    parentId?: string;
}

const FormComment = ({ data, disabled, parentId }: IFormComment) => {
    const [value, setValue] = useState('');
    const { setIdReplay } = useCommentsContext();
    const commentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await commentPostService.createComment(data.id, { text: value, parentId });
            if (response.status === 200) {
                setValue('');
                if (setIdReplay) {
                    setIdReplay(null);
                }
            }
        } catch (err) {
            console.error('У вас ошибка: ', err);
        }
    };
    return (
        <form className='df aic jcsb' onSubmit={commentHandler}>
            <div className='df jcsb' style={{ gap: 8 }}>
                <AvatarProfile src={data.user.avatarUrl} width={40} height={40} />
                <CommentInput
                    placeholder={!disabled ? 'Автор отключил комментрии' : 'Пишишите свой комментарии...'}
                    disabled={!disabled}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => disabled && setValue(e.target.value)}
                />
            </div>
            <div className={'df'}>
                <IconSmile />
                <button type='submit' style={{ width: '100%' }}>
                    <IconSend />
                </button>
            </div>
        </form>
    );
};

export default FormComment;

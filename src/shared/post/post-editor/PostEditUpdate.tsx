import React, { useEffect, useState } from 'react';

import {
    StyledEditModalPost,
    StyledPostButtons,
    StyledPostEditBackgroundInner,
    StyledPostEditBackgroundOut,
    StyledPostEditTextArea,
} from './postEdit.styled';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';
import TagUserBlock from './tag-people/TagUserBlock';
import { PulicationUserI } from '@/shared/types/publication.types';
import { postService } from '@/shared/services/post.service';
import IconPerson from '../UI/input/icon/IconPerson';
import TextAreaPost from '@/shared/UI/text-area/TextAreaPost';

interface IPostUpdateEdit {
    cancellation: () => void;
    postId: string;
    update?: () => void;
}

const PostUpdateEdit: React.FC<IPostUpdateEdit> = ({ cancellation, postId, update }) => {
    const [value, setValue] = useState('');
    const [data, setData] = useState<PulicationUserI>();

    // const [isVisibleTagPeople, setIsVisibleTagPeople] = useState(false);
    const [tagArrayUsername, setTagArrayUsername] = useState<string[]>([]);

    const addPost = async (e: any) => {
        e.preventDefault();
        try {
            if (!data) throw new Error('data is error or empty');
            await postService.updatePost(postId, { description: value });
            if (update) update();
            cancellation();
        } catch (err) {
            console.error(err);
        }
    };

    const getPost = async () => {
        const response = await postService.getPost(postId);
        if (response) setData(response);
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <StyledEditModalPost className={'df jcc aic'}>
            <div className={'df jcc aic'} style={{ width: 500 }}>
                <StyledPostEditBackgroundOut>
                    <h2 className='df jcc'>Редактировать</h2>
                    <form onSubmit={addPost}>
                        <StyledPostEditBackgroundInner>
                            <div>
                                <TextAreaPost
                                    placeholder={'Пишите что-нибудь'}
                                    value={value}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                                />
                            </div>
                            <StyledPostEditTextArea className='df aic'>
                                <IconPerson onClick={() => null} />
                            </StyledPostEditTextArea>
                        </StyledPostEditBackgroundInner>
                        <div className='df' style={{ gap: 10, marginTop: 5 }}>
                            {tagArrayUsername.map(username => (
                                <TagUserBlock data={username} onDelete={() => setTagArrayUsername(prev => prev.filter(tag => tag !== username))} />
                            ))}
                        </div>
                        <StyledPostButtons className={'df jce'}>
                            <span className='df'>
                                <PrimaryButton color={COLORS.WHITE} radius='18px' background={COLORS.TRANSPARENT} onClick={cancellation}>
                                    Отменить
                                </PrimaryButton>
                                <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} radius={'5px'} type='submit'>
                                    Опубликавать
                                </PrimaryButton>
                            </span>
                        </StyledPostButtons>
                    </form>
                </StyledPostEditBackgroundOut>
            </div>
        </StyledEditModalPost>
    );
};

export default PostUpdateEdit;

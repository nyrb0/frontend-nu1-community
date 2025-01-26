import React, { useState } from 'react';
import TextAreaPost from '../UI/TextAreaPost';
import IconPerson from '../UI/icon/IconPerson';
import IconPicture from '../UI/icon/IconPicture';
import { StyledPostButtons, StyledPostEditBackgroundInner, StyledPostEditBackgroundOut, StyledPostEditTextArea } from './postEdit.styled';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';
import { postService } from '@/shared/services/post.service';

const PostEdit = () => {
    const [value, setValue] = useState('');

    const addPost = async (e: any) => {
        e.preventDefault();
        await postService.create({ description: value });
    };
    return (
        <StyledPostEditBackgroundOut>
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
                        <IconPerson />
                        <IconPicture />
                    </StyledPostEditTextArea>
                </StyledPostEditBackgroundInner>

                <StyledPostButtons className={'df jce'}>
                    <span className='df'>
                        <PrimaryButton color={COLORS.WHITE} background={COLORS.TRANSPARENT}>
                            Позже
                        </PrimaryButton>
                        <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} borderRadios={'5px'} type='submit'>
                            Опубликавать
                        </PrimaryButton>
                    </span>
                </StyledPostButtons>
            </form>
        </StyledPostEditBackgroundOut>
    );
};

export default PostEdit;

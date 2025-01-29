import React, { useState } from 'react';
import TextAreaPost from '../UI/TextAreaPost';
import IconPerson from '../UI/icon/IconPerson';
import IconPicture from '../UI/icon/IconPicture';
import {
    StyledPostButtons,
    StyledPostEditBackgroundInner,
    StyledPostEditBackgroundOut,
    StyledPostEditTextArea,
    StyledPostSelectImage,
} from './postEdit.styled';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';
import { postService } from '@/shared/services/post.service';
import TagPeople from './tag-people/TagPeople';
import TagUserBlock from './TagUserBlock';

const PostEdit = () => {
    const [value, setValue] = useState('');
    const [files, setFiles] = useState<File | null>(null);
    const [isVisibleTagPeople, setIsVisibleTagPeople] = useState(false);
    const [tagArrayUsername, setTagArrayUsername] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFiles(event.target.files[0]);
        }
    };

    const addPost = async (e: any) => {
        e.preventDefault();
        try {
            await postService.create({ description: value, imageUrl: files });
            location.reload();
        } catch (err) {
            console.error(err);
        }
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
                        <IconPerson onClick={() => setIsVisibleTagPeople(true)} />
                        <label htmlFor='files'>
                            <IconPicture />
                        </label>
                        <input id='files' type='file' onChange={handleFileChange} style={{ display: 'none' }} />
                    </StyledPostEditTextArea>
                </StyledPostEditBackgroundInner>
                <div style={{ marginTop: 10 }}>{files ? <StyledPostSelectImage src={URL.createObjectURL(files)} alt='' /> : null}</div>
                <div className='df' style={{ gap: 10, marginTop: 5 }}>
                    {tagArrayUsername.map(username => (
                        <TagUserBlock data={username} onDelete={() => setTagArrayUsername(prev => prev.filter(tag => tag !== username))} />
                    ))}
                </div>
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

            {isVisibleTagPeople && (
                <TagPeople onClose={() => setIsVisibleTagPeople(false)} onChange={username => setTagArrayUsername(prev => [username, ...prev])} />
            )}
        </StyledPostEditBackgroundOut>
    );
};

export default PostEdit;

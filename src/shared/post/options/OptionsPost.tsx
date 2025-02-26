import { postService } from '@/shared/services/post.service';
import { StyledOptionsPost } from './optionsPost.styled';
import Modal from '@/shared/UI/Modal/Modal';
import { useState } from 'react';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';

type TypeisVisibility = { showComments: boolean; showLikes: boolean };

interface IOptionsPost {
    cancellation: () => void;
    postId: string;
    isOwner: boolean;
    isVisible: TypeisVisibility;
    setIsVisiblity: (prev: TypeisVisibility) => void;
    onSave: () => void;
    isSaved: boolean;
}

const OptionsPost: React.FC<IOptionsPost> = ({ postId, cancellation, isOwner, isVisible, setIsVisiblity, onSave, isSaved }) => {
    const [isDeletePost, setIsDeletePost] = useState(false);

    const sendServerVisible = async (body: TypeisVisibility) => {
        try {
            return await postService.updateVisibility(postId, body);
        } catch (err) {
            console.error(err);
        }
    };

    const handleToggleVisibility = (field: 'showComments' | 'showLikes') => {
        setIsVisiblity({
            ...isVisible,
            [field]: !isVisible[field],
        });

        // Изменяем видемость поста
        sendServerVisible(isVisible);
    };

    return (
        <>
            {!isOwner ? (
                !isDeletePost ? (
                    <StyledOptionsPost className={'df aic fdc'}>
                        <li
                            onClick={() => {
                                setIsDeletePost(true);
                            }}
                        >
                            Удалить
                        </li>
                        <li>Редактировать</li>
                        <li onClick={() => handleToggleVisibility('showComments')}>
                            {isVisible.showComments ? 'Выключить' : 'Включить'} комментарии
                        </li>
                        <li onClick={() => handleToggleVisibility('showLikes')}>{isVisible.showLikes ? 'Скрывать' : 'Показать'} количество лайков</li>
                        <li onClick={cancellation}>Отмена</li>
                    </StyledOptionsPost>
                ) : (
                    <Modal onClose={() => setIsDeletePost(false)}>
                        <p>Действительно хотите удалить?</p>
                        <div className='df jcsb' style={{ marginTop: 10 }}>
                            <PrimaryButton
                                color={COLORS.WHITE}
                                background={'red'}
                                borderRadios='7px'
                                type='submit'
                                onClick={() => {
                                    postService.deletePost(postId);
                                    cancellation();
                                }}
                            >
                                Да
                            </PrimaryButton>
                            <PrimaryButton
                                color={COLORS.WHITE}
                                background={'transparent'}
                                borderRadios='7px'
                                type='submit'
                                onClick={() => cancellation()}
                            >
                                Нет
                            </PrimaryButton>
                        </div>
                    </Modal>
                )
            ) : (
                <StyledOptionsPost className={'df aic fdc'}>
                    <li>Пожаловаться</li>

                    <li>Поделиться</li>
                    <li
                        onClick={() => {
                            onSave();
                            cancellation();
                        }}
                    >
                        {!isSaved ? 'Добавить в избранное' : 'Удалить из избранных'}
                    </li>
                    <li
                        onClick={() => {
                            cancellation();
                        }}
                    >
                        Копировать ссылку
                    </li>
                    <li>Перейти к публикации</li>
                    <li onClick={cancellation}>Отмена</li>
                </StyledOptionsPost>
            )}
        </>
    );
};

export default OptionsPost;

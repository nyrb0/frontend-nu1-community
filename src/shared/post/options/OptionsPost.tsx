import { postService } from '@/shared/services/post.service';
import { StyledOptionsPost, StyledWrapperOptionPost } from './optionsPost.styled';
import Modal from '@/shared/UI/Modal/Modal';
import { useState } from 'react';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';
import PostUpdateEdit from '@/shared/profile/post-editor/PostEditUpdate';

type TypeisVisibility = { showComments: boolean; showLikes: boolean };

interface IOptionsPost {
    cancellation: () => void; // отмена-закрытия расширении
    postId: string; // id поста
    isOwner: boolean; // владелец ли
    isVisible: TypeisVisibility; // поля видемости
    setIsVisiblity: (prev: TypeisVisibility) => void;
    onSave: () => void; // сохраниние
    isSaved: boolean; // сохранен ли
    update: () => void; // обновление поста
}

const OptionsPost: React.FC<IOptionsPost> = ({ postId, cancellation, update, isOwner, isVisible, setIsVisiblity, onSave, isSaved }) => {
    const [isDeletePost, setIsDeletePost] = useState(false);

    const [isEdit, setIsEdit] = useState(false);

    // отправляет данные на сервер поста { showComments: boolean; showLikes: boolean }
    const sendServerVisible = async (body: TypeisVisibility) => {
        try {
            return await postService.updateVisibility(postId, body);
        } catch (err) {
            console.error(err);
        }
    };

    // передает в главный пост чтобы изменить поля видемости поста showLikes, showComments
    const handleToggleVisibility = (field: 'showComments' | 'showLikes') => {
        const updatedVisibility: TypeisVisibility = {
            ...isVisible,
            [field]: !isVisible[field],
        };
        setIsVisiblity(updatedVisibility);
        sendServerVisible(updatedVisibility);
    };

    // копирует url поста
    const copyLink = () => navigator.clipboard.writeText(`${window.location.href}post/${postId}`).catch(console.error);

    return (
        <>
            {!isEdit ? (
                isOwner ? (
                    isDeletePost ? (
                        <Modal onClose={() => setIsDeletePost(false)}>
                            <p>Действительно хотите удалить?</p>
                            <div className='df jcsb' style={{ marginTop: 10 }}>
                                <PrimaryButton
                                    color={COLORS.WHITE}
                                    background={'red'}
                                    radius='7px'
                                    type='submit'
                                    onClick={async () => {
                                        try {
                                            await postService.deletePost(postId);
                                            cancellation();
                                        } catch (error) {
                                            console.error('Ошибка при удалении поста:', error);
                                        }
                                    }}
                                >
                                    Да
                                </PrimaryButton>
                                <PrimaryButton
                                    color={COLORS.WHITE}
                                    background={'transparent'}
                                    radius='7px'
                                    type='submit'
                                    onClick={() => cancellation()}
                                >
                                    Нет
                                </PrimaryButton>
                            </div>
                        </Modal>
                    ) : (
                        <>
                            <StyledOptionsPost className={'df aic fdc'}>
                                <li
                                    onClick={() => {
                                        setIsDeletePost(true);
                                    }}
                                >
                                    Удалить
                                </li>
                                <li onClick={() => setIsEdit(true)}>Редактировать</li>
                                <li
                                    onClick={() => {
                                        handleToggleVisibility('showComments');
                                        cancellation();
                                    }}
                                >
                                    {isVisible.showComments ? 'Выключить' : 'Включить'} комментарии
                                </li>
                                <li onClick={() => handleToggleVisibility('showLikes')}>
                                    {isVisible.showLikes ? 'Скрывать' : 'Показать'} количество лайков
                                </li>
                                <li onClick={cancellation}>Отмена</li>
                            </StyledOptionsPost>
                            <StyledWrapperOptionPost onClick={cancellation} />
                        </>
                    )
                ) : (
                    <>
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
                                    copyLink();
                                }}
                            >
                                Скопировать ссылку
                            </li>
                            <li>Перейти к публикации</li>
                            <li onClick={cancellation}>Отмена</li>
                        </StyledOptionsPost>
                        <StyledWrapperOptionPost onClick={cancellation} />
                    </>
                )
            ) : (
                <PostUpdateEdit postId={postId} update={update} cancellation={cancellation} />
            )}
        </>
    );
};

export default OptionsPost;

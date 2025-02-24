import { postService } from '@/shared/services/post.service';
import { StyledOptionsPost } from './optionsPost.styled';
import Modal from '@/shared/UI/Modal/Modal';
import { useState } from 'react';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';

interface IOptionsPost {
    cancellation: () => void;
    postId: string;
    isOwner: boolean;
    isVisible: { comment: boolean; countLike: boolean };
    setIsVisible: (isVisible: { comment: boolean; countLike: boolean }) => void;
}

const OptionsPost: React.FC<IOptionsPost> = ({ postId, cancellation, isOwner, setIsVisible, isVisible }) => {
    const [isDeletePost, setIsDeletePost] = useState(false);

    return (
        <>
            {isOwner ? (
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
                        <li onClick={() => setIsVisible({ ...isVisible, comment: !isVisible.comment })}>
                            {isVisible.comment ? 'Выключить' : 'Включить'} комментарии
                        </li>
                        <li onClick={() => setIsVisible({ ...isVisible, countLike: !isVisible.countLike })}>
                            {isVisible.countLike ? 'Скрывать' : 'Показать'} количество лайков
                        </li>
                        <li onClick={cancellation}>Отмена</li>
                    </StyledOptionsPost>
                ) : (
                    <Modal onClose={() => setIsDeletePost(false)}>
                        <p>Дейвительно хотите удалить?</p>
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
                    <li>Добавить в изранное</li>
                    <li>Копировать ссылку</li>
                    <li>Перейти к публикации</li>
                    <li onClick={cancellation}>Отмена</li>
                </StyledOptionsPost>
            )}
        </>
    );
};

export default OptionsPost;

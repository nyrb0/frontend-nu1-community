import { postService } from '@/shared/services/post.service';
import { StyledOptionsPost } from './optionsPost.styled';
import Modal from '@/shared/UI/Modal/Modal';
import { useState } from 'react';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';

interface IOptionsPost {
    cancellation: () => void;
    postId: string;
}

const OptionsPost: React.FC<IOptionsPost> = ({ postId, cancellation }) => {
    const [isDeletePost, setIsDeletePost] = useState(false);
    return (
        <>
            {!isDeletePost ? (
                <StyledOptionsPost className={'df aic fdc'}>
                    <li
                        onClick={() => {
                            setIsDeletePost(true);
                        }}
                    >
                        Удалить
                    </li>
                    <li>Редактировать</li>
                    <li>Выключить комментарии</li>
                    <li>Скрывать количество лайков</li>
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
            )}
        </>
    );
};

export default OptionsPost;

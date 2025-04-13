import { commentPostService } from '@/shared/services/comment-post-service';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import { IComment } from '@/shared/types/comment.types';
import Modal from '@/shared/UI/Modal/Modal';
import { PulicationUserI } from '@/shared/types/publication.types';
import CommentByPublication from './CommentByPublication';
import IconArrowDown from './icon/IconArrowDown';
import { StyledComments, StyledIconArrowDown } from './commentsCard.styled';

interface IComments {
    data: PulicationUserI;
    onClose: (state: boolean) => void;
}

const Comments = ({ data, onClose }: IComments) => {
    const [commentsData, setCommentsData] = useState<IComment[]>([]);

    useEffect(() => {
        (async () => {
            const response = await commentPostService.getAll(data.id);
            if (response.status === 200) {
                setCommentsData(response.data);
            }
        })();
    }, []);

    const onDelete = async (id: string) => {
        try {
            const response = await commentPostService.deleteCommentById(id);
            if (response.status === 200) {
                const result = await commentsData.filter(item => item.id !== id);
                setCommentsData(result);
            }
        } catch (error) {
            console.error('Ошибка при удалении поста', error);
        }
    };
    return (
        <Modal position={'flex-end'} style={{ maxWidth: 800, height: '70vh' }} onClose={() => onClose(false)}>
            <h2 className='df jcc'>{data._count.comments} комментарии</h2>
            <StyledIconArrowDown>
                <IconArrowDown />
            </StyledIconArrowDown>
            <CommentByPublication data={data} />
            <StyledComments className='df fdc'>
                {commentsData.map(item => (
                    <div key={item.id}>
                        <CommentCard data={item} onDelete={() => onDelete(item.id)} />
                        <hr />
                    </div>
                ))}
            </StyledComments>
        </Modal>
    );
};

export default Comments;

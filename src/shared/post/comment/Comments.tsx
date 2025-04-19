import { commentPostService } from '@/shared/services/comment-post-service';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import { IComment } from '@/shared/types/comment.types';
import Modal from '@/shared/UI/Modal/Modal';
import { PulicationUserI } from '@/shared/types/publication.types';
import CommentByPublication from './CommentByPublication';
import IconArrowDown from './icon/IconArrowDown';
import { StyledComments, StyledIconArrowDown, StyledModalComment, StyledModalComments } from './commentsCard.styled';
import FormComment from './UI/form/FormComment';
import { useCommentsContext } from './context/useCommentsContext';
import ReplayCommentPerson from './UI/replay/ReplayCommentPerson';

interface IComments {
    data: PulicationUserI;
    onClose: (state: boolean) => void;
}

const Comments = ({ data, onClose }: IComments) => {
    const [commentsData, setCommentsData] = useState<IComment[]>([]);

    const { idReplay, setIdReplay } = useCommentsContext();

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
                const result = commentsData.filter(item => item.id !== id);
                setCommentsData(result);
            }
        } catch (error) {
            console.error('Ошибка при удалении комментарии', error);
        }
    };

    console.log('render');
    return (
        <Modal
            position={'flex-end'}
            style={{ maxWidth: 800 }}
            onClose={() => {
                onClose(false);
                setIdReplay(null);
            }}
        >
            <StyledModalComments>
                <h2 className='df jcc'>{data._count.comments} комментарии</h2>
                <StyledIconArrowDown>
                    <IconArrowDown />
                </StyledIconArrowDown>
                <CommentByPublication data={data} />
                <StyledComments className='df fdc'>
                    {commentsData.map(item => (
                        <div key={item.id} style={{ position: 'relative' }}>
                            <CommentCard data={item} onDelete={() => onDelete(item.id)} />
                            <hr />
                        </div>
                    ))}
                </StyledComments>
            </StyledModalComments>
            <StyledModalComment>
                {idReplay && <ReplayCommentPerson className='replay_comment' username={idReplay.user?.username} text={idReplay.text} />}

                <FormComment parentId={idReplay?.id} data={data} disabled />
            </StyledModalComment>
        </Modal>
    );
};

export default Comments;

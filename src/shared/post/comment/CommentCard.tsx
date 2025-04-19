import { IComment } from '@/shared/types/comment.types';
import { StyledCommentsBlock, StyledUsername } from './commentsCard.styled';
import ActionsComment from './ActionsComment';
import HashtagText from '../HashTags';
import AvatarProfile from '@/shared/UI/AvatarProfile';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import { useState } from 'react';
import IconDelete from './icon/IconDelete';
import IconLanguageStack from '@/shared/icons/IconLanguageStack';
import { commentPostService } from '@/shared/services/comment-post-service';

interface ICommentCard {
    data: IComment;
    onDelete?: () => void;
    handleUploadReplayComment?: () => void;
}

const CommentBlock = ({ data, onDelete, handleUploadReplayComment }: ICommentCard) => {
    return (
        <StyledCommentsBlock className={'df jcsb'} style={{ height: '100%' }}>
            <div className='df'>
                <AvatarProfile width={60} height={60} src={data.user.avatarUrl ? `${baseUrlAws}/${data?.user.avatarUrl}` : ''} />
                <div style={{ marginLeft: 10 }}>
                    <StyledUsername className={'df aic'}>
                        {data.user.username}
                        <IconLanguageStack />
                    </StyledUsername>
                    {data.isEdit && <p className='isEdit df jce'>редактировано</p>}
                    <div>
                        <HashtagText
                            onMentionClick={mention => alert(mention)}
                            data={data.text}
                            onHashtagClick={(hashTags: string) => alert(hashTags)}
                        />
                    </div>
                    <div className='df aie'>
                        <ActionsComment data={data} onUploadReplay={handleUploadReplayComment} />
                    </div>
                </div>
            </div>
            <div>
                <IconDelete onClick={onDelete} />
            </div>
        </StyledCommentsBlock>
    );
};

const CommentCard = ({ data, onDelete }: ICommentCard) => {
    const [commentsReplayData, setCommentsReplayData] = useState<IComment[]>([]);
    const [isVisibleReplay, setIsVisibleReplay] = useState(false);

    const onDeleteReplay = async (id: string) => {
        try {
            const response = await commentPostService.deleteCommentById(id);
            if (response.status === 200) {
                const result = commentsReplayData.filter(item => item.id !== id);
                setCommentsReplayData(result);
            }
        } catch (error) {
            console.error('Ошибка при удалении поста', error);
        }
    };

    const onUploadRaplay = async () => {
        const body = { publicationId: data.publicationId, parentId: data.parentId };

        try {
            const response = await commentPostService.getAllReplayById(body);
            if (response.status === 200) {
                setCommentsReplayData(response.data);
                setIsVisibleReplay(true);
            }
        } catch (error) {
            console.error('Ошибка при удалении поста', error);
        }
    };

    return (
        <>
            <CommentBlock data={data} handleUploadReplayComment={() => onUploadRaplay()} onDelete={onDelete} />
            {isVisibleReplay && commentsReplayData.map(item => <CommentBlock key={item.id} data={item} />)}
        </>
    );
};

export default CommentCard;

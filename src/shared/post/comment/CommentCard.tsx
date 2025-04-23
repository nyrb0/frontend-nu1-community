import { IComment } from '@/shared/types/comment.types';
import { StyledCommentsBlock, StyledCommentTimeAgo, StyledUsername } from './commentsCard.styled';
import ActionsComment from './ActionsComment';
import HashtagText from '../HashTags';
import AvatarProfile from '@/shared/UI/AvatarProfile';
import { useState } from 'react';
import IconDelete from './icon/IconDelete';
import IconLanguageStack from '@/shared/icons/IconLanguageStack';
import { commentPostService } from '@/shared/services/comment-post-service';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { localUsername } from '@/pages/auth/username-local';

dayjs.locale('ru');
dayjs.extend(relativeTime);

interface ICommentCard {
    data: IComment;
    onDelete?: () => void;
    handleUploadReplayComment?: () => void;
    isVisibleReplay?: boolean;
}

const CommentBlock = ({ data, onDelete, handleUploadReplayComment, isVisibleReplay }: ICommentCard) => {
    const timeAgo = dayjs(data.createdAt).fromNow();
    console.log(data.user);
    return (
        <StyledCommentsBlock className={'df jcsb'} style={{ height: '100%' }}>
            <div className='df'>
                <AvatarProfile width={60} height={60} src={data.user.avatarUrl} />
                <div style={{ marginLeft: 10 }}>
                    <StyledUsername className={'df aic'}>
                        <IconLanguageStack />
                        {data.user.username} <span>{data.user.username === localUsername.get() && ' •Вы'}</span>
                    </StyledUsername>
                    {data.isEdit && <p className='isEdit df jce'>редактировано</p>}
                    <div>
                        <HashtagText
                            onMentionClick={mention => alert(mention)}
                            data={data.text}
                            onHashtagClick={(hashTags: string) => alert(hashTags)}
                        />
                    </div>
                    <div className='df aie ' style={{ width: '100%' }}>
                        <ActionsComment isVisibleReplay={isVisibleReplay} data={data} onUploadReplay={handleUploadReplayComment} />
                    </div>
                </div>
            </div>
            <div className='df fdc jcsb aie'>
                <IconDelete onClick={onDelete} />
                <StyledCommentTimeAgo>{timeAgo}</StyledCommentTimeAgo>
            </div>
        </StyledCommentsBlock>
    );
};

const CommentCard = ({ data, onDelete }: ICommentCard) => {
    const [commentsReplayData, setCommentsReplayData] = useState<IComment[]>([]);
    const [isVisibleReplay, setIsVisibleReplay] = useState(false);

    // const onDeleteReplay = async (id: string) => {
    //     try {
    //         const response = await commentPostService.deleteCommentById(id);
    //         if (response.status === 200) {
    //             const result = commentsReplayData.filter(item => item.id !== id);
    //             setCommentsReplayData(result);
    //         }
    //     } catch (error) {
    //         console.error('Ошибка при удалении поста', error);
    //     }
    // };

    const onUploadRaplay = async () => {
        const body = { publicationId: data.publicationId, parentId: data.id };

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
            <div className='df jce'>
                <div style={{ width: '95%', marginTop: 5 }}>
                    {isVisibleReplay && commentsReplayData.map(item => <CommentBlock isVisibleReplay={false} key={item.id} data={item} />)}
                </div>
            </div>
        </>
    );
};

export default CommentCard;

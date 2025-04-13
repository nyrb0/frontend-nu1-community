import { IComment } from '@/shared/types/comment.types';
import { StyledCommentsBlock, StyledUsername } from './commentsCard.styled';
import ActionsComment from './ActionsComment';
import HashtagText from '../HashTags';
import AvatarProfile from '@/shared/UI/AvatarProfile';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';

interface ICommentCard {
    data: IComment;
}

const CommentCard = ({ data }: ICommentCard) => {
    return (
        <StyledCommentsBlock className={'df '} style={{ height: '100%' }}>
            <AvatarProfile width={60} height={60} src={data.user.avatarUrl ? `${baseUrlAws}/${data?.user.avatarUrl}` : ''} />

            <div style={{ marginLeft: 10 }}>
                <StyledUsername>{data.user.username}</StyledUsername>
                {data.isEdit && <p className='isEdit df jce'>редактировано</p>}
                <HashtagText onMentionClick={mention => alert(mention)} data={data.text} onHashtagClick={(hashTags: string) => alert(hashTags)} />
                <div className='df aie'>
                    <ActionsComment data={data} />
                </div>
            </div>
        </StyledCommentsBlock>
    );
};

export default CommentCard;

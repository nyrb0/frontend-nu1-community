import { IComment } from '@/shared/types/comment.types';
import { StyledCommentsBlock, StyledUsername } from './commentsCard.styled';
import ActionsComment from './ActionsComment';
import HashtagText from '../HashTags';
import AvatarProfile from '@/shared/UI/AvatarProfile';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';

interface ICommentCard {
    data: IComment;
    onDelete: () => void;
}

const CommentCard = ({ data, onDelete }: ICommentCard) => {
    return (
        <StyledCommentsBlock className={'df jcsb'} style={{ height: '100%' }}>
            <div className='df'>
                <AvatarProfile width={60} height={60} src={data.user.avatarUrl ? `${baseUrlAws}/${data?.user.avatarUrl}` : ''} />

                <div style={{ marginLeft: 10 }}>
                    <StyledUsername>{data.user.username}</StyledUsername>
                    {data.isEdit && <p className='isEdit df jce'>редактировано</p>}
                    <HashtagText onMentionClick={mention => alert(mention)} data={data.text} onHashtagClick={(hashTags: string) => alert(hashTags)} />
                    <div className='df aie'>
                        <ActionsComment data={data} />
                    </div>
                </div>
            </div>
            <div>
                <svg onClick={onDelete} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M5 8V16C5 17.8856 5 18.8284 5.58579 19.4142C6.17157 20 7.11438 20 9 20H15C16.8856 20 17.8284 20 18.4142 19.4142C19 18.8284 19 17.8856 19 16V8M5 8H19M5 8H3.36364C3.21017 8 3.13343 8 3.08014 7.96011C3.06488 7.94868 3.05132 7.93512 3.03989 7.91986C3 7.86657 3 7.78983 3 7.63636V7.63636C3 6.10168 3 5.33434 3.39892 4.80144C3.51321 4.64876 3.64876 4.51321 3.80144 4.39892C4.33434 4 5.10168 4 6.63636 4H17.3636C18.8983 4 19.6657 4 20.1986 4.39892C20.3512 4.51321 20.4868 4.64876 20.6011 4.80144C21 5.33434 21 6.10168 21 7.63636V7.63636C21 7.78983 21 7.86657 20.9601 7.91986C20.9487 7.93512 20.9351 7.94868 20.9199 7.96011C20.8666 8 20.7898 8 20.6364 8H19'
                        stroke='#5f5f5f'
                        strokeWidth='2'
                    />
                    <path d='M10 16H14' stroke='#33363F' strokeWidth='2' strokeLinecap='round' />
                </svg>
            </div>
        </StyledCommentsBlock>
    );
};

export default CommentCard;

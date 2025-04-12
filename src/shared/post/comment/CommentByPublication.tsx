import { PulicationUserI } from '@/shared/types/publication.types';
import { StyledPostProfile, StyledPostsDescription } from '../posts.styled';
import AvatarProfile from '@/shared/UI/AvatarProfile';
import dayjs from 'dayjs';
import HashtagText from '../HashTags';
import ActionsPost from '../ActionsPost';
import { Link } from 'react-router-dom';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import IconThreePoints from '../UI/icon/IconThreePoints';

const CommentPost = ({ data }: { data: PulicationUserI }) => {
    const isFullName = data.user.lastName || data.user.name;
    const timeAgo = dayjs(data.createdAt).fromNow();
    return (
        <div style={{ position: 'relative' }}>
            <StyledPostProfile className='df aic jcsb'>
                <Link className='df aic' to={`profile/${data.user.username}`}>
                    <AvatarProfile width={60} height={60} src={data.user.avatarUrl ? `${baseUrlAws}/${data?.user.avatarUrl}` : ''} />
                    <div style={{ paddingLeft: 10 }}>
                        <p style={!isFullName ? { color: 'var(--white-color)', fontWeight: 600, fontSize: 16 } : {}}>
                            {data.user.username}
                            {/* {user === data.user.username && ' •Вы'} */}
                        </p>
                        {!isFullName ? null : (
                            <p>
                                {data.user.lastName} {data.user.name}
                            </p>
                        )}
                    </div>
                </Link>
                <div>
                    <p>{timeAgo}</p>
                </div>
            </StyledPostProfile>
            <StyledPostsDescription>
                {data.isEdit && <p className='isEdit df jce'>редактировано</p>}
                <HashtagText
                    onMentionClick={mention => alert(mention)}
                    data={data.description}
                    onHashtagClick={(hashTags: string) => alert(hashTags)}
                />
            </StyledPostsDescription>
            <div>
                <ActionsPost data={data} isShowComments={data.showComments} isShowLikes={data.showLikes} />
            </div>
        </div>
    );
};

export default CommentPost;

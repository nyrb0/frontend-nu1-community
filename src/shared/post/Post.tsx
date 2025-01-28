import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import AvatarProfile from '../profile/AvatarProfile';
import { StyledPost, StyledPostDo, StyledPostProfile, StyledPostsDescription } from './posts.styled';
import { PulicationUserI } from '@/shared/types/publication.types';
// import LikeIcon from './UI/icon/like-icon.svg';
// import ShareIcon from './UI/icon/share-icon.svg';
// import CommentIcon from './UI/icon/comment-icon.svg';
// import SaveIcon from './UI/icon/save-icon.svg';
// import ThreePoints from './UI/icon/three-points.svg';
import HashtagText from './HashTags';
import IconComment from './UI/icon/IconComment';
import IconLike from './UI/icon/IconLike';
import IconShare from './UI/icon/IconShare';
import IconSave from './UI/icon/IconSave';

interface IPost {
    data: PulicationUserI;
}

const Post: React.FC<IPost> = ({ data }) => {
    const isFullName = data.user.lastName || data.user.name;
    return (
        <div style={{ paddingBottom: 50 }}>
            <StyledPostProfile className='df aic jcsb'>
                <div className='df aic'>
                    <AvatarProfile width={60} height={60} src={data.user.avatarUrl ? `${baseUrlAws}/${data?.user.avatarUrl}` : ''} />
                    <div>
                        {!isFullName ? null : (
                            <p>
                                {data.user.lastName} {data.user.name}
                            </p>
                        )}
                        <p style={!isFullName ? { color: 'var(--white-color)', fontWeight: 600, fontSize: 16 } : {}}>@{data.user.username}</p>
                    </div>
                </div>
                <IconComment />
            </StyledPostProfile>
            <StyledPostsDescription>
                <HashtagText data={data.description} onHashtagClick={(hashTags: string) => alert(hashTags)} />
            </StyledPostsDescription>
            <StyledPost src={data.imageUrl ? `${baseUrlAws}/${data?.imageUrl}` : ''} />

            <StyledPostDo className='df jcsb'>
                <ul className='df'>
                    <li>
                        <IconLike />
                        <span>{data.countLike} лайки</span>
                    </li>
                    <li>
                        <IconComment />
                        <span>{data.commentsCount} комментарии</span>
                    </li>
                    <li>
                        <IconShare />
                        <span>{12} поделились</span>
                    </li>
                </ul>
                <IconSave />
            </StyledPostDo>
        </div>
    );
};

export default Post;

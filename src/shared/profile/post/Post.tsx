import { urlAvatar } from '@/shared/constants/urlAvatar';
import AvatarProfile from '../AvatarProfile';
import { StyledPost, StyledPostDo, StyledPostProfile, StyledPostsDescription } from './posts.styled';
import { PulicationUserI } from '@/shared/types/publication.types';
import LikeIcon from './UI/icon/like-icon.svg';
import ShareIcon from './UI/icon/share-icon.svg';
import CommentIcon from './UI/icon/comment-icon.svg';
import SaveIcon from './UI/icon/save-icon.svg';
import ThreePoints from './UI/icon/three-points.svg';
import HashtagText from './HashTags';

interface IPost {
    data: PulicationUserI;
}

const Post: React.FC<IPost> = ({ data }) => {
    return (
        <div style={{ paddingBottom: 50 }}>
            <StyledPostProfile className='df aic jcsb'>
                <div className='df aic'>
                    <AvatarProfile width={60} height={60} src={urlAvatar} />
                    <div>
                        <p>{'Nurbolot Nurbolotovich'}</p>
                        <p>{'@ny1boo'}</p>
                    </div>
                </div>
                <img src={ThreePoints} alt={'three points'} />
            </StyledPostProfile>
            <StyledPostsDescription>
                <HashtagText data={data.description} onHashtagClick={(hashTags: string) => alert(hashTags)} />
            </StyledPostsDescription>
            <StyledPost src={'https://i.ibb.co/Fs00jC9/IMG-20231126-004712-076.webp'} />

            <StyledPostDo className='df jcsb'>
                <ul className='df'>
                    <li>
                        <img src={LikeIcon} alt='like-icon' />
                        <span>{32} лайки</span>
                    </li>
                    <li>
                        <img src={CommentIcon} alt='comment-icon' />
                        <span>{1} комментарии</span>
                    </li>
                    <li>
                        <img src={ShareIcon} alt={'share-icon'} />
                        <span>{12} поделились</span>
                    </li>
                </ul>
                <div>
                    <img src={SaveIcon} alt={'save-icon'} />
                </div>
            </StyledPostDo>
        </div>
    );
};

export default Post;

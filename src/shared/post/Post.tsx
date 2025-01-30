import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import AvatarProfile from '../profile/AvatarProfile';
import { StyledPost, StyledPostDo, StyledPostProfile, StyledPostsDescription } from './posts.styled';
import { PulicationUserI } from '@/shared/types/publication.types';
import HashtagText from './HashTags';
import IconComment from './UI/icon/IconComment';
import IconLike from './UI/icon/IconLike';
import IconShare from './UI/icon/IconShare';
import IconSave from './UI/icon/IconSave';
import { useEffect, useState } from 'react';
import { likePostService } from './service/likePost.service';

interface IPost {
    data: PulicationUserI;
}

const Post: React.FC<IPost> = ({ data }) => {
    const isFullName = data.user.lastName || data.user.name;
    const [count, setCount] = useState<{ like: number; comment: number; share: number }>({ like: data.countLike, comment: 0, share: 0 });

    const handleLike = async () => {
        const postId = data.id;
        const isLiked = await likePostService.checkLiked(postId);
        if (isLiked) {
            likePostService.unLiked(postId);
            setCount(prev => ({ ...prev, like: prev.like - 1 }));
            data.liked = false;
            // setCount();
        } else {
            likePostService.liked(postId);
            setCount(prev => ({ ...prev, like: prev.like + 1 }));
            data.liked = true;
        }
    };

    useEffect(() => {}, []);

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
                        <IconLike isLiked={data.liked} onClick={handleLike} />
                        <span>{count.like} лайки</span>
                    </li>
                    <li>
                        <IconComment />
                        <span>{count.comment} комментарии</span>
                    </li>
                    <li>
                        <IconShare />
                        <span>{count.share} поделились</span>
                    </li>
                </ul>
                <IconSave />
            </StyledPostDo>
        </div>
    );
};

export default Post;

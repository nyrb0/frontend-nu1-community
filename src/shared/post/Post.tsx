import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import AvatarProfile from '../profile/AvatarProfile';
import { StyledPost, StyledPostDo, StyledPostProfile, StyledPostsDescription } from './posts.styled';
import { PulicationUserI } from '@/shared/types/publication.types';
import HashtagText from './HashTags';
import IconComment from './UI/icon/IconComment';
import IconThreePoints from './UI/icon/IconThreePoints';
import IconLike from './UI/icon/IconLike';
import IconShare from './UI/icon/IconShare';
import IconSave from './UI/icon/IconSave';
import { useEffect, useState } from 'react';
import { likePostService } from './service/likePost.service';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import OptionsPost from './options/OptionsPost';
import { savePostService } from './service/savePost.service';

dayjs.locale('ru');
dayjs.extend(relativeTime);
interface IPost {
    data: PulicationUserI;
}

const Post: React.FC<IPost> = ({ data }) => {
    const isFullName = data.user.lastName || data.user.name;

    const [count, setCount] = useState<{ like: number; comment: number; share: number; save: number }>({
        like: data.countLike,
        comment: 0,
        share: 0,
        save: 0,
    });
    const [isVisibleOptions, setIsVisibleOptions] = useState(false);
    const handleLike = async () => {
        const postId = data.id;
        const isLiked = await likePostService.checkLiked(postId);
        if (isLiked) {
            likePostService.unLiked(postId);
            setCount(prev => ({ ...prev, like: prev.like - 1 }));
            data.liked = false;
        } else {
            likePostService.liked(postId);
            setCount(prev => ({ ...prev, like: prev.like + 1 }));
            data.liked = true;
        }
    };

    const handleSave = async () => {
        const postId = data.id;
        const isSaved = await savePostService.checkSaved(postId);
        if (isSaved) {
            savePostService.unSaved(postId);
            setCount(prev => ({ ...prev, save: prev.save - 1 }));
            data.saved = false;
        } else {
            savePostService.saved(postId);
            setCount(prev => ({ ...prev, save: prev.save + 1 }));
            data.saved = true;
        }
    };

    const timeAgo = dayjs(data.createdAt).fromNow();

    useEffect(() => {}, []);

    return (
        <div style={{ paddingBottom: 50, position: 'relative' }}>
            {isVisibleOptions && <OptionsPost postId={data.id} cancellation={() => setIsVisibleOptions(false)} />}

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
                <div>
                    <div className='df jce'>
                        <IconThreePoints
                            onClick={() => (isVisibleOptions ? setIsVisibleOptions(false) : setIsVisibleOptions(true))}
                            style={{ marginBottom: 5 }}
                        />
                    </div>
                    <p>{timeAgo}</p>
                </div>
            </StyledPostProfile>

            <StyledPostsDescription>
                <HashtagText
                    onMentionClick={mention => alert(mention)}
                    data={data.description}
                    onHashtagClick={(hashTags: string) => alert(hashTags)}
                />
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

                <IconSave isSave={data.saved} onClick={handleSave} />
            </StyledPostDo>
        </div>
    );
};

export default Post;

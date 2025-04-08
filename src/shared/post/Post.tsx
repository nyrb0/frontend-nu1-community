import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import AvatarProfile from '../UI/AvatarProfile';
import { StyledPostImage, StyledPostDo, StyledPostProfile, StyledPostsDescription, StyledPostBackground, StyledPostComment } from './posts.styled';
import { PulicationUserI } from '@/shared/types/publication.types';
import HashtagText from './HashTags';
import IconComment from './UI/icon/IconComment';
import IconThreePoints from './UI/icon/IconThreePoints';
import IconLike from './UI/icon/IconLike';
import IconShare from './UI/icon/IconShare';
import IconSave from './UI/icon/IconSave';
import { useState } from 'react';
import { likePostService } from './service/likePost.service';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import OptionsPost from './options/OptionsPost';
import { savePostService } from './service/savePost.service';
import { useNavigate } from 'react-router-dom';
import PostComment from './comment/PostComment';
import { postService } from '../services/post.service';
import { localUsername } from '@/pages/auth/username-local';

dayjs.locale('ru');
dayjs.extend(relativeTime);
interface IPost {
    data: PulicationUserI;
    optionOwner: boolean;
}

const Post: React.FC<IPost> = ({ data: originalData, optionOwner }) => {
    const [data, setData] = useState<PulicationUserI>(originalData);
    const isFullName = data.user.lastName || data.user.name;
    const user = localUsername.get();
    const navigate = useNavigate();
    const [count, setCount] = useState<{ like: number; comment: number; share: number; save: number }>({
        like: data._count.likes,
        comment: data._count.comments,
        share: 0,
        save: data._count.saves,
    });

    const [isVisibleOptions, setIsVisibleOptions] = useState(false);
    const [isVisiblity, setIsVisiblity] = useState({ showComments: data.showComments, showLikes: data.showLikes });

    const handleLike = async () => {
        const postId = data.id;
        const isLiked = await likePostService.checkLiked(postId);
        if (isLiked) {
            likePostService.unLiked(postId);
            setCount(prev => ({ ...prev, like: prev.like - 1 }));
            setData(prev => ({ ...prev, liked: false }));
        } else {
            likePostService.liked(postId);
            setCount(prev => ({ ...prev, like: prev.like + 1 }));
            setData(prev => ({ ...prev, liked: true }));
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

    const updatePost = async () => {
        try {
            const response = await postService.getPost(data.id);
            if (response) setData(response);
        } catch (error) {
            console.error('Ошибка при обновлении поста:', error);
        }
    };

    const timeAgo = dayjs(data.createdAt).fromNow();

    return (
        <StyledPostBackground>
            {isVisibleOptions && (
                <OptionsPost
                    update={updatePost}
                    isSaved={data.saved}
                    onSave={() => handleSave()}
                    isOwner={optionOwner && data.isOwner}
                    postId={data.id}
                    cancellation={() => setIsVisibleOptions(false)}
                    isVisible={isVisiblity}
                    setIsVisiblity={setIsVisiblity}
                />
            )}

            <StyledPostProfile className='df aic jcsb'>
                <div className='df aic' onClick={() => navigate(`profile/${data.user.username}`)}>
                    <AvatarProfile width={60} height={60} src={data.user.avatarUrl ? `${baseUrlAws}/${data?.user.avatarUrl}` : ''} />
                    <div>
                        <p style={!isFullName ? { color: 'var(--white-color)', fontWeight: 600, fontSize: 16 } : {}}>
                            {data.user.username}
                            {user === data.user.username && ' •Вы'}
                        </p>
                        {!isFullName ? null : (
                            <p>
                                {data.user.lastName} {data.user.name}
                            </p>
                        )}
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

            <hr />

            <StyledPostsDescription>
                {data.isEdit && <p className='isEdit df jce'>{'редактировано'}</p>}
                <HashtagText
                    onMentionClick={mention => alert(mention)}
                    data={data.description}
                    onHashtagClick={(hashTags: string) => alert(hashTags)}
                />
            </StyledPostsDescription>

            {data.imageUrl && <StyledPostImage src={data.imageUrl ? `${baseUrlAws}/${data.imageUrl}` : ''} />}

            <StyledPostDo className='df jcsb'>
                <ul className='df'>
                    <li>
                        <IconLike isLiked={data.liked} onClick={handleLike} />
                        {isVisiblity.showLikes && <span>{count.like} лайки</span>}
                    </li>

                    {isVisiblity.showComments && (
                        <li>
                            <IconComment />
                            <span>{count.comment} комментарии</span>
                        </li>
                    )}
                    <li>
                        <IconShare />
                        <span>{count.share} поделились</span>
                    </li>
                </ul>

                <IconSave isSave={data.saved} onClick={handleSave} />
            </StyledPostDo>

            <hr />

            <StyledPostComment>
                <PostComment disabled={isVisiblity.showComments} data={data} />
            </StyledPostComment>
        </StyledPostBackground>
    );
};

export default Post;

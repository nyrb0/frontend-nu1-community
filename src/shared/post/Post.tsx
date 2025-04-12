import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import AvatarProfile from '../UI/AvatarProfile';
import { StyledPostImage, StyledPostDo, StyledPostProfile, StyledPostsDescription, StyledPostBackground, StyledPostComment } from './posts.styled';
import { PulicationUserI } from '@/shared/types/publication.types';
import HashtagText from './HashTags';
import IconThreePoints from './UI/icon/IconThreePoints';
import { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';
import OptionsPost from './options/OptionsPost';
import { savePostService } from './service/savePost.service';
import { useNavigate } from 'react-router-dom';
import PostComment from './comment/PostComment';
import { postService } from '../services/post.service';
import { localUsername } from '@/pages/auth/username-local';
import ActionsPost from './ActionsPost';

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

    const [isVisibleOptions, setIsVisibleOptions] = useState(false);
    const [isVisiblity, setIsVisiblity] = useState({ showComments: data.showComments, showLikes: data.showLikes });

    const handleSave = async () => {
        const postId = data.id;
        const isSaved = await savePostService.checkSaved(postId);
        if (isSaved) {
            savePostService.unSaved(postId);
            data.saved = false;
        } else {
            savePostService.saved(postId);
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
                {data.isEdit && <p className='isEdit df jce'>редактировано</p>}
                <HashtagText
                    onMentionClick={mention => alert(mention)}
                    data={data.description}
                    onHashtagClick={(hashTags: string) => alert(hashTags)}
                />
            </StyledPostsDescription>
            <ActionsPost data={data} isShowComments={isVisiblity.showComments} isShowLikes={isVisiblity.showLikes} />

            {data.imageUrl && <StyledPostImage src={data.imageUrl ? `${baseUrlAws}/${data.imageUrl}` : ''} />}

            <hr />

            <StyledPostComment>
                <PostComment disabled={isVisiblity.showComments} data={data} />
            </StyledPostComment>
        </StyledPostBackground>
    );
};

export default Post;

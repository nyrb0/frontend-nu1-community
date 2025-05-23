import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import { StyledPostImage, StyledPostsDescription, StyledPostBackground, StyledPostPaddingContent } from './posts.styled';
import { PulicationUserI } from '@/shared/types/publication.types';
import HashtagText from './HashTags';
import { useState } from 'react';
import 'dayjs/locale/ru';
import OptionsPost from './options/OptionsPost';
import { savePostService } from './service/savePost.service';
import PostBottomComment from './comment/PostBottomComment';
import { postService } from '../services/post.service';
import ActionsPost from './ActionsPost';
import HeaderUserPost from './HeaderUserPost';
import { ProviderComments } from './comment/context/useCommentsContext';

interface IPost {
    data: PulicationUserI;
    optionOwner: boolean;
}

const Post: React.FC<IPost> = ({ data: originalData, optionOwner }) => {
    const [data, setData] = useState<PulicationUserI>(originalData);
    const [isVisibleComments, setIsVisibleComments] = useState<boolean>(false);

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

    return (
        <StyledPostBackground>
            {isVisibleOptions && (
                <OptionsPost
                    onUpdate={updatePost}
                    isSaved={data.saved}
                    onSave={() => handleSave()}
                    isOwner={optionOwner && data.isOwner}
                    postId={data.id}
                    cancellation={() => setIsVisibleOptions(false)}
                    isVisible={isVisiblity}
                    setIsVisiblity={setIsVisiblity}
                />
            )}
            <StyledPostPaddingContent>
                <HeaderUserPost
                    data={data}
                    isVisibleOptions={isVisibleOptions}
                    onSetVisibleOptions={(state: boolean) => setIsVisibleOptions(state)}
                />
            </StyledPostPaddingContent>
            <hr />
            <StyledPostPaddingContent>
                <StyledPostsDescription>
                    {data.isEdit && <p className='isEdit df jce'>редактировано</p>}
                    <HashtagText data={data.description} />
                </StyledPostsDescription>

                <div className='df jcc'>{data.imageUrl && <StyledPostImage src={data.imageUrl ? `${baseUrlAws}/${data.imageUrl}` : ''} />}</div>
                <ActionsPost
                    data={data}
                    onComment={state => setIsVisibleComments(state)}
                    isShowComments={isVisiblity.showComments}
                    isShowLikes={isVisiblity.showLikes}
                />
            </StyledPostPaddingContent>

            <hr />

            <StyledPostPaddingContent style={{ marginTop: 20 }}>
                <ProviderComments>
                    <PostBottomComment
                        isVisibleComments={isVisibleComments}
                        setIsVisibleComments={state => setIsVisibleComments(state)}
                        disabled={isVisiblity.showComments}
                        data={data}
                    />
                </ProviderComments>
            </StyledPostPaddingContent>
        </StyledPostBackground>
    );
};

export default Post;

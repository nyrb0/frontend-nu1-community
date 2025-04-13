import { PulicationUserI } from '@/shared/types/publication.types';
import { StyledPostsDescription } from '../posts.styled';
import HashtagText from '../HashTags';
import ActionsPost from '../ActionsPost';
import HeaderUserPost from '../HeaderUserPost';

const CommentPost = ({ data }: { data: PulicationUserI }) => {
    return (
        <div style={{ position: 'relative' }}>
            <HeaderUserPost data={data} />
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

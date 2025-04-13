import { ICountStatisticsPost, PulicationUserI } from '@/shared/types/publication.types';
import { StyledPostsDescription } from '../posts.styled';
import HashtagText from '../HashTags';
import ActionsPost from '../ActionsPost';
import HeaderUserPost from '../HeaderUserPost';
import { useState } from 'react';

const CommentByPublication = ({ data }: { data: PulicationUserI }) => {
    // const [count, setCount] = useState<ICountStatisticsPost>({
    //     likes: data._count.likes,
    //     comments: data._count.comments,
    //     shares: 0,
    //     saves: data._count.saves,
    // });

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

export default CommentByPublication;

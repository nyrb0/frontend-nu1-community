import { PulicationUserI } from '@/shared/types/publication.types';
import { StyledPostImage, StyledPostsDescription } from '../posts.styled';
import HashtagText from '../HashTags';
import ActionsPost from '../ActionsPost';
import HeaderUserPost from '../HeaderUserPost';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';

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
                <div style={{ marginBottom: 10 }}>
                    <HashtagText
                        onMentionClick={mention => alert(mention)}
                        data={data.description}
                        onHashtagClick={(hashTags: string) => alert(hashTags)}
                    />
                </div>
                <div className='df jcc'>{data.imageUrl && <StyledPostImage src={data.imageUrl ? `${baseUrlAws}/${data.imageUrl}` : ''} />}</div>
            </StyledPostsDescription>
            <div>
                <ActionsPost data={data} isShowComments={data.showComments} isShowLikes={data.showLikes} />
            </div>
        </div>
    );
};

export default CommentByPublication;

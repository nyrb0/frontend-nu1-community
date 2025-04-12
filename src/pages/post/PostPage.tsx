import Post from '@/shared/post/Post';
import { postService } from '@/shared/services/post.service';
import { PulicationUserI } from '@/shared/types/publication.types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const [post, setPost] = useState<PulicationUserI>();
    const { postId } = useParams<{ postId: string }>();

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await postService.getPost(postId || '');
                setPost(response);
            } catch (err) {
                throw new Error(err as string);
            }
        };
        getPost();
    }, [postId]);
    console.log(post);

    return (
        <div className='df jcc' style={{ height: '100%' }}>
            <div style={{ width: '100%' }}>{post ? <Post optionOwner={false} data={post} /> : null}</div>
        </div>
    );
};

export default PostPage;

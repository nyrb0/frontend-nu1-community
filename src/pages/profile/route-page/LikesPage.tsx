import Post from '@/shared/post/Post';
import { postService } from '@/shared/services/post.service';
import { PulicationUserI } from '@/shared/types/publication.types';
import { useEffect, useState } from 'react';

const LikesPage = () => {
    const [likePosts, setLikePosts] = useState<PulicationUserI[]>([]);

    const getPosts = async () => {
        try {
            const response = await postService.getAllLikeUser();
            setLikePosts(response);
        } catch (err) {
            throw new Error(err as string);
        }
    };
    useEffect(() => {
        getPosts();
    }, []);
    return (
        <div className='df fdc'>
            {likePosts.map(post => (
                <Post data={post} />
            ))}
        </div>
    );
};

export default LikesPage;

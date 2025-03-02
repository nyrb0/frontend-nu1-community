import Post from '@/shared/post/Post';
import { postService } from '@/shared/services/post.service';
import { PulicationUserI } from '@/shared/types/publication.types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LikesPage = () => {
    const [likePosts, setLikePosts] = useState<PulicationUserI[]>([]);
    const { username } = useParams<{ username: string }>();
    if (!username) throw new Error('not param username');

    const getPosts = async () => {
        try {
            const response = await postService.getAllLikeUser(username);
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
                <Post data={post} optionOwner />
            ))}
        </div>
    );
};

export default LikesPage;

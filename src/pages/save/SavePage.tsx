import Post from '@/shared/post/Post';
import { postService } from '@/shared/services/post.service';
import { PulicationUserI } from '@/shared/types/publication.types';
import { useEffect, useState } from 'react';

const SavePage = () => {
    const [posts, setPosts] = useState<PulicationUserI[]>([]);
    const getPosts = async () => {
        try {
            const response = await postService.getAllSavedUser();

            setPosts(response);
        } catch (err) {
            throw new Error(err as string);
        }
    };
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className='df fdc'>
            {posts.map(post => (
                <Post data={post} key={post.id} />
            ))}
        </div>
    );
};

export default SavePage;

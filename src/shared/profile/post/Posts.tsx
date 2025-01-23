import { useEffect, useState } from 'react';
import Post from './Post';
import { postService } from '@/shared/services/post.service';
import { PulicationUserI } from '@/shared/types/publication.types';

const Posts = () => {
    const [posts, setPosts] = useState<PulicationUserI[]>([]);
    const getPosts = async () => {
        try {
            const response = await postService.getAllUser();
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
                <Post data={post} />
            ))}
        </div>
    );
};

export default Posts;

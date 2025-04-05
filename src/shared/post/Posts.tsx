import { useEffect, useState } from 'react';
import Post from './Post';
import { postService } from '@/shared/services/post.service';
import { PulicationUserI } from '@/shared/types/publication.types';
import { useParams } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState<PulicationUserI[]>([]);
    const { username } = useParams<{ username: string }>();

    const getPosts = async () => {
        try {
            const response = await postService.getAllUser(username || '');
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
                <Post data={post} key={post.id} optionOwner={true} />
            ))}
        </div>
    );
};

export default Posts;

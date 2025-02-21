import Post from '@/shared/post/Post';
import { postService } from '@/shared/services/post.service';
import { PulicationUserI } from '@/shared/types/publication.types';
import { useEffect, useState } from 'react';

const Recommended = () => {
    const [posts, setPosts] = useState<PulicationUserI[]>([]);
    const getPosts = async () => {
        try {
            const response = await postService.getAllPost(1, 10);

            setPosts(response);
        } catch (err) {
            throw new Error(err as string);
        }
    };
    useEffect(() => {
        getPosts();
    }, []);
    return (
        <>
            {posts.map(item => (
                <Post data={item} />
            ))}
        </>
    );
};

export default Recommended;

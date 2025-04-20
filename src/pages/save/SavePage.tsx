import Post from '@/shared/post/Post';
import { postService } from '@/shared/services/post.service';
import { PulicationUserI } from '@/shared/types/publication.types';
import { RootState } from '@/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const SavePage = () => {
    const [posts, setPosts] = useState<PulicationUserI[]>([]);

    const { user } = useSelector((state: RootState) => state.user);
    if (!user) throw 'user not found';
    const getPosts = async () => {
        try {
            const response = await postService.getAllSavedUser(user.username);

            setPosts(response);
        } catch (err) {
            throw new Error(err as string);
        }
    };
    useEffect(() => {
        getPosts();
    }, []);

    return <div className='df fdc'>{Boolean(posts.length) && posts.map(post => <Post data={post} key={post.id} optionOwner={false} />)}</div>;
};

export default SavePage;

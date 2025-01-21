import PostEdit from '@/shared/profile/post-editor/PostEdit';
import HeaderProfile from './header/HeaderProfile';
import FilterPosts from '@/shared/profile/FilterPosts';
import { useState } from 'react';
import { listsFilterPosts } from '@/shared/profile/ListFilter';
import Post from '@/shared/profile/post/Post';

const ProfilePage = () => {
    const [postsType, setPostsType] = useState(listsFilterPosts[0].name);
    return (
        <div style={{ height: 1200 }}>
            <div>
                <HeaderProfile />
            </div>
            <PostEdit />
            <div style={{ marginTop: 35 }}>
                <FilterPosts data={postsType} onChange={(value: string) => setPostsType(value)} />
            </div>
            <div>
                <Post />
            </div>
        </div>
    );
};

export default ProfilePage;

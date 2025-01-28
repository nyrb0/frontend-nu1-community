import PostEdit from '@/shared/profile/post-editor/PostEdit';
import HeaderProfile from './header/HeaderProfile';
import FilterPosts from '@/shared/profile/FilterPosts';
import { useState } from 'react';
import { listsFilterPosts } from '@/shared/profile/ListFilter';
import Posts from '@/shared/post/Posts';

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
                <Posts />
            </div>
        </div>
    );
};

export default ProfilePage;

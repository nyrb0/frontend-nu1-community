import PostEdit from '@/shared/profile/post-editor/PostEdit';
import HeaderProfile from './header/HeaderProfile';
import FilterPosts from '@/shared/profile/FilterPosts';
import { useState } from 'react';
import { listsFilterPosts } from '@/shared/profile/ListFilter';
import Posts from '@/shared/post/Posts';
import { authService } from '@/shared/services/auth.service';

const ProfilePage = () => {
    const [postsType, setPostsType] = useState(listsFilterPosts[0].name);

    const logout = () => {
        authService.logout();
    };

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
            <div>
                <button onClick={logout}>выйти</button>
            </div>
        </div>
    );
};

export default ProfilePage;

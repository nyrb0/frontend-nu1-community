import PostEdit from '@/shared/profile/post-editor/PostEdit';
import HeaderProfile from './header/HeaderProfile';
import FilterPosts from '@/shared/profile/FilterPosts';
import { useState } from 'react';
import { listsFilterPosts } from '@/shared/profile/ListFilter';

import { authService } from '@/shared/services/auth.service';
import { Outlet, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [postsType, setPostsType] = useState(listsFilterPosts[0].name);
    const navigate = useNavigate();

    const logout = () => {
        authService.logout();
        navigate('/auth/login');
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
                <Outlet />
            </div>
            <div>
                <button onClick={logout}>выйти</button>
            </div>
        </div>
    );
};

export default ProfilePage;

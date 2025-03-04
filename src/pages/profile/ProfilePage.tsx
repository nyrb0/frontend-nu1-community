import PostEdit from '@/shared/profile/post-editor/PostEdit';
import HeaderProfile from './header/HeaderProfile';
import FilterPosts from '@/shared/profile/FilterPosts';
import { useState } from 'react';
import { listsFilterPosts } from '@/shared/profile/ListFilter';

import { authService } from '@/shared/services/auth.service';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { postService } from '@/shared/services/post.service';

const ProfilePage = () => {
    const [postsType, setPostsType] = useState(listsFilterPosts[0].name);
    const navigate = useNavigate();
    const location = useLocation();
    const { username } = useParams<{ username: string }>();

    const logout = () => {
        authService.logout();
        navigate('/auth/login');
    };

    const { user } = useSelector((store: RootState) => store.user);
    const isIditProfileRoute = location.pathname.includes(`/${username}/edit`);
    const isOwner = user?.username === username;

    return (
        <div>
            <div>
                <HeaderProfile isOwner={isOwner} />
            </div>
            {isOwner && !isIditProfileRoute && (
                <>
                    <PostEdit />
                    <div style={{ marginTop: 35 }}>
                        <FilterPosts data={postsType} onChange={(value: string) => setPostsType(value)} />
                    </div>
                </>
            )}
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

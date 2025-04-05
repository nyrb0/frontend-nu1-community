import HeaderProfile from './header/HeaderProfile';

import { useState } from 'react';

import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
// import { postService } from '@/shared/services/post.service';
import IconClose from '@/shared/icons/IconClose';
import { StyledProfilePageClose } from './profilepage.styled';
import FilterPosts from './FilterPosts';
import PostEdit from '@/shared/post/post-editor/PostEdit';
import { listsFilterPosts } from './ListFilter';

const ProfilePage = () => {
    const [postsType, setPostsType] = useState(listsFilterPosts[0].name);
    const location = useLocation();
    const { username } = useParams<{ username: string }>();
    const { user } = useSelector((store: RootState) => store.user);
    const isIditProfileRoute = location.pathname.includes(`/${username}/edit`);
    const isOwner = user?.username === username;

    return (
        <div>
            <div>
                <HeaderProfile isOwner={isOwner} />
            </div>

            {!isOwner && !isIditProfileRoute && (
                <>
                    <PostEdit />
                    <div style={{ marginTop: 35 }}>
                        <FilterPosts data={postsType} onChange={(value: string) => setPostsType(value)} />
                    </div>
                </>
            )}
            {!isOwner && user?.private ? (
                <Outlet />
            ) : (
                <StyledProfilePageClose className='df jcc aic fdc'>
                    <p>Профиль закрыта</p>
                    <IconClose />
                    <p>Подпишитесь чтобы было вам доступно!</p>
                </StyledProfilePageClose>
            )}
        </div>
    );
};

export default ProfilePage;

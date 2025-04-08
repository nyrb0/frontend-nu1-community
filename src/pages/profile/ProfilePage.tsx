import HeaderProfile from './header/HeaderProfile';

import { useEffect, useState } from 'react';

import { Outlet, useLocation, useParams } from 'react-router-dom';
// import { postService } from '@/shared/services/post.service';
import IconClose from '@/shared/icons/IconClose';
import { StyledProfilePageClose } from './profilepage.styled';
import FilterPosts from './FilterPosts';
import PostEdit from '@/shared/post/post-editor/PostEdit';
import { listsFilterPosts } from './ListFilter';
import NotFoundUser from './NotFoundUser';
import { userService } from '@/shared/services/user.service';
import { IUser } from '@/shared/types/user.types';
import { localUsername } from '../auth/username-local';

const ProfilePage = () => {
    const [postsType, setPostsType] = useState(listsFilterPosts[0].name);
    const location = useLocation();
    const { username } = useParams<{ username: string }>();

    const [user, setUser] = useState<{ data: IUser | null; loading: boolean; error: null | string }>({ data: null, loading: true, error: null });
    const isIditProfileRoute = location.pathname.includes(`/${username}/edit`);
    const isOwner = localUsername.get() === username;

    if (!username) throw new Error('username не нашелся');

    useEffect(() => {
        (async () => {
            const response = await userService.getProfileUser(username);
            if (response.status === 200) setUser({ error: null, data: response.data, loading: false });
            else setUser({ loading: false, error: `Ошибка при получени пользователя ${username}`, data: null });
        })();
    }, []);

    if (user.loading) {
        return <p>Загрузка</p>;
    }

    if (!user.data) {
        return <NotFoundUser />;
    }

    return (
        <>
            <HeaderProfile isOwner={isOwner} />
            {isOwner && !isIditProfileRoute && (
                <>
                    <PostEdit />
                    <div style={{ marginTop: 35 }}>
                        <FilterPosts data={postsType} onChange={(value: string) => setPostsType(value)} />
                    </div>
                </>
            )}

            {user.data.private && !isOwner && !user.data.isFollowing ? (
                <StyledProfilePageClose className='df jcc aic fdc'>
                    <p>Профиль закрыта</p>
                    <IconClose />
                    <p>Подпишитесь чтобы было вам доступно!</p>
                </StyledProfilePageClose>
            ) : (
                <Outlet />
            )}

            {!user.data._count.publication && (
                <h2 className='df jcc' style={{ paddingTop: 40 }}>
                    Пока нет публикации
                </h2>
            )}
        </>
    );
};

export default ProfilePage;

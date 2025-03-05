import { Route, Routes, useLocation } from 'react-router-dom';
import { PAGES, ROUTES_NOTIFICATION, ROUTES_PROFILE, ROUTES_PROFILE_EDIT } from './router.const';
import SideBar from '../UI/Sidebar/SideBar';
import styles from '@/shared/styles/page/appRoutes.module.scss';
import ProfilePage from '@/pages/profile/ProfilePage';
import FriendsSidebar from '@/widgets/friends-sidebar/FriendsSidebar';
import Posts from '../post/Posts';
import LikesPage from '@/pages/profile/page/LikesPage';
import SavePage from '@/pages/save/SavePage';
import NotificationPage from '@/pages/notification';
import SettingsNotificationPage from '@/pages/notification/settings';
import HomePage from '@/pages/home/HomePage';
import PostPage from '@/pages/post/PostPage';
import ProfileEditPage from '@/pages/profile/page/EditPage.tsx/ProfileEditPage';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import DetailsPage from '@/pages/profile/page/EditPage.tsx/page/deteils/DetailsPage';

const AppRouter = () => {
    const route = useLocation();

    const { user } = useSelector((state: RootState) => state.user);

    const routes = ['/auth', `/profile/${user?.username}/edit`];
    const isRoutes = routes.every(state => !route.pathname.includes(state));

    const isAuthRoute = !route.pathname.includes(routes[0]);
    const isEditProfileRoute = !route.pathname.includes(routes[1]);
    return (
        <div className={`df ${isEditProfileRoute ? 'jcsb' : ''}`}>
            {isAuthRoute && (
                <div className={styles.sidebar1}>
                    <SideBar />
                </div>
            )}
            <div className={`${styles.routes} `} style={{ width: '100%' }}>
                {/* style={isAuthRoute ? { maxWidth: 696, width: '100%' } : {}} */}
                <Routes>
                    <Route path={PAGES.HOME} element={<HomePage />} />

                    {/* Уведомления */}
                    <Route path={PAGES.NOTIFICATION} element={<NotificationPage />} />
                    <Route path={ROUTES_NOTIFICATION.SETTINGS} element={<SettingsNotificationPage />} />
                    <Route path={PAGES.PROFILE} element={<ProfilePage />}>
                        <Route path={ROUTES_PROFILE.POSTS} element={<Posts />} />
                        <Route path={ROUTES_PROFILE.SAVES} element={<SavePage />} />
                        <Route path={ROUTES_PROFILE.VIDEOS} element />
                        <Route path={ROUTES_PROFILE.CLOSE} element />
                        <Route path={ROUTES_PROFILE.LIKES} element={<LikesPage />} />
                    </Route>

                    <Route path={ROUTES_PROFILE_EDIT.EDIT_PROFILE} element={<ProfileEditPage />}>
                        <Route path={ROUTES_PROFILE_EDIT.DETEILS} element={<DetailsPage />} />
                    </Route>
                    <Route path={PAGES.SAVES} element={<SavePage />} />
                    <Route path={PAGES.POST_PAGE} element={<PostPage />} />
                </Routes>
            </div>

            {isRoutes && (
                <div className={styles.sidebar2}>
                    <FriendsSidebar />
                </div>
            )}
        </div>
    );
};

export default AppRouter;

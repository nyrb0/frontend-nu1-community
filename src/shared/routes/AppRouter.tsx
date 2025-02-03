import { Route, Routes, useLocation } from 'react-router-dom';
import { PAGES, ROUTES_PROFILE } from './router.const';
import HomePage from '../../pages/HomePage';
import SideBar from '../UI/Sidebar/SideBar';
import styles from '@/shared/styles/page/appRoutes.module.scss';
import ProfilePage from '@/pages/profile/ProfilePage';
import FriendsSidebar from '@/widgets/friends-sidebar/FriendsSidebar';
import Posts from '../post/Posts';
import LikesPage from '@/pages/profile/route-page/LikesPage';

const AppRouter = () => {
    const route = useLocation();

    const isAuthRoute = !route.pathname.includes('/auth');
    return (
        <div className='df jcsb'>
            <div className={`${isAuthRoute ? styles.sidebar1 : ''}`}>{isAuthRoute && <SideBar />}</div>
            <div className={`${styles.routes} ${isAuthRoute ? styles.maxWidth : ''}`}>
                <Routes>
                    <Route path={PAGES.HOME} element={<HomePage />} />
                    <Route path={PAGES.PROFILE} element={<ProfilePage />}>
                        <Route path={ROUTES_PROFILE.POSTS} element={<Posts />} />
                        <Route path={ROUTES_PROFILE.SAVES} element />
                        <Route path={ROUTES_PROFILE.VIDEOS} element />
                        <Route path={ROUTES_PROFILE.CLOSE} element />
                        <Route path={ROUTES_PROFILE.LIKES} element={<LikesPage />} />
                    </Route>
                </Routes>
            </div>
            <div className={`${isAuthRoute ? styles.sidebar2 : ''}`}>{isAuthRoute && <FriendsSidebar />}</div>
        </div>
    );
};

export default AppRouter;

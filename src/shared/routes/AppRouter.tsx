import { Route, Routes, useLocation } from 'react-router-dom';
import { PAGES } from './router.const';
import HomePage from '../../pages/HomePage';
import SideBar from '../UI/Sidebar/SideBar';
import styles from '@/shared/styles/page/appRoutes.module.scss';
import ProfilePage from '@/pages/profile/ProfilePage';
import FriendsSidebar from '@/widgets/friends-sidebar/FriendsSidebar';

const AppRouter = () => {
    const route = useLocation();

    const isAuthRoute = !route.pathname.includes('/auth');
    return (
        <div className='df jcsb'>
            <div className={`${isAuthRoute ? styles.sidebar1 : ''}`}>{isAuthRoute && <SideBar />}</div>
            <div className={`${styles.routes} ${isAuthRoute ? styles.maxWidth : ''}`}>
                <Routes>
                    <Route path={PAGES.HOME} element={<HomePage />} />
                    <Route path={PAGES.PROFILE} element={<ProfilePage />} />
                </Routes>
            </div>
            <div className={`${isAuthRoute ? styles.sidebar2 : ''}`}>{isAuthRoute && <FriendsSidebar />}</div>
        </div>
    );
};

export default AppRouter;

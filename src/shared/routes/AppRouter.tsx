import { Route, Routes, useLocation } from 'react-router-dom';
import { PAGES } from './router.const';
import HomePage from '../../pages/HomePage';
import LogIn from '../../pages/auth/LogIn';
import Regis from '../../pages/auth/Regis';
import AuthPage from '@/pages/auth/AuthPage';
import SideBar from '../UI/Sidebar/SideBar';
import styles from '@/shared/styles/page/appRoutes.module.scss';
import ProfilePage from '@/pages/profile/ProfilePage';
import FriendsSidebar from '@/widgets/friends-sidebar/FriendsSidebar';

const AppRouter = () => {
    const route = useLocation();
    return (
        <div className='df jcsb'>
            <div className={styles.sidebar1}>{!route.pathname.includes('/auth') && <SideBar />}</div>
            <div className={styles.routes}>
                <Routes>
                    <Route path={PAGES.HOME} element={<HomePage />} />
                    <Route path={PAGES.PROFILE} element={<ProfilePage />} />
                    <Route path={PAGES.AUTH} element={<AuthPage />}>
                        <Route path={PAGES.LOGIN} element={<LogIn />} />
                        <Route path={PAGES.REGIS} element={<Regis />} />
                    </Route>
                </Routes>
            </div>
            <div className={styles.sidebar2}>{!route.pathname.includes('/auth') && <FriendsSidebar />}</div>
        </div>
    );
};

export default AppRouter;

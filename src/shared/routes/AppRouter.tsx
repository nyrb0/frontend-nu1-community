import { Route, Routes } from 'react-router-dom';
import { PAGES } from './router.const';
import HomePage from '../../pages/HomePage';
import LogIn from '../../pages/auth/LogIn';
import Regis from '../../pages/auth/Regis';
import AuthPage from '@/pages/auth/AuthPage';
import SideBar from '../UI/Sidebar/SideBar';
import styles from '@/shared/styles/page/appRoutes.module.scss';
import ProfilePage from '@/pages/profile/ProfilePage';

const AppRouter = () => {
    return (
        <div className='df'>
            <div className={styles.sidebar}>
                <SideBar />
            </div>
            <Routes>
                <Route path={PAGES.HOME} element={<HomePage />} />
                <Route path={PAGES.PROFILE} element={<ProfilePage />} />
                <Route path={PAGES.AUTH} element={<AuthPage />}>
                    <Route path={PAGES.LOGIN} element={<LogIn />} />
                    <Route path={PAGES.REGIS} element={<Regis />} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;

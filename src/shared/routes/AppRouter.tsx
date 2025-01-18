import { Route, Routes } from 'react-router-dom';
import { PAGES } from './router.const';
import HomePage from '../../pages/HomePage';
import LogIn from '../../pages/auth/LogIn';
import Regis from '../../pages/auth/Regis';
import AuthPage from '@/pages/auth/AuthPage';
import SideBar from '../UI/Sidebar/SideBar';
import styles from '@/shared/styles/page/appRoutes.module.scss';

const AppRouter = () => {
    return (
        <>
            <div className={styles.sidebar}>
                <SideBar />
            </div>
            <Routes>
                <Route path={PAGES.HOME} element={<HomePage />} />
                <Route path={PAGES.AUTH} element={<AuthPage />}>
                    <Route path={PAGES.LOGIN} element={<LogIn />} />
                    <Route path={PAGES.REGIS} element={<Regis />} />
                </Route>
            </Routes>
        </>
    );
};

export default AppRouter;

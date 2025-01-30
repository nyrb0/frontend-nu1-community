import { Route, Routes } from 'react-router-dom';
import { PAGES } from './router.const';
import AuthPage from '@/pages/auth/AuthPage';
import LogIn from '@/pages/auth/LogIn';
import Regis from '@/pages/auth/Regis';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path={PAGES.AUTH} element={<AuthPage />}>
                <Route path={PAGES.LOGIN} element={<LogIn />} />
                <Route path={PAGES.REGIS} element={<Regis />} />
            </Route>
        </Routes>
    );
};

export default AuthRoutes;

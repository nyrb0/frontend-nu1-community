import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppRouter from './shared/routes/AppRouter';
import { authService } from './shared/services/auth.service';
import AuthRoutes from './shared/routes/AuthRoutes';
import Cookies from 'js-cookie';
import { EnumTokens } from './shared/services/auth-token.service';
import { fetchUser } from './shared/redux/userSlice';
import { useAppDispatch } from './shared/hooks/redux';
import { localUsername } from './pages/auth/username-local';

function App() {
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const navigate = useNavigate();
    const route = useLocation();
    const dispatch = useAppDispatch();

    const checkAuth = async () => {
        const isAuth = await authService.isAuth();
        const cookie = Cookies.get(EnumTokens.ACCESS_TOKEN) || '';
        if (!isAuth || cookie.length <= 0 || !localUsername.get()) {
            navigate('/auth/login');
        } else {
            const isAuthRoute = await route.pathname.includes('/auth');
            if (isAuthRoute) navigate('/');
            setIsAuthChecked(true);
        }
    };

    // надо изменить!!!!!
    useEffect(() => {
        checkAuth();
        dispatch(fetchUser());
    }, []);

    if (!isAuthChecked) {
        return <AuthRoutes />;
    }

    return (
        <div style={{ position: 'relative' }}>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: -2,
                    backgroundImage: `url(https://99px.ru/sstorage/53/2018/01/tmb_217765_738343.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: -1,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                }}
            />

            <AppRouter />
        </div>
    );
}

export default App;

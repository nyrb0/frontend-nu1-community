import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppRouter from './shared/routes/AppRouter';
import { authService } from './shared/services/auth.service';
import AuthRoutes from './shared/routes/AuthRoutes';
import Cookies from 'js-cookie';
import { EnumTokens } from './shared/services/auth-token.service';

function App() {
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const navigate = useNavigate();
    const route = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            const isAuth = await authService.isAuth();
            const cookie = Cookies.get(EnumTokens.ACCESS_TOKEN) || '';
            if (!isAuth || cookie.length <= 0) {
                navigate('/auth/login');
            } else {
                const isAuthRoute = await route.pathname.includes('/auth');
                if (isAuthRoute) navigate('/');
                setIsAuthChecked(true);
            }
        };

        checkAuth();
    }, []);

    if (!isAuthChecked) {
        return <AuthRoutes />;
    }

    return <AppRouter />;
}

export default App;

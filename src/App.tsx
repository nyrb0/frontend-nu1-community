import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRouter from './shared/routes/AppRouter';
import { authService } from './shared/services/auth.service';
import AuthRoutes from './shared/routes/AuthRoutes';
import Cookies from 'js-cookie';
import { EnumTokens } from './shared/services/auth-token.service';

function App() {
    const [isAuthChecked, setIsAuthChecked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const isAuth = await authService.isAuth();
            const cookie = Cookies.get(EnumTokens.ACCESS_TOKEN) || '';
            if (!isAuth || cookie.length <= 0) {
                navigate('/auth/login');
            } else {
                setIsAuthChecked(true);
            }
        };

        checkAuth();
    }, [navigate]);

    if (!isAuthChecked) {
        return <AuthRoutes />;
    }

    return <AppRouter />;
}

export default App;

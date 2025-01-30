import { Outlet } from 'react-router-dom';
import style from './auth.module.scss';
import Nu1 from '@/shared/logo-type/Nu1';

const AuthPage = () => {
    return (
        <div className='df aic jcsb'>
            <div className={`${style.left} df jcc aic`}>
                <Nu1 />
            </div>
            <div className={style.right}>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthPage;

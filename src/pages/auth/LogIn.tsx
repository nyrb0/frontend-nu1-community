import AuthInput from './ui/input';
import styles from './auth.module.scss';
import { COLORS } from '@/shared/constants/colors';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IAuth } from '@/shared/types/auth.types';
import { authService } from '@/shared/services/auth.service';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';

const LogIn = () => {
    const { handleSubmit, control } = useForm<IAuth>();

    const toRoute = useNavigate();

    const loginHandler: SubmitHandler<IAuth> = async data => {
        try {
            const response = await authService.auth('login', data);
            if (response.status === 200) {
                toRoute('/');
                location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className={`${styles.auth}`}>
            <div className={`df jcc`}>
                <div>
                    <h1>Войти</h1>
                    <form onSubmit={handleSubmit(loginHandler)}>
                        <div className={styles.input}>
                            <Controller
                                name='username'
                                defaultValue=''
                                control={control}
                                rules={{ required: 'Имя пользователя' }}
                                render={({ field }) => <AuthInput label='Имя пользователя' {...field} />}
                            />
                        </div>
                        <div className={styles.input}>
                            <Controller
                                name='password'
                                defaultValue=''
                                control={control}
                                rules={{ required: 'ПАролььь' }}
                                render={({ field }) => <AuthInput label={'Пароль'} type='password' {...field} />}
                            />
                        </div>
                        <div className={`${styles.forgetPassword} df jce`}>Забыли пароль?</div>
                        <div className={styles.button}>
                            <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} type='submit'>
                                Войти
                            </PrimaryButton>
                        </div>
                    </form>
                    <div className={styles.isHaveAcc}>
                        У вас нету аккаунта?
                        <span>
                            {' '}
                            <Link to={'/auth/regis'}>Создать</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;

import AuthInput from './ui/input';
import styles from './auth.module.scss';
import { COLORS } from '@/shared/constants/colors';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuth } from '@/shared/types/auth.types';
import { authService } from '@/shared/services/auth.service';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';

const LogIn = () => {
    const {
        handleSubmit,
        setError,
        register,
        formState: { errors },
    } = useForm<IAuth>();

    const toRoute = useNavigate();

    const loginHandler: SubmitHandler<IAuth> = async data => {
        try {
            const response = await authService.auth('login', data);
            if (response.status === 200) {
                toRoute('/');
                localStorage.setItem('username', data.username);
                location.reload();
            }
        } catch (err) {
            setError('root', { message: 'Неправильный пароль или логин' });
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
                            <AuthInput
                                label={'Имя пользователя'}
                                error={errors.username?.message}
                                {...register('username', {
                                    required: 'Поле не должно быть пустым',
                                    minLength: { value: 3, message: 'Минимум должен быть 3 символов' },
                                    maxLength: { value: 30, message: 'Максимум должен быть 30 символов' },
                                    pattern: {
                                        value: /^[A-Za-z0-9_]+$/,
                                        message: 'Имя пользователя должно содержать только английские буквы, цифры и символ "_"',
                                    },
                                })}
                            />
                        </div>
                        <div className={styles.input}>
                            <AuthInput
                                label={'Повторите пароль'}
                                type='password'
                                error={errors.password?.message}
                                {...register('password', {
                                    required: 'Поле не должно быть пустым',
                                })}
                            />
                        </div>
                        <p className={styles.error}>{errors.root?.message}</p>
                        <div className={`${styles.forgetPassword} df jce`}>Забыли пароль?</div>
                        <div className={styles.button}>
                            <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} type='submit'>
                                Войти
                            </PrimaryButton>
                        </div>
                    </form>
                    <div className={styles.isHaveAcc}>
                        У вас нету аккаунта?{' '}
                        <span>
                            <Link to={'/auth/regis'}>Создать</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;

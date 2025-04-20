import AuthInput from './ui/input';
import styles from './auth.module.scss';

import { COLORS } from '@/shared/constants/colors';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisAuth } from '@/shared/types/auth.types';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { authService } from '@/shared/services/auth.service';
import { useState } from 'react';
import RegisSpecification from './RegisSpecification';
import Block from './ui/Block';

interface IFormData extends IRegisAuth {
    repeatPassword: string;
}

const Regis = () => {
    const {
        handleSubmit,
        register,
        setError,
        clearErrors,
        formState: { errors },
        watch,
    } = useForm<IFormData>();

    const [isVisibilitySpecification, setIsVisibilitySpecification] = useState(false);
    const [roles, setRoles] = useState<{ positionRole: string; speciality: string }>({ positionRole: '', speciality: '' });
    console.log(roles, 'njffbhbvhf');

    const password = watch('password');

    const regisHandler: SubmitHandler<IFormData> = async data => {
        try {
            clearErrors();
            // проверяем полю positionRole, speciality
            if (!roles.positionRole || !roles.speciality) {
                setError('speciality', { type: 'manual', message: 'Выберите специальность' });
                setError('positionRole', { type: 'manual', message: 'Выберите позицию' });
                return;
            }
            data = { ...data, speciality: roles.speciality, positionRole: roles.positionRole };
            const { repeatPassword, ...body } = data;
            if (data) {
                const response = await authService.auth('regis', body);
                if (response.status === 200) {
                    localStorage.setItem('username', data.username);
                    window.location.href = '/';
                }
            }
        } catch (err) {
            console.log('Ошибка при регистрации', err);
        }
    };
    return (
        <div className={`${styles.auth}`}>
            <div className={`${styles.right} df jcc`}>
                {!isVisibilitySpecification ? (
                    <div>
                        <h1>Регистрация</h1>

                        <form onSubmit={handleSubmit(regisHandler)}>
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
                                    label={'Email'}
                                    error={errors.email?.message}
                                    {...register('email', {
                                        required: 'Поле не должно быть пустым',
                                        pattern: {
                                            value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                            message: 'Некорректный email',
                                        },
                                    })}
                                />
                            </div>
                            <div className={styles.input}>
                                <AuthInput
                                    label='Пароль'
                                    type='password'
                                    error={errors.password?.message}
                                    {...register('password', {
                                        required: 'Поле не должно быть пустым',
                                        minLength: { value: 6, message: 'Минимальная длина пароля — 6 символов' },
                                        validate: {
                                            isEnglishOnly: value =>
                                                /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(value) ||
                                                'Пароль должен содержать только латинские буквы',
                                            hasLowercase: value =>
                                                /[a-z]/.test(value) || 'Пароль должен содержать хотя бы одну строчную латинского буквы ',
                                            hasNumber: value => /\d/.test(value) || 'Пароль должен содержать хотя бы одну цифру',
                                            hasSpecialChar: value =>
                                                /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value) ||
                                                'Пароль должен содержать хотя бы один специальный символ',
                                        },
                                    })}
                                />
                            </div>
                            <div className={styles.input}>
                                <AuthInput
                                    label={'Повторите пароль'}
                                    type='password'
                                    error={errors.repeatPassword?.message}
                                    {...register('repeatPassword', {
                                        required: 'Поле не должно быть пустым',
                                        validate: value => value === password || 'Пороли не совподают',
                                    })}
                                />
                            </div>
                            <div className={styles.input}>
                                <Block error={errors.speciality?.message} onClick={() => setIsVisibilitySpecification(true)}>
                                    {roles.speciality ? roles.speciality : 'Ваша специальность'}
                                </Block>
                            </div>
                            <div className={styles.input}>
                                <Block error={errors.positionRole?.message} style={{ scale: 1 }} onClick={() => setIsVisibilitySpecification(true)}>
                                    {roles.positionRole ? roles.positionRole : 'Ваша позиция'}
                                </Block>
                            </div>

                            <div className={styles.button}>
                                <PrimaryButton type={'submit'} color={COLORS.WHITE} background={COLORS.NORMAL}>
                                    Войти
                                </PrimaryButton>
                            </div>
                        </form>

                        <div className={styles.isHaveAcc}>
                            У вас уже есть аккаунт?{' '}
                            <span>
                                <Link to={'/auth/login'}>Войти</Link>
                            </span>
                        </div>
                    </div>
                ) : (
                    // выбор специальность user
                    <RegisSpecification
                        onChangePosition={data => setRoles(prev => ({ ...prev, positionRole: data }))}
                        onChangeSpecification={data => setRoles(prev => ({ ...prev, speciality: data }))}
                        onClose={() => setIsVisibilitySpecification(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default Regis;

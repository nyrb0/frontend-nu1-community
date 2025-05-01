import AuthInput from '../../shared/UI/input/SecondaryInput';
import styles from './auth.module.scss';
import { COLORS } from '@/shared/constants/colors';
import { Link } from 'react-router-dom';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import RegisSpecification from './RegisSpecification';
import Block from './ui/Block';
import { ROLES } from '@/shared/types/roles';
import { motion } from 'framer-motion';
import { useRegis } from './hooks/useRegis';

const Regis = () => {
    const {
        roles,
        setRoles,
        isVisibilitySpecification,
        clearErrors,
        setIsVisibilitySpecification,
        handlerRegister,
        register,
        handleSubmit,
        errors,
        password,
    } = useRegis();
    return (
        <div className={`${styles.auth}`}>
            <div className={`${styles.right} df jcc`}>
                {!isVisibilitySpecification ? (
                    <div>
                        <h1>Регистрация</h1>

                        <form onSubmit={handleSubmit(handlerRegister)}>
                            <div className={styles.input}>
                                <AuthInput
                                    placeholder='придумайте уникальный nickName'
                                    label={'Никнэйм'}
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
                                    placeholder='ваш email'
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
                                    placeholder='придумайте пароль'
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
                                    placeholder='повторите пароль'
                                    label={'Повторите пароль'}
                                    type='password'
                                    error={errors.repeatPassword?.message}
                                    {...register('repeatPassword', {
                                        required: 'Поле не должно быть пустым',
                                        validate: value => value === password || 'Пороли не совподают',
                                    })}
                                />
                            </div>
                            {roles.role === ROLES.USER && (
                                <motion.div
                                    initial={{ opacity: 0, transform: 'translateY(-25px)' }}
                                    animate={{ opacity: 1, transform: 'translateY(0)' }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className={styles.input}>
                                        <Block error={errors.speciality?.message} onClick={() => setIsVisibilitySpecification(true)}>
                                            {roles.speciality ? roles.speciality : 'Ваша специальность'}
                                        </Block>
                                    </div>
                                    <div className={styles.input}>
                                        <Block
                                            error={errors.positionRole?.message}
                                            style={{ scale: 1 }}
                                            onClick={() => setIsVisibilitySpecification(true)}
                                        >
                                            {roles.positionRole ? roles.positionRole : 'Ваша позиция'}
                                        </Block>
                                    </div>
                                </motion.div>
                            )}
                            <div className={styles.input} style={{ marginTop: 20 }}>
                                <PrimaryButton
                                    type={'button'}
                                    onClick={() => setRoles(prev => ({ ...prev, role: ROLES.USER }))}
                                    radius='5px'
                                    style={{ height: 40 }}
                                    color={COLORS.WHITE}
                                    background={ROLES.USER === roles.role ? COLORS.NORMAL : COLORS.BACKGROUND_1}
                                >
                                    Пользователь
                                </PrimaryButton>
                            </div>
                            <div className={styles.input}>
                                <PrimaryButton
                                    type={'button'}
                                    onClick={() =>
                                        setRoles(prev => {
                                            clearErrors();
                                            setRoles(prev => ({ ...prev, speciality: null, positionRole: null }));
                                            return { ...prev, role: ROLES.COMPANY };
                                        })
                                    }
                                    radius='5px'
                                    style={{ height: 40 }}
                                    color={COLORS.WHITE}
                                    background={ROLES.COMPANY === roles.role ? COLORS.NORMAL : COLORS.BACKGROUND_1}
                                >
                                    Организация
                                </PrimaryButton>
                            </div>

                            <div className={styles.button}>
                                <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL}>
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

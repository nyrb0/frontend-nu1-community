import styles from './ProfileEditPage.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Outlet } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import MainEditInfo from './components/MainEditInfo';
import { EditUserProvider, useEditUserContext } from './context/EditUserContext';
import Additionally from './components/Additionally';
import { userService } from '@/shared/services/user.service';
import { IUser } from '@/shared/types/user.types';
import { useNavigate } from 'react-router-dom';

const Page = () => {
    const { data } = useEditUserContext();
    const { user } = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    const comparison = (a: Record<string, any>, b: Record<string, any>) => {
        return Object.keys(a).reduce((acc, key) => {
            if (key === 'avatarFile') {
                acc['avatarUrl'] = acc['avatarUrl'] = a[key];
            } else if (a[key] !== b[key]) acc[key] = a[key];
            return acc;
        }, {} as Record<string, any>);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data && user) {
            const result = comparison(data, user);
            console.log(result);
            const response = await userService.updateUser(user.id, result as IUser);
            if (response.status === 200) {
                navigate(-1);
            }
        }
    };

    return (
        <div className={styles.page}>
            <h2>Редактирование профиля</h2>
            <form onSubmit={onSubmit}>
                <MainEditInfo />
                <Additionally />
                <div className={`${styles.isSave} df jce`}>
                    <PrimaryButton type='submit' radius='34px' background={'transparent'}>
                        Отмена
                    </PrimaryButton>

                    <PrimaryButton radius='34px' type='submit'>
                        Сохранить
                    </PrimaryButton>
                </div>
            </form>

            <div>
                <Outlet />
            </div>
        </div>
    );
};

// Редактирование профиля
const ProfileEditPage = () => {
    return (
        <EditUserProvider>
            <Page />
        </EditUserProvider>
    );
};

export default ProfileEditPage;

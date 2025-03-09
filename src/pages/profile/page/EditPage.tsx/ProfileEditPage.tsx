import styles from './ProfileEditPage.module.scss';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import { Outlet } from 'react-router-dom';
import FieldsInput from '@/shared/post/UI/input/FieldsInput';
import 'react-phone-input-2/lib/style.css';
import SettingsHeading from '@/shared/hending/SettingsHeading';
import FileDownloader from '@/shared/UI/file-ownloader/FileDownloader';
import AvatarProfile from '@/shared/profile/AvatarProfile';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { IUser } from '@/shared/types/user.types';
import MainEditInfo from './components/MainEditInfo';
import { EditUserProvider } from './context/EditUserContext';

// Редактирование профиля
const ProfileEditPage = () => {
    return (
        <EditUserProvider>
            <div className={styles.page}>
                <h2>Редактирование профиля</h2>
                <MainEditInfo />

                <div className={`${styles.isSave} df jce`}>
                    <PrimaryButton radius='34px' background={'transparent'}>
                        Отмена
                    </PrimaryButton>

                    <PrimaryButton radius='34px'>Сохранить</PrimaryButton>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </EditUserProvider>
    );
};

export default ProfileEditPage;

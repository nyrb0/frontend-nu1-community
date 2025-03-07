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

// Редактирование профиля
const ProfileEditPage = () => {
    const { user } = useSelector((state: RootState) => state.user);

    const [data, setData] = useState<IUser>(user || ({} as IUser));
    const handleSubmit = async () => {};

    const changeHanldler = (key: keyof IUser, value: string) => {
        if (data) setData(prev => ({ ...prev, [key]: value }));
    };

    useEffect(() => {
        if (user) {
            setData(user);
        }
    }, [user]);
    return (
        <div className={styles.page}>
            <h2>Редактирование профиля</h2>
            <div className={`${styles.edit} df jcsb`}>
                <SettingsHeading heading='Основная информация' description='Здесь вы можете изменить настройки своей личной информации.' />
                <div className={styles.left}>
                    <div className={styles.column}>
                        <FieldsInput
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHanldler('name', e.target.value)}
                            value={data?.name}
                            width={350}
                            placeholder='Имя'
                            type='name'
                            field='Полное имя'
                        />
                        <FieldsInput
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHanldler('email', e.target.value)}
                            value={data?.email}
                            width={350}
                            type='email'
                            placeholder='Фамилия'
                            field='Email'
                        />
                    </div>
                    <div className={styles.column}>
                        <FieldsInput
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHanldler('tel', e.target.value)}
                            value={data?.tel}
                            width={350}
                            type='tel'
                            field='Номер'
                        />
                        <FieldsInput value={data?.username} width={350} type='name' placeholder='Имя пользовотеля' field='Имя пользовотеля' />
                    </div>

                    <div className={`${styles.files} df `}>
                        <AvatarProfile url={data.avatarUrl} />
                        <FileDownloader maxSize={2} />
                    </div>
                </div>
            </div>
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
    );
};

export default ProfileEditPage;

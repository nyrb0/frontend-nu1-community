import SettingsHeading from '@/shared/hending/SettingsHeading';
import styles from '../ProfileEditPage.module.scss';
import FieldsInput from '@/shared/post/UI/input/FieldsInput';
import AvatarProfile from '@/shared/profile/AvatarProfile';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IUpdateUser, IUser } from '@/shared/types/user.types';
import FileDownloader from '@/shared/UI/file-ownloader/FileDownloader';
import { useEditContext } from '../context/EditUserContext';

const MainEditInfo = () => {
    const { user } = useSelector((state: RootState) => state.user);

    const [data, setData] = useEditContext();

    const handleSubmit = async () => {};

    const handleChange = (key: keyof IUpdateUser, value: string) => {
        if (setData && typeof setData === 'function') {
            setData({ ...user, [key]: value });
        }
    };
    if (!data) return;

    return (
        <div className={`${styles.edit} df jcsb`}>
            <SettingsHeading heading='Основная информация' description='Здесь вы можете изменить настройки своей личной информации.' />
            <div className={styles.left}>
                <div className={styles.column}>
                    <FieldsInput
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHanldler('name', e.target.value)}
                        value={data?.name}
                        width={350}
                        placeholder='Имя'
                        type='text'
                        field='Полное имя'
                    />
                    <FieldsInput
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHanldler('email', e.target.value)}
                        value={data.email}
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
                    <FieldsInput value={data?.username} width={350} type='text' placeholder='Имя пользовотеля' field='Имя пользовотеля' />
                </div>

                <div className={`${styles.files} df `}>
                    <AvatarProfile url={data.avatarUrl} />
                    <FileDownloader maxSize={2} />
                </div>
            </div>
        </div>
    );
};

export default MainEditInfo;

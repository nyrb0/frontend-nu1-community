import SettingsHeading from '@/shared/UI/hending/SettingsHeading';
import styles from '../ProfileEditPage.module.scss';
import FieldsInput from '@/shared/post/UI/input/FieldsInput';
import AvatarProfile from '@/shared/UI/AvatarProfile';
import { IUser } from '@/shared/types/user.types';
import FileDownloader from '@/shared/UI/file-ownloader/FileDownloader';
import { useEditUserContext } from '../context/EditUserContext';
import { Controller, useForm } from 'react-hook-form';

const MainEditInfo = () => {
    const { data, setData } = useEditUserContext();

    const handleChange = (key: keyof IUser, value: string) => {
        setData(prev => (prev ? { ...prev, [key]: value } : null));
    };

    const {
        control,
        formState: { errors },
    } = useForm({ mode: 'all' });

    if (!data) return null;

    return (
        <section className={`${styles.edit} df jcsb`}>
            <SettingsHeading heading='Основная информация' description='Здесь вы можете изменить настройки своей личной информации.' />
            <div className={styles.left}>
                <div className={styles.column}>
                    <Controller
                        name='name'
                        control={control}
                        defaultValue={data.name || ''}
                        rules={{
                            required: 'Имя обязательно',
                            minLength: { value: 2, message: 'Минимум 2 символа' },
                            maxLength: { value: 20, message: 'Максимум 20 символов' },
                            pattern: { value: /^[A-Za-zА-Яа-яЁё\s]+$/, message: 'Только буквы' },
                        }}
                        render={({ field }) => (
                            <FieldsInput
                                {...field}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    field.onChange(e);
                                    handleChange('name', e.target.value);
                                }}
                                width={350}
                                placeholder='Имя'
                                type='text'
                                field='Полное имя'
                                errors={errors.name?.message as string}
                            />
                        )}
                    />
                    <Controller
                        name='email'
                        control={control}
                        defaultValue={data.email || ''}
                        rules={{
                            required: 'Email обязателен',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'Неверный формат email',
                            },
                        }}
                        render={({ field }) => (
                            <FieldsInput
                                {...field}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    field.onChange(e);
                                    handleChange('email', e.target.value);
                                }}
                                width={350}
                                placeholder='Email'
                                type='email'
                                field='Email'
                                errors={errors.email?.message as string}
                            />
                        )}
                    />
                </div>

                <div className={styles.column}>
                    <Controller
                        name='lastName'
                        control={control}
                        defaultValue={data.lastName || ''}
                        rules={{}}
                        render={({ field }) => (
                            <FieldsInput
                                {...field}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    field.onChange(e);
                                    handleChange('lastName', e.target.value);
                                }}
                                width={350}
                                placeholder='Фамилия'
                                type='text'
                                field='Полная фамия'
                                errors={errors.lastName?.message as string}
                            />
                        )}
                    />
                    {/* <Controller
                        name='tel'
                        control={control}
                        defaultValue={data.tel}
                        rules={{
                            required: 'Номер телефона обязателен',
                            pattern: {
                                value: /^[0-9]{10,15}$/,
                                message: 'Неверный формат номера',
                            },
                        }}
                        render={({ field }) => (
                            <FieldsInput
                                {...field}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    field.onChange(e);
                                    handleChange('tel', e.target.value);
                                }}
                                width={350}
                                type='tel'
                                field='Номер'
                                errors={errors.tel?.message as string}
                            />
                        )}
                    /> */}
                    <FieldsInput
                        value={data?.username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('username', e.target.value)}
                        width={350}
                        type='text'
                        placeholder='Имя пользовотеля'
                        field='Имя пользовотеля'
                    />
                </div>

                <div className={`${styles.files} df`}>
                    <AvatarProfile selectedUrl={data.avatarFile && URL.createObjectURL(data.avatarFile)} url={data.avatarUrl} />
                    <FileDownloader maxSize={2} />
                </div>
            </div>
        </section>
    );
};

export default MainEditInfo;

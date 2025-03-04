import TextAreaPost from '@/shared/profile/UI/TextAreaPost';

import styles from './ProfileEditPage.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';
import { Outlet } from 'react-router-dom';

// Редактирование профиля
const ProfileEditPage = () => {
    const { user } = useSelector((state: RootState) => state.user);
    const [data, setData] = useState({ ...user, description: '' });

    const handleSubmit = async () => {};

    return (
        <div className={styles.page}>
            <h2>Редактирование профиля</h2>

            {/* <form className={styles.bio} onSubmit={handleSubmit}>
                <TextAreaPost
                    style={{ backgroundColor: 'var(--background-color3)' }}
                    placeholder={'Описание...'}
                    value={data.description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData(prev => ({ ...prev, description: e.target.value }))}
                />
                <div className={`${styles.btns} df jce`}>
                    <span className='df'>
                        <PrimaryButton color={COLORS.WHITE} radius='18px' background={COLORS.TRANSPARENT}>
                            Позже
                        </PrimaryButton>
                        <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} radius={'5px'} type='submit'>
                            Опубликавать
                        </PrimaryButton>
                    </span>
                </div>
            </form> */}

            <Outlet />
        </div>
    );
};

export default ProfileEditPage;

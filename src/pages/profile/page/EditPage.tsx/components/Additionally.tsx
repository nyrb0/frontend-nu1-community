import SettingsHeading from '@/shared/hending/SettingsHeading';
import styles from '../ProfileEditPage.module.scss';
import PublicAndPrivateUI from '@/pages/settings/page/deteils/UI/PublicAndPrivateUI';
import RegulationTextArea from '@/pages/settings/page/deteils/UI/RegulationTextArea';
import { useEditUserContext } from '../context/EditUserContext';
import { IUpdateUser } from '@/shared/types/user.types';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const Additionally = () => {
    const { data, setData } = useEditUserContext();

    const { user } = useSelector((state: RootState) => state.user);
    const handleChange = (key: keyof IUpdateUser, value: string | boolean) => {
        setData({ ...user, [key]: value });
    };

    if (!data) return;
    return (
        <section className={`${styles.add} df jcsb`}>
            <SettingsHeading heading='Дополнительная информация' description='Здесь вы можете изменить настройки своей личной информации.' />
            <div className={`${styles.left} df jce`}>
                <div>
                    <section className='df jcsb'>
                        {/* <SettingsHeading
                    heading={'Public Profile'}
                    isVisibleAnswer={false}
                    description='Это основной профиль, который будет виден всем.'
                    more
                /> */}
                        <PublicAndPrivateUI data={data.private} onChange={(value: boolean) => handleChange('private', value)} />
                    </section>
                    <hr />
                    <section className='df jcsb'>
                        {/* <SettingsHeading
                    isVisibleAnswer={false}
                    heading={'Описание'}
                    description={'Это будет ваша основная история. Держите это очень, очень долго'}
                    more={false}
                /> */}
                        <RegulationTextArea
                            placeholder={'Описание вашего профиля'}
                            value={data.description}
                            onChange={(e: any) => handleChange('description', e.target.value)}
                            maxWidth={520}
                        />
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Additionally;

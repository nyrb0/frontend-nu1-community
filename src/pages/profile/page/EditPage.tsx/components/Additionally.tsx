import SettingsHeading from '@/shared/UI/hending/SettingsHeading';
import styles from '../ProfileEditPage.module.scss';
import PublicAndPrivateUI from '@/pages/settings/page/deteils/UI/PublicAndPrivateUI';
import RegulationTextArea from '@/pages/settings/page/deteils/UI/RegulationTextArea';
import { useEditUserContext } from '../context/EditUserContext';
import { IUser } from '@/shared/types/user.types';

const Additionally = () => {
    const { data, setData } = useEditUserContext();

    const handleChange = (key: keyof IUser, value: string | boolean) => {
        setData(prev => (prev ? { ...prev, [key]: value } : null));
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

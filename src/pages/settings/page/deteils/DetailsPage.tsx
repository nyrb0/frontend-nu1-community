import styles from './DetailsPage.module.scss';
import { useState } from 'react';
import RegulationTextArea from './UI/RegulationTextArea';
import SettingsHeading from '../../../../shared/UI/hending/SettingsHeading';
import PublicAndPrivateUI from './UI/PublicAndPrivateUI';
import FileDownloader from '@/shared/UI/file-ownloader/FileDownloader';
import AvatarProfile from '@/shared/UI/AvatarProfile';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const DetailsPage = () => {
    const [state, setState] = useState(false);
    const [text, setText] = useState('');
    const { user } = useSelector((state: RootState) => state.user);
    if (!user) return;
    return (
        <div className={styles.page}>
            <section className='df jcsb'>
                <SettingsHeading heading={'Public Profile'} description='Это основной профиль, который будет виден всем.' more />
                <PublicAndPrivateUI data={state} onChange={data => setState(data)} />
            </section>
            <hr />
            <section className='df jcsb'>
                <SettingsHeading heading={'Описание'} description={'Это будет ваша основная история. Держите это очень, очень долго'} more={false} />

                <RegulationTextArea
                    placeholder={'Описание вашего профиля'}
                    value={text}
                    onChange={(e: any) => setText(e.target.value)}
                    maxWidth={520}
                />
            </section>
            <hr />
            <section className='df jcsb'>
                <SettingsHeading heading={'Фотография профиля'} description={'Здесь люди увидят ваше настоящее лицо'} more />
                <div className='df' style={{ gap: 12 }}>
                    <AvatarProfile width={64} height={64} src={user?.avatarUrl ? `${baseUrlAws}/${user?.avatarUrl}` : ''} />
                    <FileDownloader maxSize={2} />
                </div>
            </section>
            <hr />
        </div>
    );
};

export default DetailsPage;

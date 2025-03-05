import styles from './DetailsPage.module.scss';
import IconAnswer from '../icon/IconAnswer';
import PublicAndPrivateUI from './UI/PublicAndPrivateUI';
import { useState } from 'react';

const DetailsPage = () => {
    const [state, setState] = useState(false);
    return (
        <div className={styles.page}>
            <section className={styles.block}>
                <div className='df aic jcsb'>
                    <div className={styles.left}>
                        <div className={'df'} style={{ gap: 6 }}>
                            <h3>Public Profile</h3>
                            <IconAnswer />
                        </div>
                        <p>Это основной профиль, который будет виден всем.</p>
                        <p>Узнать подробно</p>
                    </div>
                    <div>
                        <PublicAndPrivateUI data={state} onChange={data => setState(data)} />
                    </div>
                </div>
                <hr />
            </section>
        </div>
    );
};

export default DetailsPage;

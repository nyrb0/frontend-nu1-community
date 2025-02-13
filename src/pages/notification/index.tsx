import { useState } from 'react';
import NotificationFilter from './components/NotificationFilter';
import NotificationPersons from './components/NotificationPersons';
import styles from './NotificationPage.module.scss';
import IconSettings from './components/icon/IconSettings';

const NotificationPage = () => {
    const notifications = [
        {
            user: {
                lastname: '',
                name: 'fvsd',
            },
            notificationText: 'Оставил(-a) комментарии на ваш пост',

            createdAt: '1мин назад',
        },
        {
            user: {
                lastname: '',
                name: 'vnfbvdb',
            },
            notificationText: 'Поставил(-a) лайк вашему посту',

            createdAt: '1мин назад',
        },
        {
            user: {
                lastname: '',
                name: 'vdsvd',
            },
            notificationText: 'Поставил(-a) лайк вашему посту',
            createdAt: '1мин назад',
        },
        {
            user: {
                lastname: 'reovnd',
                name: 'vnfbvdb',
            },
            notificationText: 'Подписал(-а)ся на вас',

            createdAt: '1мин назад',
        },
    ];

    const [filterNoti, setFilterNoti] = useState('');
    return (
        <div className={styles.notification}>
            <div>
                <div className='df jcsb aic'>
                    <h1>Уведомления</h1>
                    <IconSettings />
                </div>
                <NotificationFilter value={filterNoti} onChange={prev => setFilterNoti(prev)} />
            </div>
            <hr className={styles.line}></hr>

            <div className='df fdc' style={{ gap: 18 }}>
                {notifications.map(item => (
                    <NotificationPersons data={item} />
                ))}
            </div>
        </div>
    );
};

export default NotificationPage;

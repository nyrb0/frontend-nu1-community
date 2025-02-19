import { useState } from 'react';
import styles from '../NotificationPage.module.scss';
import Switch from './UI/SwitchUI';
import ComeBack from '@/shared/come-back';

type NotificationItem = {
    name: string;
    status: boolean;
};

type NotificationCategory = {
    title: string;
    items: Record<string, NotificationItem>;
};

type NotificationCategories = {
    posts: NotificationCategory;
    following: NotificationCategory;
    message: NotificationCategory;
};

const initialSettings: NotificationCategories = {
    posts: {
        title: 'Пользователи',
        items: {
            newSubscription: { name: 'Публикация', status: true },
            newLikes: { name: 'Лайки', status: true },
            newComment: { name: 'Комментарии', status: true },
        },
    },
    following: {
        title: 'Посты',
        items: {
            newLikes: { name: 'Лайки', status: true },
            newPhoto: { name: 'Фото', status: true },
            newVideo: { name: 'Видео', status: true },
        },
    },
    message: {
        title: 'Чаты',
        items: {
            newMessage: { name: 'Чаты', status: true },
        },
    },
};

const SettingsNotificationPage: React.FC = () => {
    const [settingsState, setSettingsState] = useState<NotificationCategories>(initialSettings);

    const toggleNotification = (category: keyof NotificationCategories, key: string) => {
        setSettingsState(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                items: {
                    ...prevState[category].items,
                    [key]: {
                        ...prevState[category].items[key],
                        status: !prevState[category].items[key].status,
                    },
                },
            },
        }));
    };

    return (
        <div className={`${styles.settingsPage} upperPadding`}>
            <div className={styles.comeback}>
                <ComeBack>Настройка</ComeBack>
            </div>
            <h2>Настройка уведомлений</h2>
            <hr />
            <div className={`${styles.include} df aic jcsb`} style={{ width: '100%' }}>
                <p>Включать уведомления</p>
                <Switch onChange={() => null} value={true} />
            </div>
            <hr />
            {Object.keys(settingsState).map(category => {
                const currentCategory = settingsState[category as keyof NotificationCategories];
                return (
                    <div key={category}>
                        <h3>{currentCategory.title}</h3>
                        {Object.keys(currentCategory.items).map(item => (
                            <div key={item} className={`${styles.include} df aic jcsb`} style={{ width: '100%' }}>
                                <p>{currentCategory.items[item].name}</p>
                                <Switch
                                    onChange={() => toggleNotification(category as keyof NotificationCategories, item)}
                                    value={currentCategory.items[item].status}
                                />
                            </div>
                        ))}
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default SettingsNotificationPage;

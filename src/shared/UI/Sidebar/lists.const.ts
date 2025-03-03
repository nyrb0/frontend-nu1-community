import HomeIcon from './icons/icon-home.svg';
import NotificationIcon from './icons/icon-notification.svg';
import SavesIcon from './icons/icon-save.svg';
import GroupIcon from './icons/icon-group.svg';
import SubsIcon from './icons/icon-sobscription.svg';
import ProfileIcon from './icons/icon-profile.svg';
import MoreIcon from './icons/icon-more.svg';
import MessageIcon from './icons/icon-message.svg';
import { PAGES } from '@/shared/routes/router.const';
import { localUsername } from '@/pages/auth/username-local';
export const sidebarLists: { label: string; icon: string; link: string }[] = [
    {
        label: 'Дом',
        icon: HomeIcon,
        link: PAGES.HOME,
    },
    {
        label: 'Уведомления',
        icon: NotificationIcon,
        link: PAGES.NOTIFICATION,
    },
    {
        label: 'Сообщение',
        icon: MessageIcon,
        link: PAGES.MESSAGE,
    },
    {
        label: 'Сохраненные',
        icon: SavesIcon,
        link: PAGES.SAVES,
    },
    {
        label: 'Сообщество',
        icon: GroupIcon,
        link: PAGES.GROUPS,
    },
    {
        label: 'Вакансии',
        icon: GroupIcon,
        link: PAGES.VACANCY,
    },
    {
        label: 'Подписки',
        icon: SubsIcon,
        link: PAGES.SUBSCRIPTIONS,
    },
    {
        label: 'Профиль',
        icon: ProfileIcon,
        link: `/profile/${localUsername.get()}`,
    },
    {
        label: 'Другие',
        icon: MoreIcon,
        link: PAGES.OTHER,
    },
];

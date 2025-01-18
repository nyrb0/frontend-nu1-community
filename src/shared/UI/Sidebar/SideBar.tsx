import HomeIcon from './icons/icon-home.svg';
import NotificationIcon from './icons/icon-home.svg';
import SavesIcon from './icons/icon-save.svg';
import GroupIcon from './icons/icon-group.svg';
import SubsIcon from './icons/icon-sobscription.svg';
import ProfileIcon from './icons/icon-profile.svg';
import MoreIcon from './icons/icon-more.svg';
import MessageIcon from './icons/icon-message.svg';

import { StyledSidebar, StyledSidebarAvatar, StyledSidebarContent, StyledSidebarList, StyledTitleSocial } from './sidebar.styled';
import { PAGES } from '@/shared/routes/router.const';

const lists: { label: string; icon: string; link: string }[] = [
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
        label: 'Подписки',
        icon: SubsIcon,
        link: PAGES.SUBSCRIPTIONS,
    },
    {
        label: 'Профиль',
        icon: ProfileIcon,
        link: PAGES.PROFILE,
    },
    {
        label: 'Другие',
        icon: MoreIcon,
        link: PAGES.OTHER,
    },
];

const SideBar = () => {
    const username = 'ny1bo';
    return (
        <StyledSidebar className={''}>
            <div className='df fdc aic'>
                <StyledTitleSocial>Nur-one</StyledTitleSocial>
                <span style={{ fontSize: 12, fontWeight: 300 }}>#community</span>
            </div>
            <div className='df jcc'>
                <StyledSidebarContent className='df fdc '>
                    <StyledSidebarAvatar className={'df aic'}>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Osj5vIVYajemQWR3P0Ux6Zh6kI-HqtuSmQ&s'} />{' '}
                        <span>{username}</span>
                    </StyledSidebarAvatar>
                    {lists.map(list => (
                        <StyledSidebarList className='df aic'>
                            <img src={list.icon} alt={list.label} />
                            {list.label}
                        </StyledSidebarList>
                    ))}
                </StyledSidebarContent>
            </div>
        </StyledSidebar>
    );
};

export default SideBar;

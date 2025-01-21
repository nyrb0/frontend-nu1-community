import { StyledSidebar, StyledSidebarAvatar, StyledSidebarContent, StyledSidebarList, StyledTitleSocial } from './sidebar.styled';

import { Link, useLocation } from 'react-router-dom';
import { userService } from '@/shared/services/user.service';
import { useProfileQuery } from '@/feature/user/user';
import { urlAvatar } from '@/shared/constants/urlAvatar';
import { sidebarLists } from './lists.const';

const SideBar = () => {
    const route = useLocation();
    console.log(userService.getProfileUser(), 'profile');
    const { data: user } = useProfileQuery();

    return (
        <StyledSidebar className={''}>
            <div className='df fdc aic'>
                <StyledTitleSocial>Nur-one</StyledTitleSocial>
                <span style={{ fontSize: 12, fontWeight: 300 }}>#community</span>
            </div>
            <div className='df jcc'>
                <StyledSidebarContent className='df fdc '>
                    <StyledSidebarAvatar className={'df aic'}>
                        <img src={urlAvatar} /> <span>{user?.username}</span>
                    </StyledSidebarAvatar>
                    {sidebarLists.map(list => (
                        <Link to={list.link} key={list.label}>
                            <StyledSidebarList className='df aic' isRoute={route.pathname === list.link}>
                                <img src={list.icon} alt={list.label} />
                                {list.label}
                            </StyledSidebarList>
                        </Link>
                    ))}
                </StyledSidebarContent>
            </div>
        </StyledSidebar>
    );
};

export default SideBar;

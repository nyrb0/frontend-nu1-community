import { StyledSidebar, StyledSidebarAvatar, StyledSidebarContent, StyledSidebarList, StyledTitleSocial } from './sidebar.styled';

import { Link, useLocation } from 'react-router-dom';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import { sidebarLists } from './lists.const';
import NoNameImage from '@/assets/user_noname.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { authService } from '@/shared/services/auth.service';
import IconLogout from './icons/IconLogout';
import { localUsername } from '@/pages/auth/username-local';

const SideBar = () => {
    const route = useLocation();
    const { user } = useSelector((state: RootState) => state.user);
    console.log(user, 'kvnsdfvb ');

    const logout = () => {
        authService.logout();
        localUsername.delete();
        window.location.href = '/auth/login';
    };
    return (
        <StyledSidebar className={'df fdc jcsb'}>
            <div>
                <div className='df fdc aic'>
                    <StyledTitleSocial>Nu1</StyledTitleSocial>
                    <span style={{ fontSize: 12, fontWeight: 300 }}>#community</span>
                </div>
                <div className='df jcc'>
                    <StyledSidebarContent className='df fdc '>
                        {sidebarLists.map(list => (
                            <Link to={list.link} key={list.label}>
                                <StyledSidebarList className='df aic' isroute={route.pathname === list.link}>
                                    <img src={list.icon} alt={list.label} />
                                    {list.label}
                                </StyledSidebarList>
                            </Link>
                        ))}
                    </StyledSidebarContent>
                </div>
            </div>

            <div>
                <hr />
                <StyledSidebarAvatar className={'df jcsb aic'}>
                    <div className='df aic' style={{ gap: 12 }}>
                        <img src={user?.avatarUrl ? `${baseUrlAws}/${user?.avatarUrl}` : NoNameImage} />{' '}
                        <span>
                            <p>{user?.username}</p>
                            <p>{user?.positionRole}</p>
                        </span>
                    </div>
                    <IconLogout onClick={logout} />
                </StyledSidebarAvatar>
            </div>
        </StyledSidebar>
    );
};

export default SideBar;

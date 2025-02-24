import { StyledSidebar, StyledSidebarAvatar, StyledSidebarContent, StyledSidebarList, StyledTitleSocial } from './sidebar.styled';

import { Link, useLocation } from 'react-router-dom';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import { sidebarLists } from './lists.const';
import NoNameImage from '@/assets/user_noname.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const SideBar = () => {
    const route = useLocation();

    const { user } = useSelector((state: RootState) => state.user);

    return (
        <StyledSidebar className={''}>
            <div className='df fdc aic'>
                <StyledTitleSocial>Nur-one</StyledTitleSocial>
                <span style={{ fontSize: 12, fontWeight: 300 }}>#community</span>
            </div>
            <div className='df jcc'>
                <StyledSidebarContent className='df fdc '>
                    <StyledSidebarAvatar className={'df aic'}>
                        <img src={user?.avatarUrl ? `${baseUrlAws}/${user?.avatarUrl}` : NoNameImage} /> <span>{user?.username}</span>
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

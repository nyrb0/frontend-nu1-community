import styled from 'styled-components';
import { listsLinkProfileEdit } from './category-filter-edit-profile';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const StyledUl = styled.ul`
    font-size: 14px;
    font-weight: 700;
    width: 500px; //596px
    /* color: var(--white-color); */

    color: #475569;
`;

const CategoryEditProfile = () => {
    const location = useLocation();
    const { user } = useSelector((state: RootState) => state.user);
    return (
        <StyledUl className={'df jcsb'}>
            {listsLinkProfileEdit.map(link => (
                <li key={link.name}>
                    <Link to={link.path(user?.username ?? '')}>{link.name}</Link>
                </li>
            ))}
        </StyledUl>
    );
};

export default CategoryEditProfile;

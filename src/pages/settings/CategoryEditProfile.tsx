import styled from 'styled-components';
import { listsLinkProfileEdit } from './category-filter-edit-profile';
import { Link } from 'react-router-dom';

const StyledUl = styled.ul`
    font-size: 14px;
    font-weight: 700;
    width: 500px; //596px
    /* color: var(--white-color); */

    color: #475569;
`;

const CategoryEditProfile = () => {
    return (
        <StyledUl className={'df jcsb'}>
            {listsLinkProfileEdit.map(link => (
                <li key={link.name}>
                    <Link to={link.path()}>{link.name}</Link>
                </li>
            ))}
        </StyledUl>
    );
};

export default CategoryEditProfile;

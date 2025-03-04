import styled from 'styled-components';
import { listsLinkProfileEdit } from './category-filter-edit-profile';

const StyledUl = styled.ul`
    font-size: 14px;
    font-weight: 500;
    width: 596px;
`;

const CategoryEditProfile = () => {
    return (
        <StyledUl className={'df '}>
            {listsLinkProfileEdit.map(link => {
                <li key={link.name}>{link.name}</li>;
            })}
        </StyledUl>
    );
};

export default CategoryEditProfile;

import styled from 'styled-components';

export const StyledSidebar = styled.aside`
    font-weight: 500;
    font-size: 16px;
    color: var(--gray1);
    background-color: var(--background-color1);
    width: 300px;
    border-radius: 10px;
    /* box-shadow: 0px 0 50px 0 var(--normal); */
    padding: 32px 0;
`;

export const StyledSidebarContent = styled.div`
    margin-top: 30px;
    gap: 30px;
`;

export const StyledTitleSocial = styled.p`
    font-size: 30px;
    color: var(---darker);
`;

export const StyledSidebarAvatar = styled.div`
    transform: scale(0.9);
    gap: 10px;
    transition: transform 0.4s ease-in-out;

    &:hover {
        transform: scale(1);
    }
    & img {
        object-fit: contain;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        transition: box-shadow 0.6s ease-in-out;
        &:hover {
            box-shadow: 0px 0 49px 0 rgba(238, 16, 176, 0.4);
        }
    }
    & span {
        transition: text-shadow 0.6s ease-in-out;
        font-size: 20px;
        &:hover {
            text-shadow: 0px 0px 20px rgba(238, 16, 176, 0.4);
        }
    }
`;

export const StyledSidebarList = styled.div<{ isRoute: boolean }>`
    transition: color 0.3s ease;
    transition: background 0.6s ease-in-out;
    background-color: ${({ isRoute }) => (isRoute ? 'var(--normal)' : '')};
    gap: 18px;
    cursor: pointer;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    &:hover {
        color: #686868;
    }
`;

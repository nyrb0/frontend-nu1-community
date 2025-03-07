import styled from 'styled-components';

export const StyledSidebar = styled.aside`
    font-weight: 500;
    font-size: 16px;
    box-sizing: border-box;
    height: 98vh;
    color: var(--gray1);
    background-color: var(--background-color1);
    width: 300px;
    border-radius: 10px;
    transition: box-shadow 0.5s ease-in-out;
    &:hover {
        box-shadow: 0px 0 8px 0 var(--normal);
    }
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
    transform: scale(0.8);
    gap: 10px;
    transition: transform 0.4s ease-in-out;

    &:hover {
        transform: scale(0.9);
    }
    & img {
        object-fit: contain;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        transition: box-shadow 0.6s ease-in-out;
        &:hover {
            box-shadow: 0px 0 49px 0 var(--normal);
        }
    }
    & span {
        transition: text-shadow 0.6s ease-in-out;
        font-size: 20px;
        & p:first-child {
            color: var(--white-color);
            &:hover {
                text-shadow: 0px 0px 20px var(--normal);
            }
        }
        & p:last-child {
            margin-top: 7px;
            font-size: 10px;
        }
    }
`;

export const StyledSidebarList = styled.div<{ isroute?: boolean }>`
    transition: color 0.3s ease;
    transition: background 0.6s ease-in-out;
    background-color: ${({ isroute }) => (isroute ? 'var(--normal)' : '')};
    gap: 18px;
    cursor: pointer;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    &:hover {
        color: #686868;
    }
`;

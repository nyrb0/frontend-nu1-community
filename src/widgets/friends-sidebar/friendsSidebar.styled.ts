import styled from 'styled-components';

export const StyledFriendsRecomend = styled.div`
    font-weight: 700;
    padding: 24px 0;
    & p {
        font-size: 18px;
        color: var(--white-color);
    }
    & button {
        gap: 8px;
        font-weight: 700;
        font-size: 14px;
        color: var(--normal);
    }
`;

export const StyledFriendsSidebar = styled.div`
    padding: 0 15px;
    box-sizing: border-box;
    box-shadow: -10px 0px 24px 0px rgba(238, 16, 176, 0.15);
    border-radius: 10px;
    background-color: var(--background-color1);
    width: 300px;
    height: 500px;
`;

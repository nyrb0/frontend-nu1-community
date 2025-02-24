import styled from 'styled-components';

export const StyledOptionsPost = styled.ul`
    position: absolute;
    top: 10px;
    right: 20px;
    background-color: var(--background-color2);
    padding: 20px 0;
    width: 250px;
    height: auto;
    border-radius: 7px;
    font-size: 14px;
    font-weight: 600;
    gap: 25px;
    cursor: pointer;
    & li {
        text-align: center;
        width: 100%;
    }

    & li:first-child {
        color: red;
    }
`;

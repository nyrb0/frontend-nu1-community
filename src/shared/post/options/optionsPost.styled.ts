import styled from 'styled-components';

export const StyledWrapperOptionPost = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100vh;
    z-index: 1;
`;

export const StyledOptionsPost = styled.ul`
    position: absolute;
    z-index: 99;
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

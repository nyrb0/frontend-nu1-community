import styled from 'styled-components';

export const StyledTagPeopleWrapper = styled.div`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledTagPeapleContent = styled.div`
    max-height: 300px;
    height: 100%;
    max-width: 300px;
    z-index: 1000;
    padding: 20px 30px;
    background-color: var(--background-color1);
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    box-sizing: border-box;
    & span {
        position: absolute;
        top: 8px;
        right: 8px;
        font-size: 12px;
        opacity: 0.7;
        cursor: pointer;
    }

    & button {
        width: 100px;
        height: 30px;
    }
`;

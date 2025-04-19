import styled from 'styled-components';

export const StyledReplayComment = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 100px;
    min-height: 65px;
    padding: 10px;
    box-sizing: border-box;
    background-color: var(--background-color2);
    border-top: 1px solid white;
    border-right: 1px solid white;
    border-left: 1px solid white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        top: 0;
        left: 0;
        z-index: 1;
        background: linear-gradient(0deg, var(--background-color2) 10%, rgba(217, 217, 217, 0) 100%);
    }
    & span {
        position: absolute;
        font-size: 16px;
        right: 10px;
        top: 7px;
        z-index: 9;
    }
    & p {
        font-size: 12px;
        &:first-child {
            font-weight: 700;
            font-size: 16px;
        }
        &:last-child {
            font-weight: 400;
            font-size: 12px;
        }
    }
`;

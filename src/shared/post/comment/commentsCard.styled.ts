import styled from 'styled-components';

export const StyledCommentsBlock = styled.div`
    padding: 10px;
    box-sizing: border-box;
    background-color: var(--background-color2);
    border-radius: 8px;
    width: 100%;
    height: 100px;
`;

export const StyledUsername = styled.p`
    gap: 5px;
    font-weight: 700;
    font-size: 14px;
    color: var(--whit-color);
    padding-bottom: 5px;
`;

export const StyledIconArrowDown = styled.div`
    z-index: 999;
    position: absolute;
    top: -50px;
    right: 50%;
    left: 50%;
`;

export const StyledComments = styled.div`
    margin-top: 20px;
    gap: 20px;
`;

export const StyledModalComments = styled.div`
    overflow-y: scroll;
    scrollbar-width: none;
    height: 70vh;
    &::-webkit-scrollbar {
        display: none;
    }

    padding: 20px 30px 80px 30px;
    box-sizing: border-box;
`;

export const StyledModalComment = styled.div`
    position: fixed;
    bottom: 0px;
    border-radius: 8px;
    width: 100%;
    padding: 14px 10px;
    z-index: 99;
    box-sizing: border-box;
    background-color: var(--background-color1);

    & .replay_comment {
        width: 100%;
        position: relative;
        top: -20px;
        z-index: 9;
    }
`;

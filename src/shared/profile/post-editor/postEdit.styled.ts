import styled from 'styled-components';

export const StyledPostEditBackgroundOut = styled.div`
    box-sizing: border-box;
    padding: 15px;
    position: relative;
    background-color: var(--background-color1);
    width: 100%;
    min-height: 193px;
    border-radius: 7px;
`;

export const StyledPostEditBackgroundInner = styled.div`
    background-color: var(--background-color3);
    border-radius: 7px;
    height: 100%;
`;

export const StyledPostButtons = styled.div`
    height: 35px;
    margin-top: 15px;
    & span {
        gap: 29px;
        & button {
            font-weight: 700;
        }
    }
`;

export const StyledPostEditTextArea = styled.div`
    padding: 15px 10px;
    gap: 24px;
`;

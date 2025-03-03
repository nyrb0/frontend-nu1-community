import styled from 'styled-components';

export const StyledPostEditBackgroundOut = styled.div`
    & h2 {
        font-size: 18px;
        font-weight: 900;
        padding-bottom: 10px;
    }
    box-sizing: border-box;
    padding: 15px;
    position: relative;
    background-color: var(--background-color1);
    width: 100%;
    min-height: 193px;
    border-radius: 7px;
`;

export const StyledPostSelectImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
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

export const StyledEditModalPost = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9;
`;

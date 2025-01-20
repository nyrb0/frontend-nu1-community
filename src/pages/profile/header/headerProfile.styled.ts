import styled from 'styled-components';

export const StyledHeaderImage = styled.div`
    margin-top: 10px;

    height: 280px;
    position: relative;
    border: 0.6px dashed #f1f1ff;
    border-radius: 7px;
`;
export const StyledHeaderUserName = styled.div``;

export const StyledHeaderUsername = styled.p`
    margin-left: 20px;
    & p:first-child {
        display: inline-block;
        font-weight: 700;
        font-size: 20px;
        color: var(--white-color);
    }
    & p:last-child {
        margin-top: 3px;
        font-weight: 400;
        font-size: 16px;
        color: #686868;
    }
`;

export const StyledHeaderEdits = styled.div`
    width: 770px;
    padding: 0 16px 0 58px;
    transform: translateY(-35px);
`;

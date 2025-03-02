import styled from 'styled-components';

export const StyledHeaderImage = styled.div`
    position: relative;
    margin-top: 10px;
    height: 280px;
    border-radius: 7px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('https://ru-wotp.lesta.ru/dcont/fb/image/moon_rose_light.jpg');
        background-size: cover;
        background-position: center;
        filter: blur(5px);
        z-index: -1;
    }
`;

export const StyledProfileComeBack = styled.div`
    margin: 23px 0 0 20px;
    z-index: 20;
    position: absolute;
    & span {
        margin-top: 3px;
        font-size: 11px;
    }
`;

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

export const StyledProfileHeaderButtons = styled.div`
    gap: 14px;
    height: 40px;

    & button {
        font-size: 12px;
        font-weight: 600;
    }
`;

export const StyledHeaderEdits = styled.div`
    padding: 0 16px 0 58px;
    transform: translateY(-35px);
`;

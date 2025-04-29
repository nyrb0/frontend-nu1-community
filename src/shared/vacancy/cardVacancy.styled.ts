import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCardVacancy = styled(Link)`
    background-color: var(--background-color1);
    width: 100%;
    height: 180px;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    & strong {
        padding-bottom: 10px;
        font-weight: 700;
        font-size: 20px;
    }
`;

export const StyledVacancyTitle = styled.strong`
    font-size: 12px;
`;

export const StyledVacancyCompany = styled.div`
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 10px;
    gap: 5px;
`;

export const StyledVacancyTop = styled.p`
    font-size: 10px !important;
    font-weight: 500;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    /* background-color: var(--background-color2); */
    background-color: var(--background-color2);
    border-radius: 7px;
    width: auto;
    max-width: 200px;
`;

export const StyledVacancySquare = styled.p`
    font-size: 13px !important;
    font-weight: 500;
    border: 1px solid var(--white-color);
    gap: 5px;
    height: 24px;
    display: flex;
    justify-content: center;
    padding: 5px 15px;
    box-sizing: border-box;
    border-radius: 7px;
    width: auto;
    max-width: 200px;
`;

export const StyledVacancyCardBtn = styled.div`
    width: 100%;
    margin-top: 20px;
    & p {
        font-size: 12px;
    }
    & button {
        gap: 5px;
        width: 130px;
        height: 30px;
    }
`;

export const StyledInfoVacancy = styled.div`
    .createdAt {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        font-size: 12px;
    }
    background-color: var(--background-color1);
    width: 100%;
    max-height: 250px;
    height: 100%;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
`;

export const StyledVacancyDetail = styled.div`
    display: flex;
    align-items: center;
    font-size: 17px;
    gap: 5px;
    margin: 7px 0;
    & p {
        font-size: 15px;
    }
    & span {
        font-weight: 700;
    }
`;

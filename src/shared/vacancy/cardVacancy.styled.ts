import styled from 'styled-components';

export const StyledCardVacancy = styled.div`
    background-color: var(--background-color1);
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

import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: var(--background-color1);
    height: 70px;
    border-radius: 8px;
    gap: 10px;
    padding: 5px 0;
    margin-bottom: 10px;

    button {
        transition: background 0.4s ease-in;
        border-radius: 3px;
        padding: 5px 10px;
        width: auto;
    }
`;

interface HeaderVacancyI {
    onChange: (value: boolean) => void;
    state: boolean;
}

const HeaderVacancy = ({ state, onChange }: HeaderVacancyI) => {
    return (
        <StyledHeader className={'df fdc'}>
            <h2 className='df jcc'>Вакансия</h2>
            <div className={'df jcc aic'} style={{ gap: 10 }}>
                <PrimaryButton onClick={() => onChange(false)} background={!state ? 'var(--normal)' : 'transparent'}>
                    Вакансии
                </PrimaryButton>
                |
                <PrimaryButton onClick={() => onChange(true)} background={state ? 'var(--normal)' : 'transparent'}>
                    Мои вакансии
                </PrimaryButton>
            </div>
        </StyledHeader>
    );
};

export default HeaderVacancy;

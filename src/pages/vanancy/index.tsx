import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { StyledVacancyButtonCreate } from './index.styled';
import CardVacancy from '@/shared/vacancy/CardVacancy';
import { arrayVacancy } from './vacancy.const';

const VacancyPage = () => {
    return (
        <>
            <div className='df fdc' style={{ gap: 10 }}>
                {arrayVacancy.map(card => (
                    <CardVacancy data={card} />
                ))}
            </div>
            <StyledVacancyButtonCreate className={'df jcc'}>
                <PrimaryButton>Создать вакансию</PrimaryButton>
            </StyledVacancyButtonCreate>
        </>
    );
};

export default VacancyPage;

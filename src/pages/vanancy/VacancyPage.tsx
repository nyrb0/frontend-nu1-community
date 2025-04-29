import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { StyledVacancyButtonCreate } from './index.styled';
import CardVacancy from '@/shared/vacancy/CardVacancy';
import { useEffect, useState } from 'react';
import { IVacancy } from '@/shared/types/vacancy.types';
import { vacancyService } from '@/shared/services/vacancy.service';

const VacancyPage = () => {
    const [data, setData] = useState<IVacancy[] | null>(null);

    useEffect(() => {
        (async () => {
            const response = await vacancyService.getAll();
            setData(response.data);
        })();
    }, []);

    return (
        <>
            <div className='df fdc' style={{ gap: 10 }}>
                {data?.map(card => (
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

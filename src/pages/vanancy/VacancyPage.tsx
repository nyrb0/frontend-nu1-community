import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { StyledVacancyButtonCreate } from './index.styled';
import CardVacancy from '@/shared/vacancy/CardVacancy';
import { useEffect, useState } from 'react';
import { IVacancy } from '@/shared/types/vacancy.types';
import { vacancyService } from '@/shared/services/vacancy.service';
import CreateVacancy from './UI/create-vacancy/CreateVacancy';
import HeaderVacancy from './UI/HeaderVacancy';
import { useAppSelector } from '@/shared/hooks/redux';

const VacancyPage = () => {
    const [data, setData] = useState<IVacancy[] | null>(null);
    const [isCreate, setIsCreate] = useState(false);
    const [vacancyType, setVacancyType] = useState(false);

    const user = useAppSelector(state => state.user);

    useEffect(() => {
        (async () => {
            if (vacancyType) {
                const response = await vacancyService.getAll();
                setData(response.data);
            } else {
                const response = await vacancyService.getAllCompany(user?.user?.id || '');
                setData(response.data);
            }
        })();
    }, [vacancyType]);

    return (
        <>
            <HeaderVacancy state={vacancyType} onChange={boolean => setVacancyType(boolean)} />
            {isCreate && <CreateVacancy onClose={() => setIsCreate(false)} />}
            <div className='df fdc' style={{ gap: 10 }}>
                {data?.map(card => (
                    <CardVacancy key={card.id} data={card} />
                ))}
            </div>
            <StyledVacancyButtonCreate className={'df jcc'}>
                <PrimaryButton onClick={() => setIsCreate(true)}>Создать вакансию</PrimaryButton>
            </StyledVacancyButtonCreate>
        </>
    );
};

export default VacancyPage;

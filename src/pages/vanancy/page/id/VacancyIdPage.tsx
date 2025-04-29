import { vacancyService } from '@/shared/services/vacancy.service';
import { IVacancy } from '@/shared/types/vacancy.types';
import CardInfo from '@/shared/vacancy/CardInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VacancyIdPage = () => {
    const [data, setData] = useState<IVacancy | null>(null);

    const { vacancyId } = useParams<{ vacancyId: string }>();

    useEffect(() => {
        (async () => {
            if (vacancyId) {
                const response = await vacancyService.getById(vacancyId);
                setData(response.data);
            }
        })();
    }, []);

    return <div>{data && <CardInfo info={data} />}</div>;
};

export default VacancyIdPage;

import { vacancyService } from '@/shared/services/vacancy.service';
import { IVacancy } from '@/shared/types/vacancy.types';
import ComeBack from '@/shared/UI/come-back';
import CardInfo from '@/shared/vacancy/CardInfo';
import ContentDescription from '@/shared/vacancy/ContentDescription';
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
    if (!data) return <div>Ошибка</div>;

    return (
        <div>
            <div style={{ marginBottom: 10 }}>
                <ComeBack>Назад</ComeBack>
            </div>
            {data && <CardInfo info={data} />}

            <ContentDescription description={data?.description} />
        </div>
    );
};

export default VacancyIdPage;

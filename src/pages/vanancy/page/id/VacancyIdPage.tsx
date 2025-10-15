import { vacancyService } from '@/shared/services/vacancy.service';
import { IVacancy } from '@/shared/types/vacancy.types';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import ComeBack from '@/shared/UI/come-back';
import RegulationTextArea from '@/shared/UI/text-area/RegulationTextArea';
import styles from './VacancyIdPage.module.scss';
import CardInfo from '@/shared/vacancy/CardInfo';
import ContentDescription from '@/shared/vacancy/ContentDescription';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SendLetter = () => {
    const [letter, setLetter] = useState('');
    return (
        <RegulationTextArea
            maxHeight={400}
            placeholder='Оставьте сопроводительное письмо'
            className={styles.area}
            maxWidth={'100%'}
            value={letter}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setLetter(e.target.value)}
        >
            <div className='df jce'>
                <PrimaryButton className={styles.btn}>Отликнуться</PrimaryButton>
            </div>
        </RegulationTextArea>
    );
};

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
        <div className={styles.page}>
            <div className={styles.comback}>
                <ComeBack>Назад</ComeBack>
            </div>
            {data && <CardInfo info={data} />}

            <ContentDescription description={data?.description} />
            <div className={styles.letter}>
                <h3>Сопроводительное письмо</h3>
                <SendLetter />
            </div>
        </div>
    );
};

export default VacancyIdPage;

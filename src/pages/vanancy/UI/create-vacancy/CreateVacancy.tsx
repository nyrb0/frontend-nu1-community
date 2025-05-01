import Modal from '@/shared/UI/Modal/Modal';
import styles from './CreateVacancy.module.scss';
import InputSecondary from '@/shared/UI/input/SecondaryInput';

interface ICreateVacancy {
    onClose: () => void;
}

const timeWork = ['6/1', '5/2', '4/4', '4/3', '4/2', '3/3', '3/2', '2/2', '2/1', '1/3', '1/2', 'Другое'];
const experience = [
    {
        title: 'Нет опыта',
        minExperience: 0,
        maxExperience: 0,
    },
    {
        title: 'От 6 мес до 2 лет',
        minExperience: 0.6,
        maxExperience: 2,
    },
    {
        title: 'От 2 года до 4 лет',
        minExperience: 2,
        maxExperience: 4,
    },
    {
        title: 'От 4 года до 6 лет',
        minExperience: 4,
        maxExperience: 6,
    },
    {
        title: 'Более 6 лет',
        minExperience: 6,
        maxExperience: 6,
    },
];
const CreateVacancy = ({ onClose }: ICreateVacancy) => {
    return (
        <Modal maxWidth={600} onClose={onClose} position={'flex-end'}>
            <div className={styles.vacancy}>
                <InputSecondary label='Название:' placeholder='Какого специалиста ищите?' />
                <InputSecondary label='Название:' placeholder='Выберите название' />
                <InputSecondary label='Локация' placeholder='Ваша локация' />
            </div>
        </Modal>
    );
};

export default CreateVacancy;

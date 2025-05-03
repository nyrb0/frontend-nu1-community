import Modal from '@/shared/UI/Modal/Modal';
import styles from './CreateVacancy.module.scss';
import InputSecondary from '@/shared/UI/input/SecondaryInput';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import TextEdit from '@/shared/UI/text-editor/TextEdit';
import CustomSelect from '@/shared/UI/select/CustomSelect';
import CustomCheckbox from '@/shared/UI/check-box/CustomCheckBox';

interface ICreateVacancy {
    onClose: () => void;
}

const timeWork = [
    { label: '6/1', value: '6/1' },
    { label: '5/2', value: '5/2' },
    { label: '4/4', value: '4/4' },
    { label: '4/3', value: '4/3' },
    { label: '3/3', value: '3/3' },
    { label: '3/2', value: '3/2' },
    { label: '2/2', value: '2/2' },
    { label: '2/1', value: '2/1' },
];
// const experience = [
//     {
//         id: 0,
//         title: 'Нет опыта',
//         minExperience: 0,
//         maxExperience: 0,
//     },
//     {
//         id: 1,
//         title: 'От 6 мес до 2 лет',
//         minExperience: 0.6,
//         maxExperience: 2,
//     },
//     {
//         id: 2,
//         title: 'От 2 года до 4 лет',
//         minExperience: 2,
//         maxExperience: 4,
//     },
//     {
//         id: 3,
//         title: 'От 4 года до 6 лет',
//         minExperience: 4,
//         maxExperience: 6,
//     },
//     {
//         id: 5,
//         title: 'Более 6 лет',
//         minExperience: 6,
//         maxExperience: 6,
//     },
// ];
const experience = [
    {
        id: 0,
        title: 'Нет опыта',
    },
    {
        id: 1,
        title: 'От 6 мес до 2 лет',
    },
    {
        id: 2,
        title: 'От 2 года до 4 лет',
    },
    {
        id: 3,
        title: 'От 4 года до 6 лет',
    },
    {
        id: 5,
        title: 'Более 6 лет',
    },
];

type FormValue = {
    description: string;
    position: string;
    timeWork: string;
    experience: number | null;
    remote: boolean;
    office: boolean;
    hybrid: boolean;
};
const CreateVacancy = ({ onClose }: ICreateVacancy) => {
    const [value, setValue] = useState<FormValue>({
        description: '',
        position: '',
        timeWork: '',
        experience: null,
        remote: false,
        office: false,
        hybrid: false,
    });

    const handleOnChange = (value: string, name: keyof FormValue) => {
        setValue(prev => ({ ...prev, [name]: value }));
    };
    const filterExperience = experience.map(item => ({ label: item.title, value: item.id }));

    return (
        <Modal maxWidth={800} onClose={onClose} position={'flex-end'}>
            <div className={`${styles.vacancy} df fdc`}>
                <h2 className='df jcc'>Создание вакансии</h2>
                <InputSecondary label='Название:' placeholder='Какого специалиста ищите?' />
                <InputSecondary label='Название:' placeholder='Выберите название' />
                <InputSecondary label='Локация' placeholder='Ваша локация' />
                <TextEdit placeholder='Описание вакансии' value={value.description} onChange={value => handleOnChange(value, 'description')} />
                <CustomSelect
                    value={value.position}
                    label='Позиция'
                    onChange={value => handleOnChange(value as string, 'position')}
                    options={[
                        { label: 'Frontend', value: 'frontend' },
                        { label: 'Backend', value: 'backend' },
                        { label: 'Fullstack', value: 'fullstack' },
                    ]}
                />
                <CustomSelect
                    value={value.timeWork}
                    label='Робочий график'
                    onChange={value => handleOnChange(value as string, 'timeWork')}
                    options={timeWork}
                />
                <CustomSelect
                    value={value.experience}
                    label='Опыт работы'
                    onChange={value => handleOnChange(value as string, 'experience')}
                    options={filterExperience}
                />
                <div className={`${styles.formats} df fdc`}>
                    <p>Формат работы</p>
                    <CustomCheckbox checked={value.office} onChange={value => setValue(prev => ({ ...prev, office: value }))} label='Офис' />
                    <CustomCheckbox checked={value.remote} onChange={value => setValue(prev => ({ ...prev, remote: value }))} label='Удаленка' />
                    <CustomCheckbox checked={value.hybrid} onChange={value => setValue(prev => ({ ...prev, hybrid: value }))} label='Гибрид' />
                </div>
                <div className={`${styles.formats} df fdc`}>
                    <p>Уровень разработчика</p>
                    <CustomCheckbox checked={value.office} onChange={value => setValue(prev => ({ ...prev, office: value }))} label='junior' />
                    <CustomCheckbox checked={value.remote} onChange={value => setValue(prev => ({ ...prev, remote: value }))} label='Удаленка' />
                    <CustomCheckbox checked={value.hybrid} onChange={value => setValue(prev => ({ ...prev, hybrid: value }))} label='Гибрид' />
                </div>
            </div>
        </Modal>
    );
};

export default CreateVacancy;

import Modal from '@/shared/UI/Modal/Modal';
import styles from './CreateVacancy.module.scss';
import InputSecondary from '@/shared/UI/input/SecondaryInput';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import TextEdit from '@/shared/UI/text-editor/TextEdit';
import CustomSelect from '@/shared/UI/select/CustomSelect';
import CustomCheckbox from '@/shared/UI/check-box/CustomCheckBox';
import { POSITION } from '@/shared/types/roles';
import { vacancyService } from '@/shared/services/vacancy.service';
import { ICraeteVacancy } from '@/shared/types/vacancy.types';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { experience, timeWork } from '../../constants-vacancy.const';

interface ICreateVacancy {
    onClose: () => void;
}

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

interface FormValue extends Omit<ICraeteVacancy, 'id'> {}
const CreateVacancy = ({ onClose }: ICreateVacancy) => {
    const [value, setValue] = useState<FormValue>({
        title: '',
        hourInDay: null,
        description: '',
        location: '',
        position: '',
        timeWork: '',
        experience: null,
        remote: false,
        office: false,
        hybrid: false,
        salaryFrom: 10000,
        salaryTo: 10000,
    });

    const handleOnChange = (value: string, name: keyof FormValue) => {
        setValue(prev => ({ ...prev, [name]: value }));
    };
    console.log(value);
    const handleCreateVacancy = async (e: any) => {
        e.preventDefault();
        try {
            const response = await vacancyService.create(value);
            if (response.status === 200) {
                alert('создано');
                onClose();
            }
        } catch (err) {
            console.error('Ошибка при создании вакансии', err);
        }
    };

    const position = Object.keys(POSITION).map(item => ({ label: POSITION[item as POSITION], value: item }));
    const filterExperience = experience.map(item => ({ label: item.title, value: item.id }));

    return (
        <Modal maxWidth={800} onClose={onClose} position={'flex-end'}>
            <form className={`${styles.vacancy} df fdc`} onSubmit={handleCreateVacancy}>
                <h2 className='df jcc'>Создание вакансии</h2>
                <InputSecondary
                    label='Название:'
                    placeholder='Какого специалиста ищите?'
                    onChange={value => handleOnChange(value.target.value, 'title')}
                />
                <InputSecondary label='Локация' placeholder='Ваша локация' onChange={value => handleOnChange(value.target.value, 'location')} />
                <InputSecondary
                    label='Рабочий час'
                    placeholder='Укажите рабочий час'
                    onChange={value => setValue(prev => ({ ...prev, hourInDay: parseInt(value.target.value) }))}
                />
                <TextEdit placeholder='Описание вакансии' value={value.description} onChange={value => handleOnChange(value, 'description')} />
                <CustomSelect
                    value={value.position}
                    label='Уровень разработчика'
                    onChange={value => handleOnChange(value as string, 'position')}
                    options={position}
                />
                <div className={`${styles.formats} df fdc`}>
                    <p>Формат работы</p>
                    <CustomCheckbox checked={value.office} onChange={value => setValue(prev => ({ ...prev, office: value }))} label='Офис' />
                    <CustomCheckbox checked={value.remote} onChange={value => setValue(prev => ({ ...prev, remote: value }))} label='Удаленка' />
                    <CustomCheckbox checked={value.hybrid} onChange={value => setValue(prev => ({ ...prev, hybrid: value }))} label='Гибрид' />
                </div>
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
                <div className={styles.btn}>
                    <PrimaryButton type={'submit'}>Создать</PrimaryButton>
                </div>
            </form>
        </Modal>
    );
};

export default CreateVacancy;

import { ChangeEvent, useState } from 'react';
import CustomSelect from '@/shared/UI/select/CustomSelect';
import CustomCheckbox from '@/shared/UI/check-box/CustomCheckBox';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import InputSecondary from '@/shared/UI/input/SecondaryInput';
import CarouselUI from '@/shared/UI/Buttons/CarouselUI';

import { experience, timeWork } from '@/pages/vanancy/constants-vacancy.const';
import { POSITION } from '@/shared/types/roles';

import styles from './FilterVacancy.module.scss';

const option = [{ label: '', value: '' }];

const FilterVacancy = () => {
    const [value, setValue] = useState({
        title: '',
        hourInDay: null,
        description: '',
        location: '',
        position: 'Intern',
        timeWork: '',
        experience: 0,
        remote: false,
        office: false,
        hybrid: false,
        salaryFrom: 10000,
        salaryTo: 10000,
    });

    const handleOnChange = (val: string | number | boolean, name: keyof typeof value) => {
        setValue(prev => ({ ...prev, [name]: val }));
    };

    const experienceTitles = experience.map(item => item.title);
    const positions = Object.values(POSITION);
    const currentExperienceTitle = experience.find(item => item.id === value.experience)?.title || '';

    return (
        <form className={`${styles.filter} df fdc jcsb`}>
            <div className={`${styles.wrapper} df fdc`}>
                <h2>Фильтр</h2>

                <InputSecondary
                    label='Поиск'
                    placeholder='Введите название'
                    value={value.title}
                    onChange={(val: ChangeEvent<HTMLInputElement>) => handleOnChange(val.target.value, 'title')}
                />

                <CustomSelect label='Специальность' options={option} value='' onChange={() => {}} />

                <div className={`${styles.format} df fdc`}>
                    <p>Формат работы</p>
                    <CustomCheckbox checked={value.office} onChange={val => handleOnChange(val, 'office')} label='Офис' />
                    <CustomCheckbox checked={value.remote} onChange={val => handleOnChange(val, 'remote')} label='Удаленка' />
                    <CustomCheckbox checked={value.hybrid} onChange={val => handleOnChange(val, 'hybrid')} label='Гибрид' />
                </div>
                <CarouselUI
                    label='Опыт работы'
                    data={experienceTitles}
                    value={currentExperienceTitle}
                    onChange={val => {
                        const expItem = experience.find(item => item.title === val);
                        if (expItem) handleOnChange(expItem.id, 'experience');
                    }}
                />
                <CustomSelect
                    value={value.timeWork}
                    label='Рабочий график'
                    onChange={val => handleOnChange(val as string, 'timeWork')}
                    options={timeWork}
                />
                <CarouselUI label='Должность' data={positions} value={value.position} onChange={val => handleOnChange(val, 'position')} />
            </div>

            <div className={styles.btn}>
                <PrimaryButton type='submit'>Поиск</PrimaryButton>
            </div>
        </form>
    );
};

export default FilterVacancy;

import IconEyes from '../icons/IconEyes';
import IconLocation from '../icons/IconLocation';
import IconVerified from '../icons/IconVerified';
import { POSITION } from '../types/roles';
import { IVacancy } from '../types/vacancy.types';
import AvatarProfile from '../UI/AvatarProfile';
import PrimaryButton from '../UI/Buttons/PrimeryButton';
import {
    StyledCardVacancy,
    StyledVacancyCardBtn,
    StyledVacancyCompany,
    StyledVacancySquare,
    StyledVacancyTitle,
    StyledVacancyTop,
} from './cardVacancy.styled';

interface ICardVacancy {
    data: IVacancy;
}
const CardVacancy = ({ data }: ICardVacancy) => {
    const handlerSalary = () => {
        if (data.salaryFrom && data.salaryTo) return `от ${data.salaryFrom} - ${data.salaryTo}`;
        if (data.salaryTo) return `до ${data.salaryTo}`;
        if (data.salaryFrom) return `от ${data.salaryFrom}`;
        else return `договорная`;
    };

    const format = {
        remote: data.remote,
        office: data.office,
        hybrid: data.hybrid,
    };
    const formatName = {
        remote: 'Удаленный',
        office: 'Офис',
        hybrid: 'Гибрид',
    };
    return (
        <StyledCardVacancy to={`${data.id}`}>
            <StyledVacancyCompany className='df aic'>
                <AvatarProfile width={40} height={40} />
                {data.user.name}
                {data.user.identification && <IconVerified />}
                {Object.keys(format)
                    .filter(item => format[item as keyof typeof format])
                    .map(item => (
                        <StyledVacancyTop key={item}>{formatName[item as keyof typeof format]}</StyledVacancyTop>
                    ))}
                <StyledVacancyTop>Опыт от 1-3года</StyledVacancyTop>
            </StyledVacancyCompany>
            <StyledVacancyTitle>
                {data.title} ( {POSITION[data.position as POSITION]} )
            </StyledVacancyTitle>
            <div className='df jcsb' style={{ marginTop: 10 }}>
                <StyledVacancySquare>{handlerSalary()} сом</StyledVacancySquare>
                <StyledVacancySquare>
                    <IconLocation /> {data.location}
                </StyledVacancySquare>
            </div>

            <StyledVacancyCardBtn className='df aie jcsb'>
                <p>Опубликовано 12.04.24</p>
                <PrimaryButton className='df aic'>
                    Посмотреть
                    <IconEyes />
                </PrimaryButton>
            </StyledVacancyCardBtn>
        </StyledCardVacancy>
    );
};

export default CardVacancy;

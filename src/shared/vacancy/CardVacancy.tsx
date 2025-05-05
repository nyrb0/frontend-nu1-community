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
    return (
        <StyledCardVacancy to={`${data.id}`}>
            <StyledVacancyCompany className='df aic'>
                <AvatarProfile width={40} height={40} />
                {data.user?.name}
                {data.user?.identification && <IconVerified />}
                <StyledVacancyTop>Удаленно</StyledVacancyTop>
                <StyledVacancyTop>Опыт от 1-3года</StyledVacancyTop>
            </StyledVacancyCompany>
            <StyledVacancyTitle>
                {data.title} ( {POSITION[data.position as POSITION]} )
            </StyledVacancyTitle>
            <div className='df jcsb' style={{ marginTop: 10 }}>
                <StyledVacancySquare>{data.salary || 'Договорная'}</StyledVacancySquare>
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

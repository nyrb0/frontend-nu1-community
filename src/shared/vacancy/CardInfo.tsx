import { IVacancy } from '../types/vacancy.types';
import AvatarProfile from '../UI/AvatarProfile';
import { StyledInfoVacancy, StyledVacancyDetail, StyledVacancyTitle, StyledVacancyTop } from './cardVacancy.styled';

const CardInfo = ({ info }: { info: IVacancy }) => {
    const format = {
        remote: true,
        office: true,
        hybrid: true,
    };
    const formatName = {
        remote: 'Удаленный',
        office: 'Офис',
        hybrid: 'Гибрид',
    };
    return (
        <StyledInfoVacancy>
            <div className='df aic' style={{ gap: 5 }}>
                <AvatarProfile width={40} height={40} src={info.user.avatarUrl} />
                <p>{info.user.name}</p>
            </div>
            <hr />
            <h2>
                {info.title} {`(${info.position})`}
            </h2>
            <StyledVacancyDetail>
                <span>Формат работы: </span>
                {Object.keys(format)
                    .filter(item => format[item as keyof typeof format])
                    .map(item => (
                        <StyledVacancyTop>{formatName[item as keyof typeof format]}</StyledVacancyTop>
                    ))}
            </StyledVacancyDetail>
            <StyledVacancyDetail>
                <span>График работы: </span> <p>5/2</p>
            </StyledVacancyDetail>
            <StyledVacancyDetail>
                <span>Рабочие часы: </span> <p>8</p>
            </StyledVacancyDetail>
            {format.office && (
                <StyledVacancyDetail>
                    <span>Локация:</span> <p>{info.location}</p>
                </StyledVacancyDetail>
            )}
            <StyledVacancyDetail>
                <span>Мы ищем:</span> <p>#Middle</p> <p>#Junior #Senior </p>
            </StyledVacancyDetail>

            <StyledVacancyDetail></StyledVacancyDetail>
            <p className='createdAt'>Опубликовано 12.04.24</p>
        </StyledInfoVacancy>
    );
};

export default CardInfo;

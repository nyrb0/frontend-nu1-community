import dayjs from 'dayjs';
import { POSITION } from '../types/roles';
import { IVacancy } from '../types/vacancy.types';
import AvatarProfile from '../UI/AvatarProfile';
import { StyledClickForVacancy, StyledInfoVacancy, StyledVacancyDetail, StyledVacancyTop } from './cardVacancy.styled';
import IconIdentification from '../UI/text-area/icon/IconIdentification';
import IconVerified from '../icons/IconVerified';
import IconHeartLike from '../icons/IconHeartLike';

const CardInfo = ({ info }: { info: IVacancy }) => {
    const format = {
        remote: info.remote,
        office: info.office,
        hybrid: info.hybrid,
    };
    const formatName = {
        remote: 'Удаленный',
        office: 'Офис',
        hybrid: 'Гибрид',
    };
    const handlerSalary = () => {
        if (info.salaryFrom && info.salaryTo) return `от ${info.salaryFrom} - ${info.salaryTo}`;
        if (info.salaryTo) return `до ${info.salaryTo}`;
        if (info.salaryFrom) return `от ${info.salaryFrom}`;
        else return `не указано`;
    };
    const formattedDate = dayjs(info.createdAt).format('DD.MM.YY HH:mm');

    return (
        <StyledInfoVacancy>
            <div className='df aic jcsb'>
                <div className='df aic' style={{ gap: 5 }}>
                    <AvatarProfile width={40} height={40} src={info.user.avatarUrl} />
                    <p>{info.user.name} </p> {info.user.identification && <IconVerified />}
                </div>
                <IconHeartLike isLike />
            </div>
            <hr />
            <h2>
                {info.title} {`(${POSITION[info.position as POSITION]})`}
            </h2>
            <StyledVacancyDetail>
                <span>Формат работы: </span>
                {Object.keys(format)
                    .filter(item => format[item as keyof typeof format])
                    .map(item => (
                        <StyledVacancyTop key={item}>{formatName[item as keyof typeof format]}</StyledVacancyTop>
                    ))}
            </StyledVacancyDetail>
            <StyledVacancyDetail>
                <span>График работы: </span> <p>{info.timeWork}</p>
            </StyledVacancyDetail>
            <StyledVacancyDetail>
                <span>Рабочие часы: </span> <p>{info.hourInDay}</p>
            </StyledVacancyDetail>
            {format.office && (
                <StyledVacancyDetail>
                    <span>Локация:</span> <p>{info.location}</p>
                </StyledVacancyDetail>
            )}
            <StyledVacancyDetail>
                <span>Мы ищем:</span> <p>{POSITION[info.position as POSITION]}</p>
            </StyledVacancyDetail>
            <StyledVacancyDetail>
                <span>Зарплата:</span> <p>{handlerSalary()} сом</p>
            </StyledVacancyDetail>
            <hr />

            <div className='df jcsb'>
                <StyledClickForVacancy>10 кандидат откликнулись</StyledClickForVacancy>
                <p className='createdAt'>Опубликовано {formattedDate}</p>
            </div>
        </StyledInfoVacancy>
    );
};

export default CardInfo;

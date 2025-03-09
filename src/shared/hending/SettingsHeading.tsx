import styled from 'styled-components';
import IconAnswer from '../../pages/settings/page/icon/IconAnswer';
import styles from '../DetailsPage.module.scss';

interface ISettingsHeading {
    heading: string;
    description: string;
    more?: boolean;

    isVisibleAnswer?: boolean;
}

const StyledHending = styled.div`
    width: 260px;
    & h3 {
        margin-bottom: 4px;
        font-weight: 700;
        color: var(--white-color);
    }
    & p {
        font-size: 12px;
        opacity: 0.6;
        font-weight: 300;
    }
    & p:last-child {
        opacity: 1;
        font-weight: 700;
        color: var(--normal);
        margin-top: 12px;
    }
`;
const SettingsHeading: React.FC<ISettingsHeading> = ({ more = false, heading, isVisibleAnswer = true, description }) => {
    return (
        <StyledHending>
            <div className={'df'} style={{ gap: 6 }}>
                <h3>{heading}</h3>
                {isVisibleAnswer && <IconAnswer />}
            </div>
            <p>{description}</p>
            <p>{more && 'Узнать подробно'}</p>
        </StyledHending>
    );
};

export default SettingsHeading;

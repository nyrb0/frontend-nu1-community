import IconAnswer from '../../icon/IconAnswer';
import styles from '../DetailsPage.module.scss';

interface ISettingsHeading {
    heading: string;
    description: string;
    more?: boolean;
}

const SettingsHeading: React.FC<ISettingsHeading> = ({ more = false, heading, description }) => {
    return (
        <div className={styles.left}>
            <div className={'df'} style={{ gap: 6 }}>
                <h3>{heading}</h3>
                <IconAnswer />
            </div>
            <p>{description}</p>
            <p>{more && 'Узнать подробно'}</p>
        </div>
    );
};

export default SettingsHeading;

import BlockArrow from '../auth/ui/BlockArrow';
import styles from './OtherPage.module.scss';

const OtherPage = () => {
    return (
        <div className={styles.other}>
            <h2>Другие</h2>
            <hr />
            <BlockArrow error='' onClick={() => null}>
                🛠️ Конфигурация
            </BlockArrow>
            <BlockArrow error='' onClick={() => null}>
                🔐 Безопасность
            </BlockArrow>
            <BlockArrow error='' onClick={() => null}>
                🔔Уведомление
            </BlockArrow>
            <BlockArrow error='' onClick={() => null}>
                🌏 Язык
            </BlockArrow>
        </div>
    );
};

export default OtherPage;

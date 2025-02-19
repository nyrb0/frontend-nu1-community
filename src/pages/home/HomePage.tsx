import PostEdit from '@/shared/profile/post-editor/PostEdit';
import Stories from './components/Story/Stories';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={`${styles.home} upperPadding`}>
            <h2>Home</h2>
            <Stories />
            <div className={styles.postEdit}>
                <PostEdit />
            </div>
        </div>
    );
};

export default HomePage;

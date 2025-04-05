import Stories from './components/Story/Stories';
import styles from './HomePage.module.scss';
import Recommended from './components/Recommended';
import PostEdit from '@/shared/post/post-editor/PostEdit';

const HomePage = () => {
    return (
        <div className={`${styles.home} upperPadding`}>
            <h2>Home</h2>
            <Stories />
            <div className={styles.postEdit}>
                <PostEdit />
            </div>
            <div className={styles.posts}>
                <Recommended />
            </div>
        </div>
    );
};

export default HomePage;

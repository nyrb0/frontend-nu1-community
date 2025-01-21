import { urlAvatar } from '@/shared/constants/urlAvatar';
import AvatarProfile from '../AvatarProfile';
import { StyledPost } from './posts.styled';

const Post = () => {
    return (
        <div>
            <div>
                <AvatarProfile width={60} height={60} src={urlAvatar} />
            </div>
            <StyledPost src={'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/avatarkorra.jpg'} />
        </div>
    );
};

export default Post;

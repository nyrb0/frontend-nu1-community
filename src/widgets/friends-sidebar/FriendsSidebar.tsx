import { StyledFriendsRecomend, StyledFriendsSidebar } from './friendsSidebar.styled';
import FriendBlock from './ui/FriendBlock';
import ArrowUp from './icon/arrow-up-icon.svg';

const FriendsSidebar = () => {
    return (
        <StyledFriendsSidebar>
            <StyledFriendsRecomend className={'df aic jcsb'}>
                <p>Рекемендуемые</p>
                <button className='df'>
                    Больше <img src={ArrowUp} alt='arrow-up icon' />
                </button>
            </StyledFriendsRecomend>
            <FriendBlock />
        </StyledFriendsSidebar>
    );
};

export default FriendsSidebar;

import { StyledFriendsRecomend, StyledFriendsSidebar } from './friendsSidebar.styled';
import FriendBlock from './ui/FriendBlock';
import ArrowUpIcon from './icon/ArrowUpIcon';
import { COLORS } from '@/shared/constants/colors';

const FriendsSidebar = () => {
    return (
        <StyledFriendsSidebar>
            <StyledFriendsRecomend className={'df aic jcsb'}>
                <p>Рекемендуемые</p>
                <button className='df'>
                    Больше <ArrowUpIcon fill={COLORS.NORMAL} />
                </button>
            </StyledFriendsRecomend>
            <FriendBlock />
        </StyledFriendsSidebar>
    );
};

export default FriendsSidebar;

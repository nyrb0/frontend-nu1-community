import AvatarProfile from '@/shared/profile/AvatarProfile';

import PlusIcon from '../icon/icon.svg';
import styled from 'styled-components';

export const StyledBlockFriends = styled.div`
    padding: 10px 0;
`;

export const StyledUsernameAndName = styled.p`
    text-align: center;
    & p:first-child {
        color: var(--color-white);
        font-weight: 700;
        font-size: 14px;
    }
    & p:last-child {
        font-weight: 300;
        font-size: 13px;
        color: #686868;
    }
`;

const FriendBlock = () => {
    return (
        <>
            <StyledBlockFriends className='df aic jcsb'>
                <AvatarProfile src={``} width={40} height={40} alt='avatar' />
                <StyledUsernameAndName>
                    <p>Name Names</p>
                    <p>@username</p>
                </StyledUsernameAndName>
                <button>
                    <img src={PlusIcon} alt='plus-icon' />
                </button>
            </StyledBlockFriends>
        </>
    );
};

export default FriendBlock;

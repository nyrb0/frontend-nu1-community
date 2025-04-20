import AvatarProfile from '@/shared/UI/AvatarProfile';

import PlusIcon from '../icon/icon.svg';
import styled from 'styled-components';
import { IUser } from '@/shared/types/user.types';
import { useNavigate } from 'react-router-dom';

export const StyledUsernameAndName = styled.div`
    text-align: center;
    cursor: pointer;
    p:first-child {
        color: var(--color-white);
        font-weight: 600;
        font-size: 14px;
    }
    p:last-child {
        padding-top: 3px;
        font-weight: 300;
        font-size: 13px;
        color: #686868;
    }
`;

const FriendBlock = ({ data }: { data: IUser }) => {
    const navigate = useNavigate();
    return (
        <div className='df aic jcsb'>
            <AvatarProfile src={data.avatarUrl} width={40} height={40} alt='avatar' onClick={() => navigate(`/profile/${data.username}`)} />
            <StyledUsernameAndName onClick={() => navigate(`/profile/${data.username}`)}>
                <p>{data.username}</p>
                <p>
                    {data.speciality} {data.positionRole && `[${data.positionRole}]`}
                </p>
            </StyledUsernameAndName>

            <button>
                <img src={PlusIcon} alt='plus-icon' />
            </button>
        </div>
    );
};

export default FriendBlock;

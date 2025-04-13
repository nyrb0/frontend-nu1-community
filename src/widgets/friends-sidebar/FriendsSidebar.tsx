import { StyledFriendsRecomend, StyledFriendsSidebar } from './friendsSidebar.styled';
import FriendBlock from './ui/FriendBlock';
import ArrowUpIcon from './icon/ArrowUpIcon';
import { COLORS } from '@/shared/constants/colors';
import { useEffect, useState } from 'react';
import { userService } from '@/shared/services/user.service';
import { IUser } from '@/shared/types/user.types';

const FriendsSidebar = () => {
    const [data, setData] = useState<IUser[]>([]);
    useEffect(() => {
        (async () => {
            const response = await userService.getAll();
            setData(response.data);
        })();
    }, []);

    return (
        <StyledFriendsSidebar>
            <StyledFriendsRecomend className={'df aic jcsb'}>
                <p>Рекомендуемые</p>
                <button className='df'>
                    Больше <ArrowUpIcon fill={COLORS.NORMAL} />
                </button>
            </StyledFriendsRecomend>
            {data &&
                data?.map(user => (
                    <div style={{ paddingTop: 15 }} key={user.id}>
                        <FriendBlock key={user.id} data={user} />
                    </div>
                ))}
        </StyledFriendsSidebar>
    );
};

export default FriendsSidebar;

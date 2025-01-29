import styled from 'styled-components';
import AvatarProfile from '../../AvatarProfile';
import NoNameAvatar from '@/assets/user_noname.png';

interface IPeople {
    data: {
        id: string;
        identification: boolean;
        username: string;
        name?: string;
        lastName?: string;
        avatarUrl: string;
    };

    onClick: (value: string) => void;
}

const StyledUsername = styled.div`
    p:first-child {
        display: inline-block;
        font-weight: 700;
        font-size: 13px;
        color: var(--white-color);
    }
    p:last-child {
        margin-top: 3px;
        font-weight: 400;
        font-size: 11px;
        color: #686868;
    }
`;

const People: React.FC<IPeople> = ({ data, onClick }) => {
    return (
        <div className='df aic' style={{ gap: 8 }} onClick={() => onClick(data.username)}>
            <AvatarProfile width={35} height={35} src={NoNameAvatar} />
            <StyledUsername>
                <p>
                    {data.lastName}hbshdfv {data.name}{' '}
                </p>
                <p>@{data.username}</p>
            </StyledUsername>
        </div>
    );
};

export default People;

import AvatarProfile from '@/shared/profile/AvatarProfile';
import styled from 'styled-components';

const StyledPerson = styled.div`
    height: 65px;

    & p:first-child {
        font-weight: 600;
        font-size: 14px;
        color: var(--color-white);
        margin-bottom: 4px;
    }

    & p:last-child {
        font-weight: 400;
        font-size: 14px;
        color: #3f3f3f;
    }

    .notification_time {
        font-weight: 400;
        font-size: 14px;

        color: #d3d3d3;
    }
    width: 100%;
    & hr {
        border: none;
        height: 1px;
        background-color: #f2f2f2;
        transform: scaleY(0.5);
    }
`;

interface INotificationPersons {
    data: {
        user: {
            lastname: string;
            name: string;
        };

        notificationText: string;
        createdAt: string;
    };
}
const NotificationPersons: React.FC<INotificationPersons> = ({ data }) => {
    return (
        <StyledPerson className={'df fdc'}>
            <div className='df aic' style={{ gap: 15 }}>
                <AvatarProfile src='' width={44} height={44} />

                <div style={{ width: '100%' }}>
                    <p>{data.user.name}</p>
                    <div className='df jcsb'>
                        <p>{data.notificationText}</p>
                        <p className='notification_time'>1м назад</p>
                    </div>
                </div>
            </div>

            <div>
                <hr />
            </div>
        </StyledPerson>
    );
};

export default NotificationPersons;

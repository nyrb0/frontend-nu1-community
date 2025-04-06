import AvatarProfile from '@/shared/UI/AvatarProfile';
import {
    StyledHeaderEdits,
    StyledHeaderImage,
    StyledHeaderUsername,
    StyledProfileComeBack,
    StyledProfileHeaderButtons,
    StylesHeaderDescription,
} from './headerProfile.styled';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import { useProfileQuery } from '@/feature/user/user';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ComeBack from '@/shared/UI/come-back';
import IconsEdit from './icons/IconsEdit';
import IconsShare from './icons/IconsShare';
import SubscribeButton from '@/shared/UI/SubscribeButton';

interface IHeaderProfile {
    isOwner?: boolean;
}

const HeaderProfile: React.FC<IHeaderProfile> = ({ isOwner }) => {
    const { username } = useParams<{ username: string }>();
    const navigate = useNavigate();
    const location = useLocation();

    const isLocationEditPage = location.pathname.includes('/edit');

    if (!username) throw new Error('not param username');
    const { data: user } = useProfileQuery({ username });
    if (!user) return null;

    return (
        <div>
            <StyledHeaderImage>
                <StyledProfileComeBack>
                    <ComeBack toNavigate={'/'}>{username}</ComeBack>
                    <span className='df jcc'>{user?._count.publication} постов</span>
                </StyledProfileComeBack>
            </StyledHeaderImage>
            <StyledHeaderEdits className={'df aic jcsb'}>
                <div className={'df aic'}>
                    <AvatarProfile src={user?.avatarUrl ? `${baseUrlAws}/${user?.avatarUrl}` : ''} alt='avatar' />
                    <StyledHeaderUsername>
                        <p>@{user?.username}</p>
                        <p>{user?.name && user.lastName && `${user?.name} ${user?.lastName}`}</p>
                    </StyledHeaderUsername>
                </div>
                <StyledProfileHeaderButtons className='df'>
                    {isOwner ? (
                        <PrimaryButton
                            color={COLORS.WHITE}
                            background={COLORS.NORMAL}
                            onClick={() => navigate('edit')}
                            type='button'
                            className='df aic'
                            style={{ gap: 14 }}
                        >
                            {isLocationEditPage ? (
                                <button className='df aic' style={{ gap: 10 }}>
                                    Посмотреть профиль
                                    <svg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M15.5383 7.66327L9.91328 13.2883C9.73716 13.4644 9.49829 13.5633 9.24922 13.5633C9.00015 13.5633 8.76128 13.4644 8.58516 13.2883C8.40904 13.1121 8.31009 12.8733 8.31009 12.6242C8.31009 12.3751 8.40904 12.1363 8.58516 11.9601L12.6094 7.93748H1.125C0.87636 7.93748 0.637903 7.83871 0.462087 7.6629C0.286272 7.48708 0.1875 7.24862 0.1875 6.99998C0.1875 6.75134 0.286272 6.51289 0.462087 6.33707C0.637903 6.16126 0.87636 6.06248 1.125 6.06248H12.6094L8.58672 2.03748C8.4106 1.86136 8.31166 1.62249 8.31166 1.37342C8.31166 1.12435 8.4106 0.88548 8.58672 0.709359C8.76284 0.533239 9.00171 0.434296 9.25078 0.434296C9.49985 0.434296 9.73872 0.533239 9.91484 0.709359L15.5398 6.33436C15.6273 6.42157 15.6966 6.5252 15.7438 6.63928C15.7911 6.75336 15.8153 6.87566 15.8152 6.99914C15.815 7.12262 15.7905 7.24485 15.743 7.35883C15.6955 7.4728 15.6259 7.57626 15.5383 7.66327Z'
                                            fill='white'
                                        />
                                    </svg>
                                </button>
                            ) : (
                                <>
                                    <IconsEdit />
                                    Редактировать
                                </>
                            )}
                        </PrimaryButton>
                    ) : (
                        <SubscribeButton isSubs={true} id={username} />
                    )}
                    <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} type='button' className='df aic' style={{ gap: 14 }}>
                        <IconsShare />
                        Поделиться
                    </PrimaryButton>
                </StyledProfileHeaderButtons>
            </StyledHeaderEdits>
            <StylesHeaderDescription>{user.description}</StylesHeaderDescription>
        </div>
    );
};

export default HeaderProfile;

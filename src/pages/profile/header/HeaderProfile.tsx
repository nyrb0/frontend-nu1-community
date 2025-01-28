import AvatarProfile from '@/shared/profile/AvatarProfile';
import { StyledHeaderEdits, StyledHeaderImage, StyledHeaderUsername, StyledProfileHeaderButtons } from './headerProfile.styled';
import { baseUrlAws } from '@/shared/constants/baseUrlAws';
import { useProfileQuery } from '@/feature/user/user';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';

import EditIcon from './icons/edit-icon.svg';
import ShareIcon from './icons/share-icon.svg';

const HeaderProfile = () => {
    const { data: user } = useProfileQuery();
    return (
        <div>
            <StyledHeaderImage></StyledHeaderImage>
            <StyledHeaderEdits className={'df aic jcsb'}>
                <div className={'df aic'}>
                    <AvatarProfile src={user?.avatarUrl ? `${baseUrlAws}/${user?.avatarUrl}` : ''} alt='avatar' />
                    <StyledHeaderUsername>
                        <p>{user?.name && user.lastName ? `${user?.name} ${user?.lastName}` : 'Неизвестно'}</p>
                        <p>@{user?.username}</p>
                    </StyledHeaderUsername>
                </div>
                <StyledProfileHeaderButtons className='df'>
                    <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} type='submit' className='df aic' style={{ gap: 14 }}>
                        <img src={EditIcon} alt='edit icon' />
                        Редактировать
                    </PrimaryButton>
                    <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} type='submit' className='df aic' style={{ gap: 14 }}>
                        <img src={ShareIcon} alt='share icon' />
                        Поделиться
                    </PrimaryButton>
                </StyledProfileHeaderButtons>
            </StyledHeaderEdits>
        </div>
    );
};

export default HeaderProfile;

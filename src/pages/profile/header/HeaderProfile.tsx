import AvatarProfile from '@/shared/profile/AvatarProfile';
import { StyledHeaderEdits, StyledHeaderImage, StyledHeaderUsername } from './headerProfile.styled';
import { urlAvatar } from '@/shared/constants/urlAvatar';
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
                    <AvatarProfile src={urlAvatar} alt='avatar' />
                    <StyledHeaderUsername>
                        <p>Нурболот</p>
                        <p>@{user?.username}</p>
                    </StyledHeaderUsername>
                </div>
                <div className='df' style={{ gap: 15, height: 40 }}>
                    <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} type='submit' className='df aic' style={{ gap: 14 }}>
                        <img src={EditIcon} alt='edit icon' />
                        Редактировать
                    </PrimaryButton>
                    <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} type='submit' className='df aic' style={{ gap: 14 }}>
                        <img src={ShareIcon} alt='share icon' />
                        Поделиться
                    </PrimaryButton>
                </div>
            </StyledHeaderEdits>
        </div>
    );
};

export default HeaderProfile;

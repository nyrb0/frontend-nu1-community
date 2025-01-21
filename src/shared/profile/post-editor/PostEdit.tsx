import TextAreaPost from '../UI/TextAreaPost';
import { StyledPostButtons, StyledPostEditBackgroundInner, StyledPostEditBackgroundOut, StyledPostEditTextArea } from './postEdit.styled';
import PersonIcon from '../UI/icon/person.svg';
import PictureIcon from '../UI/icon/picture-icon.svg';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';

const PostEdit = () => {
    return (
        <StyledPostEditBackgroundOut>
            <StyledPostEditBackgroundInner>
                <div>
                    <TextAreaPost placeholder={'Пишите что-нибудь'} />
                </div>
                <StyledPostEditTextArea className='df aic'>
                    <img src={PersonIcon} alt='person-icon' />
                    <img src={PictureIcon} alt='person-icon' />
                </StyledPostEditTextArea>
            </StyledPostEditBackgroundInner>

            <StyledPostButtons className={'df jce'}>
                <span className='df'>
                    <PrimaryButton color={COLORS.WHITE} background={COLORS.TRANSPARENT}>
                        Позже
                    </PrimaryButton>
                    <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} borderRadios={'5px'}>
                        Опубликавать
                    </PrimaryButton>
                </span>
            </StyledPostButtons>
        </StyledPostEditBackgroundOut>
    );
};

export default PostEdit;

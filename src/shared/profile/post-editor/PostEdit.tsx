import TextAreaPost from '../UI/TextAreaPost';
import IconPerson from '../UI/icon/IconPerson';
import IconPicture from '../UI/icon/IconPicture';
import { StyledPostButtons, StyledPostEditBackgroundInner, StyledPostEditBackgroundOut, StyledPostEditTextArea } from './postEdit.styled';
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
                    <IconPerson />
                    <IconPicture />
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

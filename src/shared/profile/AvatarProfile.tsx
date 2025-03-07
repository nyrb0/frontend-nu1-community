import styled from 'styled-components';
import NoNameAvatar from '@/assets/user_noname.png';
import { baseUrlAws } from '../constants/baseUrlAws';

interface IAvatarProfile extends React.ImgHTMLAttributes<HTMLImageElement> {
    width?: number;
    height?: number;
    src?: string;
    url?: string;
}
const StyledHeaderAvatar = styled.img<IAvatarProfile>`
    border-radius: 50%;
    width: ${({ width }) => `${width || 60}px`};
    height: ${({ height }) => `${height || 60}px`};
`;
const AvatarProfile: React.FC<IAvatarProfile> = ({ src, width, height, url, ...props }) => {
    return (
        <StyledHeaderAvatar width={width} height={height} src={url ? `${baseUrlAws}/${url}` : src || NoNameAvatar} {...props}></StyledHeaderAvatar>
    );
};

export default AvatarProfile;

import styled from 'styled-components';

interface IAvatarProfile extends React.ImgHTMLAttributes<HTMLImageElement> {
    width?: number;
    height?: number;
}
const StyledHeaderAvatar = styled.img<IAvatarProfile>`
    border-radius: 50%;
    width: ${({ width }) => `${width || 60}px`};
    height: ${({ height }) => `${height || 60}px`};
`;
const AvatarProfile: React.FC<IAvatarProfile> = ({ width, height, ...props }) => {
    return <StyledHeaderAvatar width={width} height={height} {...props}></StyledHeaderAvatar>;
};

export default AvatarProfile;

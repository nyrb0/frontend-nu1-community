import styled from 'styled-components';

export const StyledAvatar = styled.img<{ width: string; height: string }>`
    border-radius: 50%;
    width: ${({ width }) => `${width || 60}px`};
    height: ${({ height }) => `${height || 60}px`};
`;

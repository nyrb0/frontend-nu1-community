import styled from 'styled-components';

interface IStyles {
    background?: string;
    color?: string;
    radius: string;
}

const StyledPrimaryButton = styled.button<Partial<IStyles>>`
    color: ${({ color }) => color || 'var(--white-color)'};
    border-radius: ${({ borderadios }) => borderadios};
    width: 100%;
    height: 100%;
    background: ${({ background }) => background || 'var(--normal)'};
    box-sizing: border-box;
    padding: 0 17px;
    box-sizing: border-box;
    text-align: center;
`;

interface IStyledPrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement>, Partial<IStyles> {
    children: React.ReactNode;
}

const PrimaryButton: React.FC<IStyledPrimaryButton> = ({ children, radius = '18px', background, color = '#fff', ...props }) => {
    return (
        <StyledPrimaryButton background={background} borderadios={radius} color={color} {...props}>
            {children}
        </StyledPrimaryButton>
    );
};

export default PrimaryButton;

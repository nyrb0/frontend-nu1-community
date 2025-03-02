import styled from 'styled-components';

interface IStyles {
    background: string;
    color: string;
    radius: string;
}

const StyledPrimaryButton = styled.button<Partial<IStyles>>`
    color: ${({ color }) => color};
    border-radius: ${({ borderadios }) => borderadios};
    width: 100%;
    height: 100%;
    background: ${({ background }) => background};
    box-sizing: border-box;
    padding: 0 17px;
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

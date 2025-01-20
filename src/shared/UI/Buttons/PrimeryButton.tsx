import styled from 'styled-components';

interface IStyles {
    background: string;
    color: string;
}

const StyledPrimaryButton = styled.button<IStyles>`
    color: ${({ color }) => color};
    border-radius: 18px;
    width: 100%;
    height: 100%;
    background: ${({ background }) => background};
    box-sizing: border-box;
    padding: 0 17px;
`;

interface IStyledPrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    background: string;
    color?: string;
}

const PrimaryButton: React.FC<IStyledPrimaryButton> = ({ children, background, color = '#fff', ...props }) => {
    return (
        <StyledPrimaryButton background={background} color={color} {...props}>
            {children}
        </StyledPrimaryButton>
    );
};

export default PrimaryButton;

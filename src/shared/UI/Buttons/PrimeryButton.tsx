import styled from 'styled-components';

interface IStyles {
    background: string;
    color: string;
    borderRadios: string;
}

const StyledPrimaryButton = styled.button<IStyles>`
    color: ${({ color }) => color};
    border-radius: ${({ borderRadios }) => borderRadios};
    width: 100%;
    height: 100%;
    background: ${({ background }) => background};
    box-sizing: border-box;
    padding: 0 17px;
`;

interface IStyledPrimaryButton extends React.ButtonHTMLAttributes<HTMLButtonElement>, Partial<IStyles> {
    children: React.ReactNode;
    background: string;
    color: string;
    borderRadios?: string;
}

const PrimaryButton: React.FC<IStyledPrimaryButton> = ({ children, borderRadios = '18px', background, color = '#fff', ...props }) => {
    return (
        <StyledPrimaryButton background={background} borderRadios={borderRadios} color={color} {...props}>
            {children}
        </StyledPrimaryButton>
    );
};

export default PrimaryButton;

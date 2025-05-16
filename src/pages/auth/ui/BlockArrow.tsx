import styled from 'styled-components';

interface IBlock extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isVisibilityArrow?: boolean;
    error?: string;
}

const StyledButton = styled.button`
    color: var(--white-color);
    font-size: 16px;

    background-color: var(--background-color1);
    width: 100%;
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 5px;
    border-radius: 7px;
    scale: 0.97;
    transition: scale 0.4s ease-in-out;

    & svg {
        transition: transform 0.4s ease-in-out;
        transform: translateX(10px);
    }
    &:hover {
        scale: 1;
        & svg {
            transform: translateX(30px);
        }
    }
`;

const StyledErrorText = styled.p`
    font-size: 12px;
    padding-top: 3px;
    color: red;
`;

const BlockArrow: React.FC<IBlock> = ({ error, children, type = 'button', isVisibilityArrow = true, ...props }) => {
    return (
        <>
            <StyledButton {...props} className={'df jcsb aic'} type={type}>
                {children}
                {isVisibilityArrow && (
                    <svg width='25' height='23' viewBox='0 0 5 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M0.5 7L3.5 4L0.5 1' stroke='var(--white-color)' />
                    </svg>
                )}
            </StyledButton>
            <StyledErrorText>{error}</StyledErrorText>
        </>
    );
};

export default BlockArrow;

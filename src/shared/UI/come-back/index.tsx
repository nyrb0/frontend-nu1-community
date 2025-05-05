import { useNavigate } from 'react-router-dom';
import IconComeBack from './icon/IconComeBack';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-weight: 600;
    font-size: 20px;
    color: var(--color-white);
    cursor: pointer;

    svg {
        background-color: var(--background-color1);
        padding: 5px 10px 3px 10px;
        border-radius: 8px;
    }
`;

interface IComeBack {
    children: React.ReactNode;
    toNavigate?: string;
    customNavigate?: () => void;
}

const ComeBack: React.FC<IComeBack> = ({ children, toNavigate, customNavigate }) => {
    const navigate = useNavigate();
    return (
        <StyledButton className='df aic' style={{ gap: 10 }}>
            <IconComeBack
                onClick={() => {
                    if (customNavigate) {
                        customNavigate();
                        return;
                    }
                    if (toNavigate) navigate(toNavigate);
                    else navigate(-1);
                }}
            />
            <p>{children}</p>
        </StyledButton>
    );
};

export default ComeBack;

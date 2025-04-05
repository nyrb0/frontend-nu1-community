import { useNavigate } from 'react-router-dom';
import IconComeBack from './icon/IconComeBack';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-weight: 600;
    font-size: 20px;
    color: var(--color-white);
    cursor: pointer;
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

import { useNavigate } from 'react-router-dom';
import IconComeBack from './icon/IconComeBack';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-weight: 700;
    font-size: 20px;
    color: var(--color-white);
`;

interface IComeBack {
    children: React.ReactNode;
}

const ComeBack: React.FC<IComeBack> = ({ children }) => {
    const navigate = useNavigate();
    return (
        <StyledButton className='df aic' style={{ gap: 14 }}>
            <IconComeBack onClick={() => navigate(-1)} />
            {children}
        </StyledButton>
    );
};

export default ComeBack;

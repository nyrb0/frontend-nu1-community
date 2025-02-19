import styled from 'styled-components';

const StyledContainer = styled.div`
    user-select: none;
    padding: 2px;
    position: relative;
    font-size: 18px;
    width: 20px;
    height: 10px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 30px;
`;

const StyledButton = styled.div`
    position: absolute;
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);
    background: var(--normal);
    height: 14px;
    width: 14px;
    border-radius: 50%;
`;
interface ISwitch {
    onChange: (b: boolean) => void;
    value: boolean;
}

const Switch: React.FC<ISwitch> = ({ value, onChange }) => {
    return (
        <StyledContainer onClick={() => onChange(value)} style={{ background: value ? '' : 'var(--background-color1)' }}>
            <StyledButton style={value ? { right: '8px' } : { left: '8px' }}></StyledButton>
        </StyledContainer>
    );
};

export default Switch;

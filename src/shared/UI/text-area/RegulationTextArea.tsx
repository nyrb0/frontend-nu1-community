import styled from 'styled-components';

const StyledTextArea = styled.textarea`
    border: 1px solid #cbd5e1;
    border-radius: 24px;
    padding: 12px;
    width: 100%;
    outline: none;
    min-height: 100px;
    background-color: transparent;
    font-size: 14px;
    color: var(--white-color);
    font-weight: 500;
    box-sizing: border-box;
    padding-bottom: 20px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const StyledLength = styled.p`
    position: absolute;
    bottom: -20px;
    left: 10px;
    font-size: 12px;
`;

const StyledArea = styled.div`
    background-color: var(--background-color1);
    padding: 20px;
    position: relative;
    margin-bottom: 20px;
    border-radius: 10px;
`;

interface IRegulationTextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    maxWidth?: number | string;
    maxHeight?: number | string;
    value: string | undefined;
    children?: React.ReactNode;
}

const RegulationTextArea: React.FC<IRegulationTextArea> = ({ value, maxWidth, children, maxHeight = 300, ...props }) => {
    return (
        <StyledArea>
            <StyledTextArea {...props} style={{ maxWidth, minWidth: maxWidth, maxHeight }} />
            <StyledLength>{value?.length || 0}/300</StyledLength>
            {children}
        </StyledArea>
    );
};

export default RegulationTextArea;

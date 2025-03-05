import { TextareaHTMLAttributes } from 'react';
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

interface IRegulationTextArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    maxWidth?: number;
    maxHeight?: number;
    value: string;
}

const RegulationTextArea: React.FC<IRegulationTextArea> = ({ value, maxWidth, maxHeight = 300, ...props }) => {
    return (
        <div style={{ position: 'relative', marginBottom: 20 }}>
            <StyledTextArea {...props} style={{ maxWidth, minWidth: maxWidth, maxHeight }} />
            <StyledLength>{value.length}/300</StyledLength>
        </div>
    );
};

export default RegulationTextArea;

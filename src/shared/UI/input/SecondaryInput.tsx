import { forwardRef } from 'react';
import styled from 'styled-components';

interface IAuthInput extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const StyledAuthInput = styled.input`
    border-radius: 4px;
    width: 100%;
    height: 40px;
    background: var(--background-color3);
    margin-top: 6px;
    padding: 0 10px;
    box-sizing: border-box;
    color: var(--white-color);
`;

const StyledErrorText = styled.p`
    font-size: 12px;
    padding-top: 3px;
    color: red;
`;

const StyledAuthLabel = styled.label`
    font-weight: 400;
    font-size: 14px;
    color: var(--white-color);
`;

const InputSecondary = forwardRef<HTMLInputElement, IAuthInput>(({ label, error, ...props }, ref) => {
    return (
        <div>
            <StyledAuthLabel>{label}</StyledAuthLabel>
            <StyledAuthInput {...props} ref={ref} />
            <StyledErrorText>{error}</StyledErrorText>
        </div>
    );
});

export default InputSecondary;

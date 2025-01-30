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
    background: #333232;
    margin-top: 6px;
    padding: 0 10px;
    box-sizing: border-box;
    color: var(--white-color);
`;

const StyledAuthLabel = styled.label`
    font-weight: 400;
    font-size: 14px;
    color: var(--white-color);
`;

const AuthInput = forwardRef<HTMLInputElement, IAuthInput>(({ label, error, ...props }, ref) => {
    return (
        <>
            <StyledAuthLabel>{label}</StyledAuthLabel>
            <StyledAuthInput {...props} ref={ref} />
            <p>{error}</p>
        </>
    );
});

export default AuthInput;

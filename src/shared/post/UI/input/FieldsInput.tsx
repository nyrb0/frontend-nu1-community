import styled from 'styled-components';
import IconEmail from './icon/IconEmail';
import IconPerson from './icon/IconPerson';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { forwardRef } from 'react';

interface IFieldsInput extends React.InputHTMLAttributes<HTMLInputElement> {
    field?: string;
    width: number | string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors?: string | undefined;
}

const StyledContainer = styled.div`
    position: relative;
    & span {
        position: absolute;
        left: 10px;
        bottom: 12px;
    }
    & p {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 8px;
    }
    .fields_error {
        margin-top: 20px;
    }
`;

const StyledInput = styled.input`
    max-width: 350px;
    width: 100%;
    font-size: 13px;
    font-weight: 500;
    padding: 13px 13px 13px 40px;
    box-sizing: border-box;
    height: 48px;
    cursor: pointer;
    border: 1px solid #cbd5e1;
    border-radius: 123px;
    color: var(--white-color);
    font-weight: 600;

    &::placeholder {
        color: var(--white-color);
        opacity: 0.3;
        font-weight: 400;
    }
`;

const FieldsInput: React.FC<IFieldsInput> = forwardRef(({ field, type, errors, width, onChange, ...props }) => {
    return (
        <div>
            <StyledContainer style={{ width }}>
                <p>{field}</p>

                {type === 'tel' ? ( // Используем 'tel' вместо 'number'
                    <PhoneInput
                        country={'kg'}
                        value={props.value as string}
                        onChange={phone => {
                            if (onChange) {
                                onChange({ target: { value: phone } } as React.ChangeEvent<HTMLInputElement>);
                            }
                        }}
                        inputStyle={{
                            width: '100%',
                            height: '50px',
                            fontSize: '16px',
                            borderRadius: '123px',
                            border: '1px solid #ccc',
                            backgroundColor: 'transparent',
                            color: 'var(--white-color)',
                            fontWeight: 600,
                            paddingLeft: '50px',
                        }}
                        buttonStyle={{
                            backgroundColor: 'transparent',
                            border: '1px dashed #ccc',
                            borderRadius: '123px 0 0 123px',
                            borderRight: '1px solid #ccc',
                            cursor: 'pointer',
                        }}
                        dropdownStyle={{
                            borderRadius: '8px',
                            fontSize: '14px',
                            backgroundColor: 'transparent',
                            width: '350px',
                        }}
                        containerStyle={{
                            width: '350px',
                        }}
                    />
                ) : (
                    <>
                        <StyledInput type={type} onChange={onChange} {...props} />
                        <span>
                            {type === 'email' && <IconEmail />}
                            {type === 'text' && <IconPerson />}
                        </span>
                    </>
                )}
            </StyledContainer>
            <div style={{ fontSize: 11, fontWeight: 300, marginTop: 5, color: 'red' }}>{errors}</div>
        </div>
    );
});

export default FieldsInput;

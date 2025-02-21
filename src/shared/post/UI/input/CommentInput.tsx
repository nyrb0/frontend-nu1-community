import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid #cbd5e1;
    border-radius: 123px;
    padding: 8px 12px;
    height: 40px;
    min-height: 40px;
    box-sizing: border-box;
    min-width: 400px;
    max-width: 400px;
    color: var(--white-color);
    font-weight: 500;
    font-size: 12px;
`;

interface ICommentInput extends React.InputHTMLAttributes<HTMLInputElement> {}

const CommentInput: React.FC<ICommentInput> = ({ placeholder = 'Пишишите свой комментарии...', ...props }) => {
    return <StyledInput {...props} type={'text'} placeholder={placeholder} />;
};

export default CommentInput;

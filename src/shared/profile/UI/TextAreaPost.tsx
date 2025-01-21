import styled from 'styled-components';

interface ITextAreaPost extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const StyledTextAreaPost = styled.textarea`
    background-color: transparent;
    width: 100%;
    min-height: 90px;
    color: var(--white-color);
    font-weight: 500;
    border-radius: 7px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
    border: none;
    &:focus {
        outline: none;
    }
`;

const TextAreaPost: React.FC<ITextAreaPost> = ({ ...props }) => {
    return <StyledTextAreaPost {...props} />;
};
export default TextAreaPost;

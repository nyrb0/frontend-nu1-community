import styled from 'styled-components';

interface ITextAreaPost extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    height?: string;
    width?: string;
}

const StyledTextAreaPost = styled.textarea`
    background-color: transparent;
    color: var(--white-color);
    width: ${props => (props.width ? props.width : '100%')};
    min-height: 120px;
    height: ${props => (props.height ? props.height : '120px')};
    font-weight: 500;
    border-radius: 7px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
    border: none;
    resize: none;
    &:focus {
        outline: none;
    }
    &::-webkit-scrollbar {
        display: none;
    }
`;

const TextAreaPost: React.FC<ITextAreaPost> = ({ height, width, ...props }) => {
    return <StyledTextAreaPost {...props} height={height} width={width} />;
};
export default TextAreaPost;

import styled from 'styled-components';

interface IHashTagText {
    data?: string;
    onHashtagClick: (hashtag: string) => void;
}

const StyledHashTag = styled.span`
    color: var(--normal);
    font-weight: 500;
`;
const HashtagText: React.FC<IHashTagText> = ({ data, onHashtagClick }) => {
    const hashtagRegex = /#(\w+)/g;

    const processedText = data?.split(/(\s+)/).map((part, index) =>
        part.match(hashtagRegex) ? (
            <StyledHashTag key={index} className='hashtag' onClick={() => onHashtagClick(part)}>
                {part}
            </StyledHashTag>
        ) : (
            part
        )
    );

    return <p>{processedText}</p>;
};

export default HashtagText;

import styled from 'styled-components';

interface IHashTagText {
    data?: string;
    onHashtagClick: (hashtag: string) => void;
    onMentionClick: (mation: string) => void;
}

const StyledHashTag = styled.span`
    color: var(--normal);
    font-weight: 500;
`;

const StyledMention = styled.span`
    color: #8989ff;
    font-weight: 400;
    cursor: pointer;
`;

const StyledText = styled.div`
    font-size: 14px;
`;

const HashtagText: React.FC<IHashTagText> = ({ data, onHashtagClick, onMentionClick }) => {
    const hashtagRegex = /#(\w+)/g;
    const mentionRegex = /@(\w+)/g;

    const processedText = data?.split(/(\s+)/).map((part, index) => {
        if (part.match(hashtagRegex)) {
            return (
                <StyledHashTag key={index} onClick={() => onHashtagClick(part)}>
                    {part}
                </StyledHashTag>
            );
        }
        if (part.match(mentionRegex)) {
            return (
                <StyledMention key={index} onClick={() => onMentionClick(part)}>
                    {part}
                </StyledMention>
            );
        }
        return part;
    });

    return <StyledText>{processedText}</StyledText>;
};

export default HashtagText;

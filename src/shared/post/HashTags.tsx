import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IHashTagText {
    data?: string;
    onHashtagClick?: (hashtag: string) => void;
    onMentionClick?: (mation: string) => void;
}

const StyledHashTag = styled.span`
    color: var(--normal);
    font-weight: 600;
`;

const StyledMention = styled.span`
    color: #8989ff;
    font-weight: 400;
    cursor: pointer;
`;

const StyledText = styled.div`
    font-size: 12.5px;
    font-weight: 300;
    word-break: break-all;
    width: 98%;
`;

const HashtagText: React.FC<IHashTagText> = ({ data, onHashtagClick, onMentionClick }) => {
    const hashtagRegex = /#([a-zA-Zа-яА-ЯёЁ0-9_]+)/g;
    const mentionRegex = /@(\w+)/g;
    const navigate = useNavigate();

    const handleHashTag = (part: any) => {
        if (onHashtagClick) {
            onHashtagClick(part);
        }
        alert(part);
    };
    const handleMention = (part: any) => {
        const username = part.split('@').join('');
        if (onMentionClick) {
            onMentionClick(part);
        }
        navigate(`/profile/${username}`);
    };

    const processedText = data?.split(/(\s+)/).map((part, index) => {
        if (part.match(hashtagRegex)) {
            return (
                <StyledHashTag key={index} onClick={() => handleHashTag(part)}>
                    {part}
                </StyledHashTag>
            );
        }
        if (part.match(mentionRegex)) {
            return (
                <StyledMention key={index} onClick={() => handleMention(part)}>
                    {part}
                </StyledMention>
            );
        }
        return part;
    });

    return <StyledText>{processedText}</StyledText>;
};

export default HashtagText;

import styled from 'styled-components';

const StyledStory = styled.div`
    & img {
        width: 76px;
        height: 91px;
        border-radius: 8px;
        object-fit: cover;
    }

    & p {
        font-size: 12px;
        font-weight: 500;
    }
`;

interface IStoryBlock {
    src: string;
    username: string;
}

const StoryBlock: React.FC<IStoryBlock> = ({ src, username }) => {
    return (
        <StyledStory>
            <img src={src} alt={username} />
            <p className='df jcc'>{username}</p>
        </StyledStory>
    );
};

export default StoryBlock;

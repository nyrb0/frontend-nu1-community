import styled from 'styled-components';
import ParseText from '../UI/text-editor/ParseText';

interface IContentDescription {
    description: string;
}

const StyledContent = styled.div`
    margin-top: 12px;
    background-color: var(--background-color1);
    border-radius: 8px;
    padding: 20px 10px;
    box-sizing: border-box;
    line-height: 25px;
    h2 {
        padding-bottom: 30px;
    }
`;

const ContentDescription = ({ description }: IContentDescription) => {
    return (
        <StyledContent>
            <h2>Описание вакансии:</h2>
            <ParseText html={description} />
        </StyledContent>
    );
};

export default ContentDescription;

import styled from 'styled-components';

interface ITagUserBlock {
    data: string;
    onDelete: () => void;
}

const StyledTagUsername = styled.div`
    padding: 5px 10px;
    border-radius: 7px;
    font-size: 12px;
    background-color: var(--normal);
    display: flex;
    gap: 12px;
    & span {
        cursor: pointer;
    }
`;
const TagUserBlock: React.FC<ITagUserBlock> = ({ data, onDelete }) => {
    return (
        <StyledTagUsername>
            @{data}
            <span onClick={onDelete}>x</span>
        </StyledTagUsername>
    );
};

export default TagUserBlock;

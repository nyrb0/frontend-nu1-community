import styled from 'styled-components';
import { listsFilterPosts } from './ListFilter';

const StyledPostFilter = styled.li<{ isSelected: boolean }>`
    padding-bottom: 8px;
    border-bottom: 4px solid ${({ isSelected }) => (isSelected ? 'var(--normal)' : 'transparent')};
    font-weight: 900;
    cursor: pointer;
`;

export const StyledLine = styled.hr`
    border-bottom: 1px solid var(--white-color);
    opacity: 0.6;
    transform: translateY(-11px);
    position: relative;
    z-index: -1;
`;

interface IFilterPosts {
    data: string;
    onChange: (value: string) => void;
}

const FilterPosts: React.FC<IFilterPosts> = ({ data, onChange }) => {
    return (
        <>
            <ul className='df jcsb'>
                {listsFilterPosts.map(list => (
                    <StyledPostFilter onClick={() => onChange(list.name)} key={list.name} isSelected={list.name === data}>
                        {list.name}
                    </StyledPostFilter>
                ))}
            </ul>
            <StyledLine />
        </>
    );
};

export default FilterPosts;

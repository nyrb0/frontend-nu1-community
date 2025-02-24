import styled from 'styled-components';

const StyledAdd = styled.button`
    max-width: 76px;
    width: 100%;
    height: 91px;
    background-color: var(--background-color1);
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    color: var(--color-white);
`;

const AddStory = () => {
    return (
        <StyledAdd className='df aic jcc'>
            <div>
                <p style={{ fontSize: 20 }}>+</p>
                <p>Добавить сторис</p>
            </div>
        </StyledAdd>
    );
};

export default AddStory;

import styled from 'styled-components';
import PrimaryButton from './PrimeryButton';

const StyledCarousel = styled.div`
    p {
        padding-bottom: 5px;
        font-size: 14px;
    }
    span {
        display: flex;
        overflow-x: scroll;
        gap: 10px;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
        & button {
            height: 30px;
            min-width: 150px;
        }
    }
`;

interface CarouselUII {
    onChange: (value: number | string) => void;
    data: number[] | string[];
    value: number | string;
    label: string;
}

const CarouselUI = ({ value, onChange, data, label }: CarouselUII) => {
    return (
        <StyledCarousel>
            <p>{label}</p>
            <span>
                {data.map(item => (
                    <PrimaryButton
                        key={item}
                        onClick={() => onChange(item)}
                        background={`${value === item ? 'var(--normal)' : 'var(--background-color3)'}`}
                    >
                        {item}
                    </PrimaryButton>
                ))}
            </span>
        </StyledCarousel>
    );
};

export default CarouselUI;

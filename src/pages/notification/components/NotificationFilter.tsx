import styled from 'styled-components';
import { notification } from '../constNofication';

const FiltersBlocks = styled.div`
    width: 470px;
    height: 136px;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

const Block = styled.button`
    border-radius: 60px;
    width: auto;
    height: 34px;
    font-weight: 400;
    font-size: 16px;
    color: var(--white-color);
    background-color: ${({ isSelected }) => (isSelected ? 'var(--normal)' : 'var(--background-color1)')};
    padding: 0 20px;
`;

interface INotificationFilter {
    onChange: (value: string) => void;
    value: string;
}

const NotificationFilter: React.FC<INotificationFilter> = ({ onChange, value = 'Все' }) => {
    return (
        <FiltersBlocks className={'df '}>
            {notification.map(item => (
                <Block key={item.title} onClick={() => onChange(item.title)} isSelected={item.title === value}>
                    {item.title}
                </Block>
            ))}
        </FiltersBlocks>
    );
};

export default NotificationFilter;

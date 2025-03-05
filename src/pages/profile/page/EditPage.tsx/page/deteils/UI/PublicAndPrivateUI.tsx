import styled from 'styled-components';
import IconPerson from '../../icon/IconPerson';

const StyledBlock = styled.div`
    max-width: 520px;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    padding: 13px;
    box-sizing: border-box;
    height: 48px;
    cursor: pointer;
    border: 1px solid #cbd5e1;
    border-radius: 123px;
`;

const StyledInne = styled.div`
    display: flex;
    align-items: center;
    gap: 1px;
`;

interface IPublicAndPrivateUI {
    data: boolean;

    onChange: (data: boolean) => void;
}

const PublicAndPrivateUI: React.FC<IPublicAndPrivateUI> = ({ data, onChange }) => {
    return (
        <StyledBlock onClick={() => onChange(!data)}>
            {data ? (
                <StyledInne>
                    <IconPerson />
                    {'Публичный'}
                </StyledInne>
            ) : (
                <StyledInne>
                    <IconPerson />
                    {'Приватный'}
                </StyledInne>
            )}
        </StyledBlock>
    );
};

export default PublicAndPrivateUI;

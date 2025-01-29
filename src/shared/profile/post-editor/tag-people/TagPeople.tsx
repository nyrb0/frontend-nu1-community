import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledTagPeapleContent, StyledTagPeopleWrapper } from './tagPeople.styled';
import PrimaryButton from '@/shared/UI/Buttons/PrimeryButton';
import { COLORS } from '@/shared/constants/colors';
import People from './People';

interface ITagPeople {
    onChange: (username: string) => void;
    onClose: () => void;
}

const StyledInput = styled.input`
    background-color: var(--background-color2);
    color: var(--white-color);
    width: 100%;
    height: 39px;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 7px;
    font-weight: 300;
`;

const users = [
    {
        id: 's3432nsdv',
        username: 'kauuvbf',
        avatarUrl:
            'https://images.immediate.co.uk/production/volatile/sites/3/2024/02/Screenshot-2024-02-01-at-16.40.31-Cropped-d055ca9.png?quality=90&fit=700,466',
        identification: false,
    },
    {
        id: 's3432nsdjcndv',
        username: 'isadcdsv',
        avatarUrl:
            'https://images.immediate.co.uk/production/volatile/sites/3/2024/02/Screenshot-2024-02-01-at-16.40.31-Cropped-d055ca9.png?quality=90&fit=700,466',
        identification: false,
    },
];

const TagPeople: React.FC<ITagPeople> = ({ onChange, onClose }) => {
    const [value, setValue] = useState('');
    return (
        <StyledTagPeopleWrapper>
            <StyledTagPeapleContent>
                <span onClick={onClose}>X</span>
                <StyledInput value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />

                <div className='df fdc' style={{ gap: 7, margin: '10px 0' }}>
                    {users.map(list => (
                        <People
                            key={list.id}
                            data={list}
                            onClick={username => {
                                onChange(username);
                                onClose();
                            }}
                        />
                    ))}
                </div>
                <div className='df jcc aie'>
                    <PrimaryButton color={COLORS.WHITE} background={COLORS.NORMAL} borderRadios='7px' type='submit'>
                        Готово
                    </PrimaryButton>
                </div>
            </StyledTagPeapleContent>
        </StyledTagPeopleWrapper>
    );
};

export default TagPeople;

import styled from 'styled-components';

export const StyledPost = styled.img`
    border-radius: 3px;
    width: 100%;
    max-height: 412px;
    height: 100%;
    object-fit: contain;
`;

export const StyledPostProfile = styled.div`
    & div {
        gap: 12px;
        & p:first-child {
            display: inline-block;
            font-weight: 700;
            font-size: 14px;
            color: var(--white-color);
        }
        & p:last-child {
            margin-top: 3px;
            font-weight: 400;
            font-size: 12px;
            color: #686868;
        }
    }

    & img {
        cursor: pointer;
    }
    margin-bottom: 12px;
`;

export const StyledPostsDescription = styled.div`
    padding-bottom: 16px;
`;

export const StyledPostDo = styled.ul`
    margin-top: 16px;
    font-size: 14px;
    & ul {
        gap: 24px;
    }
    & li {
        display: flex;
        gap: 8px;
        align-items: center;
    }
`;

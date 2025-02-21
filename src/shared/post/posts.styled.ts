import styled, { css } from 'styled-components';

const paddingContent = css`
    padding: 0 20px;
`;

export const StyledPostBackground = styled.div`
    position: relative;
    margin-bottom: 50px;
    padding: 20px 0;
    box-sizing: border-box;
    border-radius: 15px;
    background-color: var(--background-color1);
`;

export const StyledPostImage = styled.img`
    ${paddingContent}
    box-sizing: border-box;
    margin: 14px 0 16px 0;
    height: 260px;
    border-radius: 15px;
    width: 100%;
    max-height: 260px;
    height: 100%;
    object-fit: cover;
`;

export const StyledPostProfile = styled.div`
    ${paddingContent}
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
    ${paddingContent}
    padding-bottom: 5px;
`;

export const StyledPostDo = styled.ul`
    ${paddingContent}
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

export const StyledPostComment = styled.div`
    margin-top: 20px;
    ${paddingContent}
`;

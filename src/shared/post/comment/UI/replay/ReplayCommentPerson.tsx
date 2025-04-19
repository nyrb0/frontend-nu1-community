import { HtmlHTMLAttributes } from 'react';
import { StyledReplayComment } from './Replay.styled';
import { useCommentsContext } from '../../context/useCommentsContext';

interface IReplayCommentPerson extends HtmlHTMLAttributes<HTMLDivElement> {
    username: string;
    text: string;
}

const ReplayCommentPerson = ({ username, text, ...props }: IReplayCommentPerson) => {
    const { setIdReplay } = useCommentsContext();
    return (
        <StyledReplayComment {...props}>
            <span onClick={() => setIdReplay(null)}>X</span>
            <div className='df aic' style={{ gap: 5 }}>
                Ответ на: <p>{username}</p>
            </div>
            <p>{text}</p>
        </StyledReplayComment>
    );
};

export default ReplayCommentPerson;

import { FC } from 'react';
import Comments from './Comments';
import { PulicationUserI } from '@/shared/types/publication.types';
import { AnimatePresence } from 'framer-motion';
import FormComment from './UI/FormComment';

interface IPostComment {
    disabled: boolean;
    data: PulicationUserI;
    isVisibleComments?: boolean;
    setIsVisibleComments?: (state: boolean) => void;
}

const PostBottomComment: FC<IPostComment> = ({ disabled, isVisibleComments = true, data, setIsVisibleComments }) => {
    return (
        <div>
            <FormComment data={data} disabled={disabled} />
            <AnimatePresence>
                {isVisibleComments && <Comments data={data} onClose={s => setIsVisibleComments && setIsVisibleComments(s)} />}
            </AnimatePresence>
        </div>
    );
};

export default PostBottomComment;

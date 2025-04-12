import { commentPostService } from '@/shared/services/comment-post-service';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import { IComment } from '@/shared/types/comment.types';
import Modal from '@/shared/UI/Modal/Modal';
import { PulicationUserI } from '@/shared/types/publication.types';
import Post from '../Post';
import CommentPost from './CommentByPublication';

interface IComments {
    data: PulicationUserI;
}

const Comments = ({ data }: IComments) => {
    const [commentsData, setCommentsData] = useState<IComment[]>([]);
    useEffect(() => {
        (async () => {
            const response = await commentPostService.getAll(data.id);
            if (response.status === 200) {
                setCommentsData(response.data);
            }
        })();
    });
    return (
        <Modal style={{ maxWidth: 800 }} onClose={() => null}>
            {/* <Post data={data} optionOwner /> */}
            <CommentPost data={data} />
            <div className='df fdc'>
                {commentsData.map(item => (
                    <CommentCard key={item.id} data={item} />
                ))}
            </div>
        </Modal>
    );
};

export default Comments;

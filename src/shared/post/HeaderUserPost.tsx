import { StyledPostProfile } from './posts.styled';
import AvatarProfile from '../UI/AvatarProfile';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'react-router-dom';
import { localUsername } from '@/pages/auth/username-local';
import { PulicationUserI } from '../types/publication.types';
import { baseUrlAws } from '../constants/baseUrlAws';
import IconThreePoints from './UI/icon/IconThreePoints';
dayjs.locale('ru');
dayjs.extend(relativeTime);

interface IHeaderUserPost {
    data: PulicationUserI;
    isVisibleOptions?: boolean;
    onSetVisibleOptions?: (state: boolean) => void;
}

const HeaderUserPost = ({ data, isVisibleOptions, onSetVisibleOptions }: IHeaderUserPost) => {
    const timeAgo = dayjs(data.createdAt).fromNow();
    const isFullName = data.user.lastName || data.user.name;
    const user = localUsername.get();

    return (
        <StyledPostProfile className='df aic jcsb'>
            <Link className='df aic' to={`profile/${data.user.username}`}>
                <AvatarProfile width={60} height={60} src={data.user.avatarUrl ? `${baseUrlAws}/${data?.user.avatarUrl}` : ''} />
                <div style={{ paddingLeft: 10 }}>
                    <p style={!isFullName ? { color: 'var(--white-color)', fontWeight: 600, fontSize: 16 } : {}}>
                        {data.user.username}
                        {user === data.user.username && ' •Вы'}
                    </p>
                    {!isFullName ? null : (
                        <p>
                            {data.user.lastName} {data.user.name}
                        </p>
                    )}
                </div>
            </Link>
            <div>
                <div className='df jce'>
                    {onSetVisibleOptions && typeof isVisibleOptions !== 'undefined' && (
                        <IconThreePoints
                            onClick={() => {
                                isVisibleOptions ? onSetVisibleOptions(false) : onSetVisibleOptions(true);
                            }}
                            style={{ marginBottom: 5 }}
                        />
                    )}
                </div>
                <p>{timeAgo}</p>
            </div>
        </StyledPostProfile>
    );
};

export default HeaderUserPost;

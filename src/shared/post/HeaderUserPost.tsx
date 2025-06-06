import { StyledPostProfile } from './posts.styled';
import AvatarProfile from '../UI/AvatarProfile';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'react-router-dom';
import { localUsername } from '@/pages/auth/username-local';
import { PulicationUserI } from '../types/publication.types';
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
                <AvatarProfile width={60} height={60} src={data.user.avatarUrl} />
                <div style={{ paddingLeft: 10 }}>
                    <div className='df aic' style={!isFullName ? { color: 'var(--white-color)', fontWeight: 600, fontSize: 16 } : {}}>
                        <p className='df aic'>
                            {data.user.username}{' '}
                            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M9.39696 7.9633C9.39696 6.86819 8.21115 6.18003 7.26762 6.72758C6.32409 7.27514 6.32409 8.65146 7.26762 9.19902C8.21115 9.74657 9.39696 9.05841 9.39696 7.9633ZM12.6473 5.33298C13.5867 0.84266 11.52 -0.566437 8.00665 2.68388C4.69997 -0.416133 2.34521 0.560841 3.34723 5.3142C-1.27343 6.70717 -0.96729 9.32937 3.38481 10.6688C2.38905 15.0464 4.24906 16.6433 8.00665 13.3367C11.6515 16.6058 13.5859 15.0752 12.5909 10.65C17.338 9.04047 16.9121 6.71077 12.6473 5.33298ZM12.0085 5.16389C11.2638 4.99591 10.5432 4.87363 9.81029 4.80692C9.42416 4.24231 8.97441 3.67832 8.45756 3.15358C11.2744 0.451693 12.9345 1.29593 12.0085 5.16389ZM4.73754 8.82755C5.01623 9.4225 5.3826 9.96735 5.65815 10.4245C5.20945 10.3786 4.72605 10.3089 4.21148 10.2179C4.37636 9.75632 4.5519 9.29285 4.73754 8.82755ZM4.69997 7.21178C4.49498 6.71973 4.30793 6.24483 4.15512 5.80268C4.68632 5.69257 5.20687 5.5926 5.65815 5.55844C5.32228 6.08607 5.00326 6.63771 4.69997 7.21178ZM5.09451 8.03845C5.55395 7.11834 6.03995 6.24496 6.57876 5.4645C7.53483 5.40952 8.48072 5.41439 9.41575 5.48329C9.94016 6.214 10.4296 7.08735 10.9 8.03845C10.548 8.76586 10.0482 9.60418 9.47211 10.4997C8.51033 10.5725 7.52412 10.5624 6.5224 10.4997C6.01469 9.72186 5.53788 8.9026 5.09451 8.03845ZM11.257 8.82755C11.4394 9.27025 11.608 9.72146 11.7642 10.1803C11.282 10.2818 10.8063 10.3558 10.3364 10.4057C10.6581 9.90731 10.9632 9.37809 11.257 8.82755ZM10.3364 5.55844C10.8486 5.62857 11.3435 5.71614 11.8206 5.82147C11.661 6.29579 11.4796 6.75935 11.2758 7.21178C10.9849 6.63821 10.6727 6.08619 10.3364 5.55844ZM8.88968 4.73177C8.30454 4.70881 7.70927 4.70955 7.10483 4.73177C7.36944 4.38375 7.66438 4.02021 7.98786 3.64207C8.30311 3.98235 8.60178 4.34861 8.88968 4.73177ZM7.53695 3.15358C7.0201 3.67832 6.57035 4.22352 6.18422 4.78813C5.45133 4.85485 4.71195 4.97712 3.96724 5.1451C3.0842 1.21842 4.72014 0.451693 7.53695 3.15358ZM3.5539 10.0488C-0.360259 8.87138 -0.172379 7.03643 3.51633 5.95299C3.74197 6.6377 4.01514 7.3331 4.32421 8.00088C4.02388 8.69148 3.75801 9.40079 3.5539 10.0488ZM4.04239 10.8379C4.70623 11.0007 5.40972 11.0789 6.14664 11.1573C6.59004 11.783 7.04922 12.3648 7.53695 12.867C4.66865 15.6163 3.06967 14.6174 4.04239 10.8379ZM7.98786 12.3973C7.64797 12.0453 7.33063 11.6465 7.02968 11.2136C7.70052 11.2278 8.34843 11.2293 8.96484 11.2136C8.66631 11.6371 8.34028 12.0313 7.98786 12.3973ZM8.45756 12.867C8.98089 12.2984 9.44224 11.7219 9.84787 11.1385C10.5402 11.0875 11.2416 10.9812 11.9521 10.8191C12.9336 14.842 11.1515 15.436 8.45756 12.867ZM12.4218 10.0112C12.2206 9.36321 11.9664 8.69148 11.6703 8.00088C11.975 7.3331 12.2369 6.65649 12.4594 5.97178C16.0604 7.06148 16.3485 8.8025 12.4218 10.0112Z'
                                    fill='#26A2C1'
                                />
                            </svg>
                        </p>
                        <p>{user === data.user.username && ' •Вы'}</p>
                    </div>
                    <p>{`${data.user.speciality} (${data.user.positionRole})`}</p>
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

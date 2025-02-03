import { Route } from 'react-router-dom';
import { ROUTES_PROFILE } from './router.const';
import Posts from '@/shared/post/Posts';

const RoutesProfile = () => {
    return (
        <>
            <Route path={ROUTES_PROFILE.POSTS} element={<Posts />} />
            <Route path={ROUTES_PROFILE.SAVES} element />
            <Route path={ROUTES_PROFILE.VIDEOS} element />
            <Route path={ROUTES_PROFILE.CLOSE} element />
            <Route path={ROUTES_PROFILE.LIKES} element />
        </>
    );
};

export default RoutesProfile;

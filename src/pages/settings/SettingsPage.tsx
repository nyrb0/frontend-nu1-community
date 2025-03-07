import { Outlet } from 'react-router-dom';
import CategoryEditProfile from './CategoryEditProfile';

const SettingsPage: React.FC = () => {
    return (
        <div>
            <div>
                <CategoryEditProfile />
            </div>
            <Outlet />
        </div>
    );
};

export default SettingsPage;

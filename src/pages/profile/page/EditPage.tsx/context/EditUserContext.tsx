import { useAppSelector } from '@/shared/hooks/redux';
import { IUpdateUser } from '@/shared/types/user.types';
import { RootState } from '@/store';
import React, { useContext, useEffect } from 'react';

interface IUserEditContextType {
    data: IUpdateUser | null;
    setData: React.Dispatch<React.SetStateAction<IUpdateUser | null>>;
}

const EditUserContext = React.createContext<IUserEditContextType | undefined>(undefined);

export const EditUserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = React.useState<IUpdateUser | null>(null);
    const { user } = useAppSelector((state: RootState) => state.user);
    const handleSubmit = async () => {};

    useEffect(() => {
        if (user) {
            setData(user);
        }
    }, [user]);

    return <EditUserContext.Provider value={{ data, setData }}>{children}</EditUserContext.Provider>;
};

export const useEditUserContext = () => {
    const context = useContext(EditUserContext);
    if (!context) throw new Error('EditUserContext должен быть внутри "EditUserProvider"');
    return context;
};

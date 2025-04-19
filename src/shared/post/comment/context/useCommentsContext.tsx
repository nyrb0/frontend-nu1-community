import { IComment } from '@/shared/types/comment.types';
import { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextType {
    idReplay: IComment | null;
    setIdReplay: (id: IComment | null) => void;
}

const CommentsContext = createContext<MyContextType | undefined>(undefined);

export const ProviderComments = ({ children }: { children: ReactNode }) => {
    const [idReplay, setIdReplay] = useState<IComment | null>(null);

    return <CommentsContext.Provider value={{ idReplay, setIdReplay }}>{children}</CommentsContext.Provider>;
};

export const useCommentsContext = (): MyContextType => {
    const context = useContext(CommentsContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};

import { useState, useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import { axiosService, axiosServiceAuth } from '../services/api/http';

interface UseAxiosResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

const useAxios = <T = any>(config: AxiosRequestConfig, isAuth: boolean = false, immediate = true): UseAxiosResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = isAuth ? await axiosServiceAuth(config) : await axiosService(config);
            setData(response.data);
        } catch (err: any) {
            setError(err?.response?.data?.message || err.message || 'Произошла ошибка');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (immediate) fetchData();
        fetchData();
    }, [JSON.stringify(config), immediate]);

    return { data, loading, error, refetch: fetchData };
};

export default useAxios;

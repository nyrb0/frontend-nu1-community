import { authService } from '@/shared/services/auth.service';
import { IRegisAuth } from '@/shared/types/auth.types';
import { ROLES } from '@/shared/types/roles';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormData extends IRegisAuth {
    repeatPassword: string;
}
export const useRegis = () => {
    const [roles, setRoles] = useState<{ role: string; positionRole: string | null; speciality: string | null }>({
        role: ROLES.USER,
        positionRole: null,
        speciality: null,
    });
    const {
        handleSubmit,
        register,
        setError,
        clearErrors,
        formState: { errors },
        watch,
    } = useForm<IFormData>();
    const [isVisibilitySpecification, setIsVisibilitySpecification] = useState(false);
    const password = watch('password');
    const handlerRegister: SubmitHandler<IFormData> = async data => {
        try {
            clearErrors();
            // проверяем полю positionRole, speciality
            if ((!roles.positionRole || !roles.speciality) && roles.role === ROLES.USER) {
                setError('speciality', { type: 'manual', message: 'Выберите специальность' });
                setError('positionRole', { type: 'manual', message: 'Выберите позицию' });
                return;
            }
            const { repeatPassword, ...body } = { ...data, ...roles };
            const response = await authService.auth('regis', body);
            if (response.status === 200) {
                localStorage.setItem('username', data.username);
                window.location.href = '/';
            }
        } catch (err) {
            console.log('Ошибка при регистрации', err);
        }
    };
    return {
        roles,
        setRoles,
        isVisibilitySpecification,
        setIsVisibilitySpecification,
        handlerRegister,
        clearErrors,
        register,
        handleSubmit,
        errors,
        password,
    };
};

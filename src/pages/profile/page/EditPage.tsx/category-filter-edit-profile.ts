import { PAGES } from '@/shared/routes/router.const';

export const listsLinkProfileEdit = [
    { name: 'Безопастность', path: (s: string) => `${PAGES.PROFILE_LINK}/${s}/edit/suciruty` },
    { name: 'Детали', path: (s: string) => `${PAGES.PROFILE_LINK}/${s}/edit/details` },
    { name: 'Аккаунт', path: (s: string) => `${PAGES.PROFILE_LINK}/${s}/edit/account` },
    { name: 'Конфиденциальность', path: (s: string) => `${PAGES.PROFILE_LINK}/${s}/edit/confiden` },
];

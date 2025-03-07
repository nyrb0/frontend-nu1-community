import { PAGES } from '@/shared/routes/router.const';

export const listsLinkProfileEdit = [
    { name: 'Детали', path: (s: string) => `${PAGES.SETTINGS}/details` },
    { name: 'Безопастность', path: (s: string) => `${PAGES.SETTINGS}/security` },
    { name: 'Аккаунт', path: (s: string) => `${PAGES.SETTINGS}/account` },
    { name: 'Конфиденциальность', path: (s: string) => `${PAGES.SETTINGS}/confidentiality` },
];

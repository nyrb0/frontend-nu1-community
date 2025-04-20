import { PAGES } from '@/shared/routes/router.const';

export const listsLinkProfileEdit = [
    { name: 'Детали', path: () => `${PAGES.SETTINGS}/details` },
    { name: 'Безопастность', path: () => `${PAGES.SETTINGS}/security` },
    { name: 'Аккаунт', path: () => `${PAGES.SETTINGS}/account` },
    { name: 'Конфиденциальность', path: () => `${PAGES.SETTINGS}/confidentiality` },
];

import { PAGES, ROUTES_PROFILE } from '../routes/router.const';

export const listsFilterPosts = [
    { name: 'Посты', path: (s: string) => `${PAGES.PROFILE_LINK}/${s}` },
    { name: 'Подписки', path: (s: string) => `${PAGES.PROFILE_LINK}/${s}/subs` },
    { name: 'Закрытые', path: (s: string) => `${PAGES.PROFILE_LINK}/${s}/close` },
    { name: 'Лайки', path: (s: string) => `${PAGES.PROFILE_LINK}/${s}/likes` },
    { name: 'Видео', path: (s: string) => `${PAGES.PROFILE_LINK}/${s}/videos` },
];

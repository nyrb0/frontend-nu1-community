import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: 'Welcome to our website',
            },
        },
        ru: {
            translation: {
                welcome: 'Добро пожаловать на наш сайт',
            },
        },
    },

    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;

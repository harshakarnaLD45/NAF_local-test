import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Load translations using HTTP
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files in public folder
    },
    lng: 'de', // Default language
    fallbackLng: 'en', // Fallback language if the chosen language translation is missing
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;

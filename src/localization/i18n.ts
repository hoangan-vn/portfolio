import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

import { Locale } from '~/constants/enum';
import { loadState } from '~/utils/storage.util';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: Locale.en,
    lng: loadState<Locale>('language') || Locale.en,
    backend: {
      loadPath: '/locales/{{lng}}.json'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

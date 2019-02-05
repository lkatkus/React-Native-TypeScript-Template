import i18n from 'i18n-js';

import en from './translations/en.json';
import lt from './translations/lt.json';

i18n.fallbacks = true;
i18n.translations = { en, lt };

export const setLocale = (locale) => { i18n.locale = locale };
export const getCurrentLocale = () => i18n.locale;

export default i18n.t.bind(i18n);
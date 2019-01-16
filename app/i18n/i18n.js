import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';

import en from './translations/en.json';
import fr from './translations/fr.json';
import de from './translations/de.json';

// i18n.locale = 'fr';
i18n.fallbacks = true;
i18n.translations = { en, fr, de };

export const setLocale = (locale) => { i18n.locale = locale };
export const getCurrentLocale = () => i18n.locale;

export default i18n.t.bind(i18n);
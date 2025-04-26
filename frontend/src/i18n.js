// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { format } from 'date-fns';
import { tr, enUS } from 'date-fns/locale'; // Yeni sade import

// Dil dosyaları
import enTranslations from './locales/en.json';
import trTranslations from './locales/tr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      tr: { translation: trTranslations }
    },
    detection: {
      order: ['navigator', 'htmlTag'],
      caches: ['cookie']
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
      format: (value, formatPattern, lng) => {
        if (value instanceof Date) {
          const locale = lng === 'tr' ? tr : enUS; // Güncellenmiş locale seçimi
          return formatPattern 
            ? format(value, formatPattern, { locale })
            : value.toLocaleDateString(lng);
        }
        return value;
      }
    }
  });

export default i18n;

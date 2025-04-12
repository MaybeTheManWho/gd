import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18next instance
i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    // Debug mode in development
    debug: process.env.NODE_ENV === 'development',
    
    // Default language fallback
    fallbackLng: 'en',
    
    // Interpolation configuration
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // Namespaces to load
    ns: ['common', 'home', 'guidelines', 'punishments', 'moderation', 'testing', 'commands', 'staff', 'faq'],
    defaultNS: 'common',
    
    // Backend configuration for loading translations
    backend: {
      loadPath: '/assets/translations/{{lng}}.json',
    },
    
    // React configuration
    react: {
      useSuspense: true,
    },
    
    // Load translations from server
    load: 'languageOnly',
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Helper function to translate text
export const translate = (key, options = {}) => {
  return i18n.t(key, options);
};

export default i18n;
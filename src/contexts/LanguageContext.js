import React, { createContext, useState, useEffect } from 'react';
import i18n from '../utils/i18n';

// Create the context
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Available languages with their display names
  const availableLanguages = {
    en: 'English',
    es: 'Español',
    pt: 'Português',
    ar: 'العربية',
    fr: 'Français'
  };

  // Get initial language from localStorage or browser language
  const getInitialLanguage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedLang = window.localStorage.getItem('language');
      if (storedLang && Object.keys(availableLanguages).includes(storedLang)) {
        return storedLang;
      }
    }

    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (Object.keys(availableLanguages).includes(browserLang)) {
      return browserLang;
    }

    return 'en'; // Default to English
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  // Function to change the language
  const changeLanguage = (lang) => {
    if (Object.keys(availableLanguages).includes(lang)) {
      setLanguage(lang);
    }
  };

  // Update i18n language and save to localStorage
  useEffect(() => {
    i18n.changeLanguage(language);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
    
    // Set direction for RTL languages (like Arabic)
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Provide the language state and related functions to children
  return (
    <LanguageContext.Provider value={{ 
      language, 
      changeLanguage, 
      availableLanguages 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
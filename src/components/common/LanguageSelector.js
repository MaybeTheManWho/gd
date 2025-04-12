import React, { useContext, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../../contexts/LanguageContext';

const LanguageSelector = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { language, changeLanguage, availableLanguages } = useContext(LanguageContext);
  const dropdownRef = useRef(null);
  
  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  // Handle language change
  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    onClose();
  };
  
  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-bg-secondary border border-border overflow-hidden z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          <div className="py-1">
            {Object.entries(availableLanguages).map(([code, name]) => (
              <button
                key={code}
                className={`w-full text-left px-4 py-2 text-sm ${
                  language === code 
                    ? 'bg-primary text-white' 
                    : 'text-text-primary hover:bg-primary hover:bg-opacity-10'
                } transition-colors duration-200`}
                onClick={() => handleLanguageChange(code)}
              >
                <span className="mr-2">{getLanguageFlag(code)}</span>
                {name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Helper function to get flag emoji for each language
const getLanguageFlag = (langCode) => {
  const flags = {
    en: '🇺🇸',
    es: '🇪🇸',
    pt: '🇵🇹',
    ar: '🇸🇦',
    fr: '🇫🇷'
  };
  
  return flags[langCode] || '';
};

export default LanguageSelector;
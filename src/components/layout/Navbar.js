import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun, faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';

// Contexts
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';

// Components
import LanguageSelector from '../common/LanguageSelector';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage, availableLanguages } = useContext(LanguageContext);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Toggle language dropdown
  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };
  
  // Close menus when clicking outside
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsLangDropdownOpen(false);
  };
  
  // Function to determine if a nav link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Navigation links
  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/guidelines', label: t('nav.guidelines') },
    { path: '/punishments', label: t('nav.punishments') },
    { path: '/moderation', label: t('nav.moderation') },
    { path: '/testing', label: t('nav.testing') },
    { path: '/commands', label: t('nav.commands') },
    { path: '/staff', label: t('nav.staff') },
    { path: '/faq', label: t('nav.faq') },
  ];

  return (
    <header className="bg-bg-secondary shadow-md z-50 sticky top-0">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenus}>
            <img 
              src="/assets/images/logo.png" 
              alt="Sword Tierlist Logo" 
              className="h-10 w-10"
            />
            <span className="font-bold text-lg md:text-xl text-primary">
              {t('brandName')}
            </span>
          </Link>
          
          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Controls (theme toggle, language selector) */}
          <div className="flex items-center space-x-2">
            {/* Language selector */}
            <div className="relative">
              <button 
                className="p-2 rounded-full hover:bg-primary hover:bg-opacity-10 transition-colors"
                onClick={toggleLangDropdown}
                aria-label={t('aria.changeLanguage')}
              >
                <FontAwesomeIcon icon={faGlobe} className="text-lg" />
              </button>
              
              {/* Language dropdown */}
              <LanguageSelector 
                isOpen={isLangDropdownOpen} 
                onClose={() => setIsLangDropdownOpen(false)} 
              />
            </div>
            
            {/* Theme toggle */}
            <button 
              className="p-2 rounded-full hover:bg-primary hover:bg-opacity-10 transition-colors"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t('aria.switchToLight') : t('aria.switchToDark')}
            >
              <FontAwesomeIcon 
                icon={theme === 'dark' ? faSun : faMoon} 
                className="text-lg"
              />
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-full hover:bg-primary hover:bg-opacity-10 transition-colors"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? t('aria.closeMenu') : t('aria.openMenu')}
            >
              <FontAwesomeIcon 
                icon={isMenuOpen ? faXmark : faBars} 
                className="text-xl"
              />
            </button>
          </div>
        </nav>
        
        {/* Mobile navigation menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={closeMenus}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
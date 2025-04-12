import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // Get current date for last updated information
  const formatDate = () => {
    const date = new Date();
    return new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto px-4">
        {/* Logo and info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/assets/images/logo.png" 
              alt="Sword Tierlist Logo" 
              className="h-12 w-12 mr-3"
            />
            <div>
              <h3 className="font-bold text-lg">{t('brandName')}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {t('footer.staffGuide')}
              </p>
            </div>
          </div>
          
          {/* Last updated info */}
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            <p>
              {t('footer.lastUpdated')}: {formatDate()}
            </p>
            <p className="mt-1">
              {t('footer.contactInfo')}: <span className="text-primary">Rio</span>
            </p>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div>
            <h4 className="font-semibold mb-3">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">{t('nav.home')}</Link></li>
              <li><Link to="/guidelines" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">{t('nav.guidelines')}</Link></li>
              <li><Link to="/punishments" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">{t('nav.punishments')}</Link></li>
              <li><Link to="/moderation" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">{t('nav.moderation')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              <li><Link to="/testing" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">{t('nav.testing')}</Link></li>
              <li><Link to="/commands" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">{t('nav.commands')}</Link></li>
              <li><Link to="/staff" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">{t('nav.staff')}</Link></li>
              <li><Link to="/faq" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">{t('nav.faq')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">{t('footer.important')}</h4>
            <ul className="space-y-2">
              <li><Link to="/guidelines" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">{t('footer.rules')}</Link></li>
              <li><Link to="/punishments" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">{t('footer.punishmentGuide')}</Link></li>
              <li><Link to="/commands" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">{t('footer.commandReference')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">{t('footer.confidential')}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('footer.confidentialInfo')}
            </p>
            <div className="mt-3 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-200 text-sm p-2 rounded">
              {t('footer.leakWarning')}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>
            &copy; {currentYear} {t('brandName')}. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
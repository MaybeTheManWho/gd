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
    <footer className="bg-bg-secondary border-t border-border py-8">
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
              <p className="text-text-secondary text-sm">
                {t('footer.staffGuide')}
              </p>
            </div>
          </div>
          
          {/* Last updated info */}
          <div className="text-text-secondary text-sm">
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
              <li><Link to="/" className="text-text-secondary hover:text-primary transition-colors text-sm">{t('nav.home')}</Link></li>
              <li><Link to="/guidelines" className="text-text-secondary hover:text-primary transition-colors text-sm">{t('nav.guidelines')}</Link></li>
              <li><Link to="/punishments" className="text-text-secondary hover:text-primary transition-colors text-sm">{t('nav.punishments')}</Link></li>
              <li><Link to="/moderation" className="text-text-secondary hover:text-primary transition-colors text-sm">{t('nav.moderation')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              <li><Link to="/testing" className="text-text-secondary hover:text-primary transition-colors text-sm">{t('nav.testing')}</Link></li>
              <li><Link to="/commands" className="text-text-secondary hover:text-primary transition-colors text-sm">{t('nav.commands')}</Link></li>
              <li><Link to="/staff" className="text-text-secondary hover:text-primary transition-colors text-sm">{t('nav.staff')}</Link></li>
              <li><Link to="/faq" className="text-text-secondary hover:text-primary transition-colors text-sm">{t('nav.faq')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">{t('footer.important')}</h4>
            <ul className="space-y-2">
              <li><Link to="/guidelines" className="text-text-secondary hover:text-primary transition-colors text-sm">{t('footer.rules')}</Link></li>
              <li><Link to="/punishments" className="text-text-secondary hover:text-primary transition-colors text-sm">{t('footer.punishmentGuide')}</Link></li>
              <li><Link to="/commands" className="text-text-secondary hover:text-primary transition-colors text-sm">{t('footer.commandReference')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">{t('footer.confidential')}</h4>
            <p className="text-sm text-text-secondary">
              {t('footer.confidentialInfo')}
            </p>
            <div className="mt-3 bg-danger bg-opacity-10 text-danger text-sm p-2 rounded">
              {t('footer.leakWarning')}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border pt-6 mt-6 text-center text-text-secondary text-sm">
          <p>
            &copy; {currentYear} {t('brandName')}. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
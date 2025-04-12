import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserShield, 
  faBalanceScale, 
  faUserSecret, 
  faBell,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

// Components
import Alert from '../common/Alert';

const Guidelines = () => {
  const { t } = useTranslation();
  
  // Rules sections data
  const ruleSections = [
    {
      id: 'conduct',
      icon: faUserShield,
      title: t('guidelines.sections.conduct'),
      rules: t('guidelines.rules.conduct', { returnObjects: true })
    },
    {
      id: 'integrity',
      icon: faBalanceScale,
      title: t('guidelines.sections.integrity'),
      rules: t('guidelines.rules.integrity', { returnObjects: true })
    },
    {
      id: 'confidentiality',
      icon: faUserSecret,
      title: t('guidelines.sections.confidentiality'),
      rules: t('guidelines.rules.confidentiality', { returnObjects: true })
    },
    {
      id: 'responsiveness',
      icon: faBell,
      title: t('guidelines.sections.responsiveness'),
      rules: t('guidelines.rules.responsiveness', { returnObjects: true })
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div>
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-4">
          {t('guidelines.title')}
        </h1>
        <p className="text-text-secondary mb-6">
          {t('guidelines.intro')}
        </p>
        
        <Alert type="warning" title={t('guidelines.warning')}>
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
          {t('home.hero.warning.message')}
        </Alert>
      </motion.div>
      
      {/* Rules sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {ruleSections.map(section => (
          <motion.div 
            key={section.id}
            variants={itemVariants}
            className="card"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
                <FontAwesomeIcon icon={section.icon} className="text-primary text-xl" />
              </div>
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            
            <ul className="space-y-2 pl-6">
              {section.rules && section.rules.map((rule, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Additional guidelines */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 card bg-primary bg-opacity-5 border-l-4 border-primary"
      >
        <h3 className="text-xl font-semibold mb-4">
          {t('guidelines.sections.appearance')}
        </h3>
        <ul className="space-y-2 pl-6">
          {t('guidelines.rules.appearance', { returnObjects: true }).map((rule, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">
          {t('guidelines.sections.power')}
        </h3>
        <ul className="space-y-2 pl-6">
          {t('guidelines.rules.power', { returnObjects: true }).map((rule, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Guidelines;
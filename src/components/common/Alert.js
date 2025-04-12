import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle, 
  faInfoCircle,
  faCheckCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Alert = ({ 
  type = 'info', 
  title, 
  children, 
  icon, 
  dismissible = false,
  onDismiss
}) => {
  // Define styles based on type
  const alertStyles = {
    info: {
      bg: 'bg-primary bg-opacity-10',
      border: 'border-primary',
      text: 'text-primary',
      icon: faInfoCircle
    },
    success: {
      bg: 'bg-success bg-opacity-10',
      border: 'border-success',
      text: 'text-success',
      icon: faCheckCircle
    },
    warning: {
      bg: 'bg-warning bg-opacity-10',
      border: 'border-warning',
      text: 'text-dark dark:text-warning',
      icon: faExclamationTriangle
    },
    danger: {
      bg: 'bg-danger bg-opacity-10',
      border: 'border-danger',
      text: 'text-danger',
      icon: faExclamationCircle
    }
  };
  
  const style = alertStyles[type] || alertStyles.info;
  const alertIcon = icon || style.icon;
  
  // Animation variants
  const alertVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      className={`${style.bg} ${style.text} border-l-4 ${style.border} rounded-md p-4 mb-4`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={alertVariants}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          <FontAwesomeIcon icon={alertIcon} className="text-lg mt-0.5" />
        </div>
        <div className="flex-1">
          {title && (
            <h4 className="text-lg font-semibold mb-1">{title}</h4>
          )}
          <div className="text-sm">{children}</div>
        </div>
        {dismissible && onDismiss && (
          <button
            className="ml-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            onClick={onDismiss}
            aria-label="Dismiss"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Alert;
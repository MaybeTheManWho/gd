import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faUserShield, 
  faLock, 
  faExclamationTriangle, 
  faUserFriends,
  faGavel,
  faHistory,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

// Components
import Alert from '../common/Alert';

const ModerationGuide = () => {
  const { t } = useTranslation();
  
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

  // Moderation sections
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: faShieldAlt,
      content: [
        'Welcome to the Moderation Team!',
        'This guide outlines basic guidelines for handling moderation situations on the server.',
        'If you\'re unsure about anything, contact Rio or Linaton.',
        'Moderators enforce rules, maintain order, and can receive sub-roles in the Network Hub to assist with tickets. Inactivity without valid reasoning can lead to demotion.',
        'You are responsible for reading and applying this guide.'
      ]
    },
    {
      id: 'behavior',
      title: 'Staff Behavior',
      icon: faUserShield,
      content: [
        'Moderators should behave maturely, act as role models, and help maintain a fun, fair environment.'
      ],
      subsections: [
        {
          title: 'Security',
          items: [
            'Use strong passwords and enable 2FA.',
            'Do not expose any private staff or user info.',
            'Report any compromise or leak to Regulators.'
          ]
        }
      ]
    },
    {
      id: 'mismoderation',
      title: 'Mismoderation',
      icon: faExclamationTriangle,
      content: [
        'If you make a mistake:'
      ],
      subsections: [
        {
          type: 'ordered',
          items: [
            'Try to resolve it.',
            'Speak with the person calmly.',
            'If needed, escalate it to higher staff.'
          ]
        }
      ]
    },
    {
      id: 'behavior-handling',
      title: 'Behavior Handling',
      icon: faUserFriends,
      content: [
        'Evaluate arguments based on severity and language.',
        'Warn all parties if necessary, escalate if it continues.',
        'For threats or any serious issues — act accordingly.'
      ]
    },
    {
      id: 'repeat-offenses',
      title: 'Repeat Offenses',
      icon: faHistory,
      content: [
        'When a user breaks the rules repeatedly, escalate: Warn → Mute → Kick → Tempban → Ban',
        'Only one moderator should handle a specific infraction chain.'
      ]
    },
    {
      id: 'advertising',
      title: 'Advertising',
      icon: faUsers,
      content: [
        'No Discord links, payment links, or social handles allowed.',
        'Delete and warn on first offense. Escalate further if repeated.'
      ]
    }
  ];

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
          Moderation Guide
        </h1>
        <p className="text-text-secondary mb-6">
          The following guidelines will help you handle moderation situations effectively. As a moderator, you represent the server and are expected to uphold the highest standards of fairness and professionalism.
        </p>
        
        <Alert type="info" title="Staff Responsibility">
          <p>Your actions as a moderator directly impact the server community. Always be fair, consistent, and professional.</p>
        </Alert>
      </motion.div>
      
      {/* Main content sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {sections.map((section) => (
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
            
            <div className="space-y-4">
              {section.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              
              {section.subsections && section.subsections.map((subsection, i) => (
                <div key={i} className="mt-4">
                  {subsection.title && (
                    <h3 className="font-semibold mb-2">{subsection.title}</h3>
                  )}
                  
                  {subsection.type === 'ordered' ? (
                    <ol className="list-decimal pl-5 space-y-1">
                      {subsection.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="space-y-1 pl-5">
                      {subsection.items.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Final notes */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 p-6 bg-bg-card rounded-lg shadow-md border-t-4 border-primary"
      >
        <h3 className="text-xl font-semibold mb-4">
          Key Reminders
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <FontAwesomeIcon icon={faGavel} className="text-primary mr-3 mt-1" />
            <span>Always follow the punishment guidelines for consistent moderation.</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon icon={faUserShield} className="text-primary mr-3 mt-1" />
            <span>Your primary goal is to create a safe, fair environment for all users.</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon icon={faLock} className="text-primary mr-3 mt-1" />
            <span>Keep staff discussions and decisions confidential.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ModerationGuide;
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGamepad, 
  faClipboardList, 
  faTrophy, 
  faExclamationTriangle,
  faStepForward,
  faUserCheck,
  faUser,
  faUserTag
} from '@fortawesome/free-solid-svg-icons';

// Components
import Alert from '../common/Alert';

const TestingGuide = () => {
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
  
  // Testing process steps
  const testingSteps = [
    {
      step: 1,
      instruction: 'In #staff-commands, type /Start',
      details: 'This will open the queue for players to join the testing queue.'
    },
    {
      step: 2,
      instruction: 'Wait a few minutes for users to join the queue',
      details: 'This gives players time to see that testing is available and join the queue.'
    },
    {
      step: 3,
      instruction: 'Type /Next',
      details: 'Opens a ticket with the first in queue. Lists their region, server IP, previous tier. PLEASE OPEN ONLY 1 TICKET AT A TIME.'
    },
    {
      step: 4,
      instruction: 'Greet user and ask if ready',
      details: 'If no reply in 5 min, type /Skip. Bot notifies both sides.'
    },
    {
      step: 5,
      instruction: 'Fight: First to 10 kills wins',
      details: 'This is the actual testing process. Make sure to count kills accurately.'
    },
    {
      step: 6,
      instruction: 'Return to Discord → Type /Close',
      details: 'Click tier in options; don\'t write the tier.'
    },
    {
      step: 7,
      instruction: 'Repeat steps #2–5',
      details: 'Continue testing other players in the queue.'
    },
    {
      step: 8,
      instruction: 'When finished, type /Stop',
      details: 'This will close the queue and finish your testing session.'
    }
  ];
  
  // Tier descriptions
  const tierDescriptions = [
    {
      name: 'HT3',
      role: 'For HT3 Testers – Tier 3',
      high: [
        'Shows variety of techniques and adaptability',
        'Precise aim/spacing; minimal errors',
        'HT3s must not be given without eval test (Min Score: 7–10)'
      ],
      low: [
        'Average to good gamesense',
        'Adapts but not top-level (Min Score: 10–3)'
      ]
    },
    {
      name: 'LT3',
      role: 'For LT3 Testers – Tier 3',
      high: [
        'Never give HT3',
        'If user wins FT10, ping a Regulator and exempt'
      ],
      low: [
        'Average mechanics; can hold own for a bit (Min Score: 10–7)'
      ]
    },
    {
      name: 'T4',
      role: 'Tier 4',
      high: [
        'Average mechanics/gamesense',
        'Gets 1–2 rounds',
        'Knows how to crit (Min Score: 3–10)'
      ],
      low: [
        'Low skill and gamesense',
        'Shouldn\'t get more than 1 round'
      ]
    },
    {
      name: 'T5',
      role: 'Tier 5',
      high: [
        'New to 1.9',
        'No gamesense',
        'Can\'t crit/sprint reset'
      ],
      low: [
        'No skill at all',
        'Easily beatable',
        '"Don\'t be afraid to give this tier out."'
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
          Testing Guide
        </h1>
        <p className="text-text-secondary mb-6">
          This guide outlines the process for testing players and assigning appropriate tiers based on their skill level. Following these procedures ensures fair and consistent tier assignments.
        </p>
        
        <Alert type="warning" title="Important Information">
          <div className="space-y-2">
            <p>• Step-by-step FFA Sword testing guide. Contact Obsessivebf for questions.</p>
            <p>• Track score of test (First to 10 kills).</p>
            <p>• Be respectful during testing.</p>
            <p>• Test on verified servers only — at your own risk otherwise.</p>
          </div>
        </Alert>
      </motion.div>
      
      {/* Testing process section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-10"
      >
        <motion.div
          variants={itemVariants}
          className="card mb-6"
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-4">
              <FontAwesomeIcon icon={faClipboardList} className="text-primary text-xl" />
            </div>
            <h2 className="text-2xl font-semibold">Testing Process</h2>
          </div>
          
          <div className="space-y-6">
            {testingSteps.map((step) => (
              <motion.div 
                key={step.step}
                variants={itemVariants}
                className="flex"
              >
                <div className="mr-4 pt-1">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{step.instruction}</h3>
                  <p className="text-text-secondary">{step.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Tier descriptions section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold flex items-center"
        >
          <FontAwesomeIcon icon={faTrophy} className="text-primary mr-3" />
          Tier Descriptions
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tierDescriptions.map((tier) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className="card"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-3">
                  {tier.name}
                </div>
                <h3 className="text-lg font-semibold">{tier.role}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faUserTag} className="text-success mr-2" />
                    <h4 className="font-semibold">High:</h4>
                  </div>
                  <ul className="pl-6 space-y-1">
                    {tier.high.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mt-2 mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon icon={faUser} className="text-warning mr-2" />
                    <h4 className="font-semibold">Low:</h4>
                  </div>
                  <ul className="pl-6 space-y-1">
                    {tier.low.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-warning mt-2 mr-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Additional information */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mt-10 bg-primary bg-opacity-5 rounded-lg p-6"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-primary mr-3" />
          Testing Requirements
        </h3>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <FontAwesomeIcon icon={faUserCheck} className="text-primary mt-1 mr-3" />
            <span>Evaluation testers (HT3) confirm tiers of new testers. Contact Weqy if interested.</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon icon={faStepForward} className="text-primary mt-1 mr-3" />
            <span>To be tested, tag Weqy.</span>
          </li>
          <li className="flex items-start">
            <FontAwesomeIcon icon={faGamepad} className="text-primary mt-1 mr-3" />
            <span>20 tests per month required or demotion unless it's your first month. Ask Obsessivebf for exemption.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default TestingGuide;
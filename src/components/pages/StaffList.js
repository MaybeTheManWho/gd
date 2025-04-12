import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Components
import StaffCard from '../staff/StaffCard';

// Staff data
import { staffByRole, roleHierarchy } from '../../data/staffMembers';

const StaffList = () => {
  const { t } = useTranslation();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-4">
          {t('staff.title')}
        </h1>
        <p className="text-text-secondary">
          {t('staff.description')}
        </p>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Map through each role in the hierarchy */}
        {roleHierarchy.map((role) => (
          <motion.div 
            key={role}
            variants={sectionVariants}
            className="mb-8"
          >
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold">
                {t(`roles.${role.toLowerCase().replace(/\s+/g, '')}`)}
              </h2>
              <div className="ml-4 h-1 flex-grow bg-primary bg-opacity-20 rounded-full" />
            </div>
            
            {/* Staff grid for this role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {staffByRole[role].map((member, index) => (
                <StaffCard
                  key={member.id}
                  username={member.username}
                  role={member.role}
                  subroles={member.subroles}
                  skinUrl={member.skinUrl}
                  discord={member.discord}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StaffList;
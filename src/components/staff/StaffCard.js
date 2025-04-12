import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const StaffCard = ({ 
  username, 
  role, 
  subroles = [], 
  skinUrl, 
  discord, 
  index 
}) => {
  const { t } = useTranslation();
  
  // Get role color based on role type
  const getRoleColor = (roleType) => {
    const roleColors = {
      'Network Owner': 'bg-red-500',
      'Manager': 'bg-orange-500',
      'Tierlist Administrator': 'bg-yellow-500',
      'Regulator': 'bg-green-500',
      'Moderator': 'bg-blue-500',
      'Senior Tester': 'bg-purple-500',
      'Tester': 'bg-indigo-500'
    };
    
    return roleColors[roleType] || 'bg-gray-500';
  };
  
  // Get border color based on role
  const getBorderColor = (roleType) => {
    const borderColors = {
      'Network Owner': 'border-red-500',
      'Manager': 'border-orange-500',
      'Tierlist Administrator': 'border-yellow-500',
      'Regulator': 'border-green-500',
      'Moderator': 'border-blue-500',
      'Senior Tester': 'border-purple-500',
      'Tester': 'border-indigo-500'
    };
    
    return borderColors[roleType] || 'border-gray-500';
  };
  
  // Animation variants with staggered delay based on index
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4,
        delay: index * 0.1 // Stagger effect
      } 
    },
    hover: { 
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className={`bg-bg-card rounded-lg shadow-md border-2 ${getBorderColor(role)} overflow-hidden`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className={`${getRoleColor(role)} py-2 px-4 text-white text-center font-semibold text-sm`}>
        {t(`roles.${role.toLowerCase().replace(/\s+/g, '')}`)}
      </div>
      
      <div className="p-4">
        {/* Minecraft skin display */}
        <div className="flex justify-center mb-4">
          <div className="relative w-20 h-40 animate-float">
            {/* Main skin view (front) */}
            <img 
              src={skinUrl || '/assets/images/minecraft-skins/default.png'} 
              alt={`${username}'s Minecraft skin`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        {/* Username */}
        <h3 className="text-lg font-semibold text-center mb-2">{username}</h3>
        
        {/* Discord tag */}
        {discord && (
          <p className="text-text-secondary text-sm text-center mb-3">
            {discord}
          </p>
        )}
        
        {/* Subroles if any */}
        {subroles && subroles.length > 0 && (
          <div className="mt-3">
            <div className="text-xs text-text-secondary mb-1 text-center">
              {t('staff.subroles')}
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              {subroles.map((subrole, idx) => (
                <span 
                  key={idx}
                  className="bg-bg-secondary px-2 py-1 rounded-full text-xs"
                >
                  {subrole}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StaffCard;
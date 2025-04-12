import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faBook, 
  faGavel, 
  faShieldAlt, 
  faGamepad,
  faCode, 
  faUsers, 
  faQuestionCircle,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  
  // Function to toggle sidebar collapse state
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  
  // Function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Navigation links with icons
  const navLinks = [
    { path: '/', icon: faHome, label: t('nav.home') },
    { path: '/guidelines', icon: faBook, label: t('nav.guidelines') },
    { path: '/punishments', icon: faGavel, label: t('nav.punishments') },
    { path: '/moderation', icon: faShieldAlt, label: t('nav.moderation') },
    { path: '/testing', icon: faGamepad, label: t('nav.testing') },
    { path: '/commands', icon: faCode, label: t('nav.commands') },
    { path: '/staff', icon: faUsers, label: t('nav.staff') },
    { path: '/faq', icon: faQuestionCircle, label: t('nav.faq') },
  ];
  
  // Sidebar animation variants
  const sidebarVariants = {
    expanded: {
      width: '240px',
      transition: { duration: 0.3 }
    },
    collapsed: {
      width: '70px',
      transition: { duration: 0.3 }
    }
  };
  
  // Link text animation variants
  const textVariants = {
    visible: {
      opacity: 1,
      display: 'block',
      transition: { delay: 0.1, duration: 0.2 }
    },
    hidden: {
      opacity: 0,
      display: 'none',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.aside
      className="hidden md:block bg-bg-secondary border-r border-border h-[calc(100vh-64px)] sticky top-16 left-0 z-40 overflow-y-auto"
      initial="expanded"
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={sidebarVariants}
    >
      <div className="py-6 flex flex-col h-full">
        {/* Navigation links */}
        <nav className="flex-1">
          <ul className="space-y-2 px-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center p-3 rounded-md transition-colors duration-200 
                    ${isActive(link.path) 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-primary hover:bg-opacity-10'}`
                  }
                >
                  <FontAwesomeIcon 
                    icon={link.icon} 
                    className={`${!collapsed ? 'mr-3' : ''} text-lg`} 
                  />
                  <motion.span
                    variants={textVariants}
                    initial="visible"
                    animate={collapsed ? 'hidden' : 'visible'}
                    className="whitespace-nowrap"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Collapse toggle button */}
        <div className="mt-6 px-3">
          <button
            onClick={toggleCollapse}
            className="w-full flex items-center justify-center p-3 rounded-md bg-primary bg-opacity-10 hover:bg-opacity-20 transition-colors duration-200"
            aria-label={collapsed ? t('aria.expandSidebar') : t('aria.collapseSidebar')}
          >
            <FontAwesomeIcon 
              icon={collapsed ? faChevronRight : faChevronLeft} 
              className="text-primary"
            />
            <motion.span
              variants={textVariants}
              initial="visible"
              animate={collapsed ? 'hidden' : 'visible'}
              className="ml-2 text-primary"
            >
              {collapsed ? '' : t('sidebar.collapse')}
            </motion.span>
          </button>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
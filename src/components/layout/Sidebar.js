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

  return (
    <aside 
      className={`hidden md:block bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-[calc(100vh-64px)] sticky top-16 left-0 z-40 overflow-y-auto transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
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
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`
                  }
                >
                  <FontAwesomeIcon 
                    icon={link.icon} 
                    className={`${!collapsed ? 'mr-3' : ''} text-lg`} 
                  />
                  {!collapsed && (
                    <span className="whitespace-nowrap">{link.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Collapse toggle button */}
        <div className="mt-6 px-3">
          <button
            onClick={toggleCollapse}
            className="w-full flex items-center justify-center p-3 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label={collapsed ? t('aria.expandSidebar') : t('aria.collapseSidebar')}
          >
            <FontAwesomeIcon 
              icon={collapsed ? faChevronRight : faChevronLeft} 
              className="text-gray-500 dark:text-gray-400"
            />
            {!collapsed && (
              <span className="ml-2 text-gray-500 dark:text-gray-400">
                {t('sidebar.collapse')}
              </span>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
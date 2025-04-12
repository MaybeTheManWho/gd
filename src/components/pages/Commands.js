import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faSearch, 
  faCopy, 
  faFilter,
  faRobot,
  faGavel,
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

// Command data (would normally be imported from a data file)
const commandsData = [
  {
    id: 1,
    name: '!ServerVerification',
    description: 'Displays verified server requirements',
    usage: '!ServerVerification',
    category: 'autoresponder'
  },
  {
    id: 2,
    name: '!verification',
    description: 'Displays account verification guide',
    usage: '!verification',
    category: 'autoresponder'
  },
  {
    id: 3,
    name: '!Applications',
    description: 'Displays application embed',
    usage: '!Applications',
    category: 'autoresponder'
  },
  {
    id: 4,
    name: '!Media',
    description: 'Displays media rank requirements',
    usage: '!Media',
    category: 'autoresponder'
  },
  {
    id: 5,
    name: '!Rubric',
    description: 'Displays server rubric information',
    usage: '!Rubric',
    category: 'autoresponder'
  },
  {
    id: 6,
    name: '!Support',
    description: 'Displays support information embed',
    usage: '!Support',
    category: 'autoresponder'
  },
  {
    id: 7,
    name: '/whois',
    description: 'View user information',
    usage: '/whois [userID]',
    category: 'moderation',
    parameters: [
      {
        name: 'userID',
        description: 'The Discord ID of the user',
        required: true
      }
    ]
  },
  {
    id: 8,
    name: '/modlogs',
    description: 'View punishment history of a user',
    usage: '/modlogs [user]',
    category: 'moderation',
    parameters: [
      {
        name: 'user',
        description: 'The user to check logs for',
        required: true
      }
    ]
  },
  {
    id: 9,
    name: '/warn',
    description: 'Warn a user',
    usage: '/warn [user] [reason]',
    category: 'moderation',
    parameters: [
      {
        name: 'user',
        description: 'The user to warn',
        required: true
      },
      {
        name: 'reason',
        description: 'Reason for the warning',
        required: true
      }
    ]
  },
  {
    id: 10,
    name: '/mute',
    description: 'Mute a user for a specified time',
    usage: '/mute [user] [time] [reason]',
    category: 'moderation',
    parameters: [
      {
        name: 'user',
        description: 'The user to mute',
        required: true
      },
      {
        name: 'time',
        description: 'Duration of the mute (e.g. 1h, 30m, 1d)',
        required: true
      },
      {
        name: 'reason',
        description: 'Reason for the mute',
        required: true
      }
    ]
  },
  {
    id: 11,
    name: '/Start',
    description: 'Start a testing session and open the queue',
    usage: '/Start',
    category: 'testing'
  },
  {
    id: 12,
    name: '/Next',
    description: 'Get the next person in the testing queue',
    usage: '/Next',
    category: 'testing'
  },
  {
    id: 13,
    name: '/Skip',
    description: 'Skip the current person in the testing queue',
    usage: '/Skip',
    category: 'testing'
  },
  {
    id: 14,
    name: '/Close',
    description: 'Close the current test and assign a tier',
    usage: '/Close',
    category: 'testing'
  },
  {
    id: 15,
    name: '/Stop',
    description: 'End the testing session',
    usage: '/Stop',
    category: 'testing'
  },
  {
    id: 16,
    name: '/switchpanel',
    description: 'Transfer a ticket to another category',
    usage: '/switchpanel',
    category: 'support'
  },
  {
    id: 17,
    name: '/blacklist',
    description: 'Blacklist a user',
    usage: '/blacklist [user] [reason]',
    category: 'moderation',
    parameters: [
      {
        name: 'user',
        description: 'The user to blacklist',
        required: true
      },
      {
        name: 'reason',
        description: 'Reason for the blacklist',
        required: true
      }
    ]
  }
];

const Commands = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle category filter change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  
  // Copy command to clipboard
  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };
  
  // Filter commands based on search term and category
  const filteredCommands = commandsData.filter(command => {
    const matchesSearch = command.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        command.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || command.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Group commands by category
  const groupedCommands = filteredCommands.reduce((groups, command) => {
    const category = command.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(command);
    return groups;
  }, {});
  
  // Get category display name
  const getCategoryName = (category) => {
    switch (category) {
      case 'autoresponder':
        return 'Auto Responder Commands';
      case 'moderation':
        return 'Moderation Commands';
      case 'testing':
        return 'Testing Commands';
      case 'support':
        return 'Support Commands';
      default:
        return 'Other Commands';
    }
  };
  
  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'autoresponder':
        return faRobot;
      case 'moderation':
        return faGavel;
      case 'testing':
        return faCode;
      case 'support':
        return faFilter;
      default:
        return faCode;
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3 } 
    }
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
          Commands
        </h1>
        <p className="text-text-secondary mb-6">
          This page lists all the available commands for staff members. You can search for specific commands or filter by category.
        </p>
      </motion.div>
      
      {/* Search and filter controls */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 p-4 bg-bg-card rounded-lg shadow-md"
      >
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-text-secondary" />
            </div>
            <input
              type="text"
              placeholder="Search commands..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          {/* Category filter */}
          <div className="md:w-64">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faFilter} className="text-text-secondary" />
              </div>
              <select
                className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="all">All Categories</option>
                <option value="autoresponder">Auto Responder</option>
                <option value="moderation">Moderation</option>
                <option value="testing">Testing</option>
                <option value="support">Support</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Commands list */}
      <div className="space-y-8">
        {Object.keys(groupedCommands).length > 0 ? (
          Object.keys(groupedCommands).map(category => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <div className="flex items-center mb-4">
                <FontAwesomeIcon 
                  icon={getCategoryIcon(category)} 
                  className="text-primary mr-3 text-lg"
                />
                <h2 className="text-xl font-semibold">
                  {getCategoryName(category)}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {groupedCommands[category].map(command => (
                  <motion.div
                    key={command.id}
                    variants={itemVariants}
                    className="bg-bg-card rounded-lg p-4 border border-border hover:border-primary transition-all duration-300"
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="font-mono text-lg font-semibold text-primary">
                        {command.name}
                      </h3>
                      <button
                        onClick={() => copyToClipboard(command.usage, command.id)}
                        className="text-text-secondary hover:text-primary transition-colors"
                        title="Copy command"
                      >
                        {copiedId === command.id ? (
                          <FontAwesomeIcon icon={faCheck} className="text-success" />
                        ) : (
                          <FontAwesomeIcon icon={faCopy} />
                        )}
                      </button>
                    </div>
                    
                    <p className="text-text-secondary mb-3">
                      {command.description}
                    </p>
                    
                    <div className="font-mono text-sm p-2 bg-bg-primary rounded-md">
                      {command.usage}
                    </div>
                    
                    {command.parameters && command.parameters.length > 0 && (
                      <div className="mt-3">
                        <h4 className="text-sm font-semibold mb-1">Parameters:</h4>
                        <ul className="space-y-1">
                          {command.parameters.map((param, index) => (
                            <li key={index} className="text-sm flex items-start">
                              <span className="font-mono text-primary">{param.name}</span>
                              <span className="mx-2">-</span>
                              <span>{param.description}</span>
                              {param.required && (
                                <span className="ml-1 text-xs text-danger">(required)</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <FontAwesomeIcon icon={faTimes} className="text-danger text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">No commands found</h3>
            <p className="text-text-secondary">
              Try adjusting your search or filter settings.
            </p>
          </motion.div>
        )}
      </div>
      
      {/* Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 p-6 bg-primary bg-opacity-5 rounded-lg"
      >
        <h3 className="text-xl font-semibold mb-4">
          Command Usage Notes
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
            <span>Always use the #staff-cmds channel for moderation commands.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
            <span>Check user information with /whois before issuing punishments.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
            <span>Verify previous infractions with /modlogs to ensure appropriate escalation.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
            <span>The Auto Responder commands may occasionally have issues. If they don't work, provide the information manually.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Commands;
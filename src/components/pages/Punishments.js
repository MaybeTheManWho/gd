import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faExclamationTriangle, 
  faFilter,
  faSort,
  faSortUp,
  faSortDown,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';

// Components
import Alert from '../common/Alert';

// Sample punishment data (would normally be imported from a data file)
const punishmentData = [
  {
    id: 1,
    offense: "Incorrectly using channels",
    firstOffense: "Warn",
    secondOffense: "1 Hour Mute",
    thirdOffense: "1 Day Mute",
    fourthOffense: "",
    fifthOffense: "",
    category: "chat"
  },
  {
    id: 2,
    offense: "Begging Staff to Check a Ticket",
    firstOffense: "Warn",
    secondOffense: "30 Mins Mute",
    thirdOffense: "2 Hours Mute",
    fourthOffense: "5 Hours Mute",
    fifthOffense: "10 Hours Mute",
    category: "chat"
  },
  {
    id: 3,
    offense: "Begging for Premium Account or Cosmetics",
    firstOffense: "Warn",
    secondOffense: "1 Hour Mute",
    thirdOffense: "1 Day Mute",
    fourthOffense: "5 Day Mute",
    fifthOffense: "",
    category: "chat"
  },
  {
    id: 4,
    offense: "Discussing Cheats",
    firstOffense: "3 Hours Mute",
    secondOffense: "6 Hours Mute",
    thirdOffense: "12 Hours Mute",
    fourthOffense: "1 Day Mute",
    fifthOffense: "Perm Mute",
    category: "conduct"
  },
  {
    id: 5,
    offense: "Inappropriate Messages",
    firstOffense: "1 Day Mute",
    secondOffense: "5 Day Mute",
    thirdOffense: "Ban",
    fourthOffense: "",
    fifthOffense: "",
    category: "conduct"
  },
  {
    id: 6,
    offense: "Toxicity",
    firstOffense: "1 Hour Mute",
    secondOffense: "12 Hours Mute",
    thirdOffense: "1 Day Mute",
    fourthOffense: "7 Day Mute",
    fifthOffense: "",
    category: "conduct"
  },
  {
    id: 7,
    offense: "Sending Copy-Pastes or Flooding Chat",
    firstOffense: "1 Hour Mute",
    secondOffense: "1 Day Mute",
    thirdOffense: "5 Day Mute",
    fourthOffense: "7 Day Mute",
    fifthOffense: "Perm Mute",
    category: "chat"
  },
  {
    id: 8,
    offense: "Pinging Staff",
    firstOffense: "Warning",
    secondOffense: "1 Hour Mute",
    thirdOffense: "1 Day Mute",
    fourthOffense: "7 Day Mute",
    fifthOffense: "",
    category: "chat",
    note: "Mutes are at the discretion of the staff member who was pinged."
  },
  {
    id: 9,
    offense: "Not Speaking English",
    firstOffense: "Warning",
    secondOffense: "1 Hour Mute",
    thirdOffense: "",
    fourthOffense: "",
    fifthOffense: "",
    category: "chat"
  },
  {
    id: 10,
    offense: "Racism",
    firstOffense: "1 Day Mute",
    secondOffense: "5 Day Mute",
    thirdOffense: "",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious"
  },
  {
    id: 11,
    offense: "Homophobia",
    firstOffense: "14 Day Mute",
    secondOffense: "Permanent Mute",
    thirdOffense: "",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious"
  },
  {
    id: 12,
    offense: "Suicide Encouragement / Death Threats",
    firstOffense: "1 Day Mute",
    secondOffense: "5 Day Mute",
    thirdOffense: "",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious"
  },
  {
    id: 13,
    offense: "Sensitive Subject Abuse",
    firstOffense: "1 Day Mute",
    secondOffense: "5 Day Mute",
    thirdOffense: "",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious"
  },
  {
    id: 14,
    offense: "Sending NSFW Media",
    firstOffense: "1 Day Mute",
    secondOffense: "Ban",
    thirdOffense: "",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious"
  },
  {
    id: 15,
    offense: "Discrimination through Media (homophobia, racism, etc.)",
    firstOffense: "1 Day Mute",
    secondOffense: "7 Day Mute",
    thirdOffense: "Ban",
    fourthOffense: "",
    fifthOffense: "",
    category: "serious"
  },
  {
    id: 16,
    offense: "Advertising",
    firstOffense: "Warning",
    secondOffense: "1 Day Mute",
    thirdOffense: "5 Day Mute",
    fourthOffense: "14 Day Mute",
    fifthOffense: "",
    category: "chat",
    note: "If the link is spammed or sent by a bot, you may perm mute on the first offence."
  }
];

const Punishments = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortField, setSortField] = useState('offense');
  const [sortDirection, setSortDirection] = useState('asc');
  const [expandedNotes, setExpandedNotes] = useState({});
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle category filter change
  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };
  
  // Handle sorting change
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Toggle note expansion
  const toggleNote = (id) => {
    setExpandedNotes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Filter and sort punishments
  const filteredPunishments = punishmentData
    .filter(punishment => {
      // Apply search filter
      const matchesSearch = punishment.offense.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Apply category filter
      const matchesCategory = filterCategory === 'all' || punishment.category === filterCategory;
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      // Handle sorting
      if (sortField === 'offense') {
        return sortDirection === 'asc' 
          ? a.offense.localeCompare(b.offense)
          : b.offense.localeCompare(a.offense);
      }
      
      // For other fields, we can add more sorting logic here
      return 0;
    });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5
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
          Punishments
        </h1>
        <p className="text-text-secondary mb-6">
          Please use the #staff-cmds channel to execute any punishment. Remember to run the /whois [ID] and /modlogs [ID] commands to make sure you're handing out the correct punishment to the correct person.
        </p>
        
        <Alert type="warning" title="Important Note">
          If you see someone break a rule that has not been listed here, please reach out to a regulator+ to decide on an appropriate punishment.
        </Alert>
      </motion.div>
      
      {/* Filters and search */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-bg-card rounded-lg shadow-md p-4 mb-6"
      >
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Search */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-text-secondary" />
            </div>
            <input
              type="text"
              placeholder="Search offenses..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          {/* Category filter */}
          <div className="w-full md:w-auto flex items-center space-x-2">
            <FontAwesomeIcon icon={faFilter} className="text-text-secondary" />
            <select
              className="flex-1 md:w-44 py-2 px-3 rounded-md border border-border bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              value={filterCategory}
              onChange={handleFilterChange}
            >
              <option value="all">All Categories</option>
              <option value="chat">Chat Offenses</option>
              <option value="conduct">Conduct Offenses</option>
              <option value="serious">Serious Offenses</option>
            </select>
          </div>
        </div>
      </motion.div>
      
      {/* Punishments table */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="overflow-x-auto"
      >
        <table className="min-w-full bg-bg-card rounded-lg shadow-md overflow-hidden">
          <thead className="bg-primary bg-opacity-10 text-primary">
            <tr>
              <th 
                className="py-3 px-4 text-left font-semibold cursor-pointer"
                onClick={() => handleSort('offense')}
              >
                <div className="flex items-center space-x-1">
                  <span>Offense</span>
                  <FontAwesomeIcon 
                    icon={
                      sortField === 'offense' 
                        ? (sortDirection === 'asc' ? faSortUp : faSortDown)
                        : faSort
                    } 
                    className="text-xs"
                  />
                </div>
              </th>
              <th className="py-3 px-4 text-left font-semibold">1st Offense</th>
              <th className="py-3 px-4 text-left font-semibold">2nd Offense</th>
              <th className="py-3 px-4 text-left font-semibold">3rd Offense</th>
              <th className="py-3 px-4 text-left font-semibold">Further Offenses</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredPunishments.length > 0 ? (
              filteredPunishments.map((punishment) => (
                <React.Fragment key={punishment.id}>
                  <tr className="hover:bg-primary hover:bg-opacity-5 transition-colors">
                    <td className="py-3 px-4">
                      {punishment.offense}
                      {punishment.note && (
                        <button
                          className="ml-2 text-primary text-sm"
                          onClick={() => toggleNote(punishment.id)}
                        >
                          <FontAwesomeIcon 
                            icon={expandedNotes[punishment.id] ? faChevronUp : faChevronDown} 
                            className="text-xs"
                          />
                          <span className="ml-1">Note</span>
                        </button>
                      )}
                    </td>
                    <td className="py-3 px-4">{punishment.firstOffense}</td>
                    <td className="py-3 px-4">{punishment.secondOffense}</td>
                    <td className="py-3 px-4">{punishment.thirdOffense}</td>
                    <td className="py-3 px-4">
                      {punishment.fourthOffense && (
                        <span className="block">4th: {punishment.fourthOffense}</span>
                      )}
                      {punishment.fifthOffense && (
                        <span className="block">5th: {punishment.fifthOffense}</span>
                      )}
                    </td>
                  </tr>
                  {punishment.note && expandedNotes[punishment.id] && (
                    <tr className="bg-primary bg-opacity-5">
                      <td colSpan={5} className="py-2 px-4 text-sm italic border-t border-dashed border-border">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="text-warning mr-2" />
                        {punishment.note}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-8 text-center text-text-secondary">
                  No punishments match your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>
      
      {/* Additional info */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 bg-bg-card rounded-lg shadow-md p-6"
      >
        <h2 className="text-xl font-semibold mb-4">
          Important Reminders
        </h2>
        <ul className="space-y-2 list-disc pl-5">
          <li>For offenses not listed here, consult with a Regulator or higher.</li>
          <li>Always check player history with /modlogs before applying punishments.</li>
          <li>Use your best judgment, but be consistent with punishment guidelines.</li>
          <li>If you're unsure about a punishment, ask for help in the staff channel.</li>
          <li>Document all actions taken in the appropriate channels.</li>
          <li>After the final listed offense, continue escalating punishment durations appropriately.</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Punishments;
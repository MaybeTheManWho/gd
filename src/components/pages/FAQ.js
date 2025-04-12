import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuestionCircle, 
  faChevronDown, 
  faChevronUp, 
  faSearch,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons';

// FAQ data (would normally be imported from a data file)
const faqData = [
  {
    id: 1,
    question: "What should I do if I'm unsure about a punishment?",
    answer: "If you're uncertain about which punishment to apply, consult with a Regulator or higher-ranking staff member. It's better to ask than to issue an incorrect punishment. You can use the staff channel to ask for guidance.",
    category: "moderation"
  },
  {
    id: 2,
    question: "How do I handle a player contesting a punishment?",
    answer: "If a player disputes a punishment, first check the evidence and ensure the punishment was justified. If they continue to contest, direct them to create a ticket for appeals. Do not reverse punishments without approval from a Regulator or higher.",
    category: "moderation"
  },
  {
    id: 3,
    question: "What if a staff member is breaking rules?",
    answer: "If you observe another staff member violating rules, document the incident with screenshots and report it privately to a Regulator or higher. Do not confront them publicly in server channels.",
    category: "staff"
  },
  {
    id: 4,
    question: "How do I get promoted to a higher staff position?",
    answer: "Promotions are based on activity, quality of work, and adherence to staff guidelines. There's no application process for promotions - they are awarded based on merit and observation by higher staff. Focus on doing your job well and consistently.",
    category: "staff"
  },
  {
    id: 5,
    question: "What should I do if I can't be active for a period of time?",
    answer: "If you need to take a break or will be inactive, inform a Manager or Administrator through DMs. Explain your situation and approximate duration of inactivity. Extended unexplained inactivity may result in demotion.",
    category: "staff"
  },
  {
    id: 6,
    question: "How do I handle testing disputes?",
    answer: "If a player disputes their tier assignment, ask them to provide evidence of their gameplay. For serious disputes, contact an HT3 tester or Regulator to review the case. Never change a tier without proper authorization.",
    category: "testing"
  },
  {
    id: 7,
    question: "What if I'm being harassed by a player?",
    answer: "Document the harassment with screenshots and report it to a higher staff member. You may mute the player according to the punishment guidelines, but if you feel uncomfortable, ask another staff member to handle the situation.",
    category: "moderation"
  },
  {
    id: 8,
    question: "How do I verify if a server is eligible for testing?",
    answer: "A server must be on the approved server list to be eligible for testing. To check if a server is approved, look in the #verified-servers channel. If a player wants their server verified, follow the Server Verification process described in the Moderation Guide.",
    category: "testing"
  },
  {
    id: 9,
    question: "What if I make a mistake when assigning a tier?",
    answer: "If you realize you've made a mistake in tier assignment, contact a Regulator immediately. Provide details of the test and why you believe the assigned tier was incorrect. Do not attempt to change the tier yourself.",
    category: "testing"
  },
  {
    id: 10,
    question: "How do I deal with spam or raid attempts?",
    answer: "In case of raids or organized spam, immediately mute the offenders and notify higher staff in the staff channel. Do not engage with raiders. Document usernames and behavior with screenshots for further action by Administrators.",
    category: "moderation"
  }
];

const FAQ = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Handle question click to expand/collapse
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle category filter change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  
  // Filter FAQ items based on search term and category
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3
      }
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
          Frequently Asked Questions
        </h1>
        <p className="text-text-secondary mb-6">
          Find answers to common questions about staff responsibilities, moderation procedures, and testing protocols.
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
              placeholder="Search questions or answers..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-border bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          {/* Category filter */}
          <div className="md:w-64">
            <select
              className="w-full px-4 py-2 rounded-md border border-border bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="all">All Categories</option>
              <option value="moderation">Moderation</option>
              <option value="testing">Testing</option>
              <option value="staff">Staff</option>
            </select>
          </div>
        </div>
      </motion.div>
      
      {/* FAQ list */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map(faq => (
            <motion.div 
              key={faq.id}
              variants={itemVariants}
              className="border border-border rounded-lg overflow-hidden"
            >
              {/* Question (always visible) */}
              <button
                className={`w-full flex justify-between items-center p-4 text-left font-medium transition-colors ${
                  expandedId === faq.id 
                    ? 'bg-primary text-white'
                    : 'bg-bg-card hover:bg-primary hover:bg-opacity-10'
                }`}
                onClick={() => toggleExpand(faq.id)}
                aria-expanded={expandedId === faq.id}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon 
                    icon={faQuestionCircle} 
                    className={`mr-3 ${expandedId === faq.id ? 'text-white' : 'text-primary'}`} 
                  />
                  <span>{faq.question}</span>
                </div>
                <FontAwesomeIcon 
                  icon={expandedId === faq.id ? faMinus : faPlus} 
                  className="ml-2"
                />
              </button>
              
              {/* Answer (visible when expanded) */}
              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="p-4 bg-bg-secondary border-t border-border"
                  >
                    <p className="text-text-secondary">{faq.answer}</p>
                    
                    {/* Category tag */}
                    <div className="mt-4 flex items-center">
                      <span className="text-xs uppercase tracking-wider text-text-secondary">
                        Category:
                      </span>
                      <span className="ml-2 px-2 py-1 text-xs bg-primary bg-opacity-10 text-primary rounded">
                        {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10 bg-bg-card rounded-lg"
          >
            <FontAwesomeIcon icon={faQuestionCircle} className="text-primary text-5xl mb-4 opacity-30" />
            <h3 className="text-xl font-semibold mb-2">No questions found</h3>
            <p className="text-text-secondary">
              Try adjusting your search or filter settings.
            </p>
          </motion.div>
        )}
      </motion.div>
      
      {/* Additional help section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 p-6 bg-primary bg-opacity-5 rounded-lg"
      >
        <h3 className="text-xl font-semibold mb-4">
          Still Have Questions?
        </h3>
        <p className="mb-4">
          If you can't find the answer to your question here, you can reach out to senior staff members for assistance:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
            <span>For general staff questions, contact Rio or Linaton.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
            <span>For testing-specific questions, reach out to Obsessivebf or Weqy.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
            <span>For moderation guidance, any Regulator can assist you.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default FAQ;
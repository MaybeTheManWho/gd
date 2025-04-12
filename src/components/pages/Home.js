import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle, 
  faBook, 
  faGavel, 
  faShieldAlt,
  faGamepad,
  faCode,
  faUsers,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  // Feature cards data
  const features = [
    {
      icon: faBook,
      title: "Staff Guidelines",
      description: "Detailed rules and expectations for all staff members.",
      link: "/guidelines",
      color: "bg-blue-500"
    },
    {
      icon: faGavel,
      title: "Punishments",
      description: "Reference for appropriate punishment durations and escalation.",
      link: "/punishments",
      color: "bg-red-500"
    },
    {
      icon: faShieldAlt,
      title: "Moderation Guide",
      description: "How to handle various moderation situations effectively.",
      link: "/moderation",
      color: "bg-green-500"
    },
    {
      icon: faGamepad,
      title: "Testing Guide",
      description: "Procedures for testing players and assigning tiers.",
      link: "/testing",
      color: "bg-purple-500"
    },
    {
      icon: faCode,
      title: "Commands",
      description: "Essential commands for staff members to perform their duties.",
      link: "/commands",
      color: "bg-yellow-500"
    },
    {
      icon: faUsers,
      title: "Staff List",
      description: "Overview of the staff team and hierarchy.",
      link: "/staff",
      color: "bg-indigo-500"
    },
    {
      icon: faQuestionCircle,
      title: "FAQ",
      description: "Common questions and answers for staff members.",
      link: "/faq",
      color: "bg-orange-500"
    }
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 px-4 rounded-lg mb-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Sword Tierlist Staff Team!
          </h1>
          <p className="text-lg mb-6 opacity-90">
            This guide will present and coach you on your roles and responsibilities as a staff member.
          </p>
          <div className="bg-white bg-opacity-10 p-4 rounded-md border-l-4 border-warning">
            <div className="flex items-start">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-warning mr-3 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Confidential Information</h3>
                <p>Leaking this document to anyone who is not a staff member will result in an instant Demotion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Welcome message */}
      <section className="mb-10">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">
            Staff Guide Introduction
          </h2>
          <p className="mb-4">
            Your duty as a staff member is to ensure that all users have the utmost experience possible. If you do have any questions, even in the slightest, feel free to ask for an opinion. Answers may also be found in the F.A.Q. section of this website.
          </p>
          <p className="mb-4">
            Please keep in mind that what you do on other servers/social media platforms further influences your staff position on the network. Breaking any staff rules on any platform will put your position at risk.
          </p>
          <div className="mt-6 bg-danger bg-opacity-10 text-danger p-4 rounded-md flex items-start">
            <FontAwesomeIcon icon={faExclamationTriangle} className="mt-1 mr-3 text-lg flex-shrink-0" />
            <p className="text-sm">
              Management have full access to modify anything mentioned in this website. If anything is altered, you will be notified via staff chat. If you have any suggestions for the staff website, please contact Rio.
            </p>
          </div>
        </div>
      </section>
      
      {/* Features grid */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">
          Guide Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card hover:border-primary border-2 border-transparent"
            >
              <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}>
                <FontAwesomeIcon icon={feature.icon} className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary mb-4">{feature.description}</p>
              <Link 
                to={feature.link}
                className="btn btn-primary"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      {/* Quick access section */}
      <section>
        <div className="card bg-primary bg-opacity-5">
          <h2 className="text-2xl font-semibold mb-4">
            Quick Access
          </h2>
          <p className="mb-6">
            Need to find something specific? Here are direct links to the most frequently accessed sections:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link 
              to="/guidelines"
              className="btn btn-outline w-full"
            >
              Staff Guidelines
            </Link>
            <Link 
              to="/punishments"
              className="btn btn-outline w-full"
            >
              Punishments
            </Link>
            <Link 
              to="/commands"
              className="btn btn-outline w-full"
            >
              Commands
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
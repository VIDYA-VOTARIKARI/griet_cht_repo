import React from 'react';
import { motion } from 'framer-motion';

const Placements = () => {
  const stats = [
    { label: 'Companies Visited', value: '150+' },
    { label: 'Highest Package', value: '₹45 LPA' },
    { label: 'Average Package', value: '₹8.5 LPA' },
    { label: 'Placement Rate', value: '95%' }
  ];

  const topRecruiters = [
    'Microsoft',
    'Amazon',
    'Infosys',
    'TCS',
    'Wipro',
    'Accenture',
    'IBM',
    'Cognizant'
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Placements
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Top Recruiters
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {topRecruiters.map((company) => (
                <div
                  key={company}
                  className="bg-gray-100 dark:bg-gray-600 p-3 rounded text-center text-gray-800 dark:text-gray-200"
                >
                  {company}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Placement Process
            </h2>
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">1</span>
                Pre-placement Talk
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">2</span>
                Aptitude Test
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">3</span>
                Technical Interview
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">4</span>
                HR Interview
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">5</span>
                Job Offer
              </li>
            </ol>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Placements;
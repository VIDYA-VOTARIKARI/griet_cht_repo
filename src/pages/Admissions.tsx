import React from 'react';
import { motion } from 'framer-motion';

const Admissions = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Admissions
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-2"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Admission Process</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">B.Tech Admissions</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Category A (70% of seats) - Through EAMCET Counselling</li>
                  <li>Category B (30% of seats) - Management Quota</li>
                  <li>Lateral Entry - Through ECET Counselling</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">M.Tech Admissions</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Through PGECET Counselling</li>
                  <li>GATE Qualified Candidates</li>
                  <li>Sponsored Candidates</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Important Dates</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>Application Start: March 1, 2024</li>
                <li>Last Date: April 30, 2024</li>
                <li>Counselling: May-June 2024</li>
                <li>Classes Begin: July 2024</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Required Documents</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>10th Certificate</li>
                <li>12th Certificate</li>
                <li>EAMCET/ECET Rank Card</li>
                <li>Category Certificate (if applicable)</li>
                <li>Transfer Certificate</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
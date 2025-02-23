import React from 'react';
import { motion } from 'framer-motion';

const Academics = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Academics
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-2"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Programs Offered</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">B.Tech Programs</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Computer Science and Engineering</li>
                  <li>Information Technology</li>
                  <li>Electronics and Communication Engineering</li>
                  <li>Electrical and Electronics Engineering</li>
                  <li>Mechanical Engineering</li>
                  <li>Civil Engineering</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">M.Tech Programs</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Computer Science and Engineering</li>
                  <li>VLSI System Design</li>
                  <li>Embedded Systems</li>
                  <li>Power Electronics</li>
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Academic Calendar</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>Odd Semester: July - December</li>
                <li>Even Semester: January - June</li>
                <li>Mid Examinations: September & March</li>
                <li>End Examinations: December & June</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Research Centers</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>Center for AI and Machine Learning</li>
                <li>Center for IoT and Embedded Systems</li>
                <li>Center for Robotics and Automation</li>
                <li>Center for Advanced Materials</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
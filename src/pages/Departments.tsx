import React from 'react';
import { motion } from 'framer-motion';

const Departments = () => {
  const departments = [
    {
      name: 'Computer Science and Engineering',
      hod: 'Dr. John Doe',
      description: 'Offering cutting-edge curriculum in AI, ML, and Software Engineering',
      facilities: ['AI Lab', 'Software Development Lab', 'Research Lab']
    },
    {
      name: 'Information Technology',
      hod: 'Dr. Jane Smith',
      description: 'Focusing on emerging technologies and industry-relevant skills',
      facilities: ['IoT Lab', 'Network Security Lab', 'Cloud Computing Lab']
    },
    {
      name: 'Electronics and Communication',
      hod: 'Dr. Robert Johnson',
      description: 'Excellence in communication systems and VLSI design',
      facilities: ['VLSI Lab', 'Communication Lab', 'Microprocessor Lab']
    },
    {
      name: 'Mechanical Engineering',
      hod: 'Dr. Michael Brown',
      description: 'Strong focus on design, manufacturing, and automation',
      facilities: ['CAD/CAM Lab', 'Automation Lab', 'Manufacturing Lab']
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Departments
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{dept.name}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Head of Department</h3>
                  <p className="text-gray-700 dark:text-gray-300">{dept.hod}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">About</h3>
                  <p className="text-gray-700 dark:text-gray-300">{dept.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Facilities</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {dept.facilities.map((facility) => (
                      <li key={facility}>{facility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
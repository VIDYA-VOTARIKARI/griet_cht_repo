import 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          About GRIET
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="prose dark:prose-invert max-w-none"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Gokaraju Rangaraju Institute of Engineering and Technology (GRIET) was established in 1997. 
              The institute is approved by AICTE and affiliated to JNTUH. GRIET has consistently maintained 
              its position as one of the top engineering colleges in Telangana.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 dark:text-white">Our Vision</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              To be among the best of the institutions for engineers and technologists with attitudes, 
              skills and knowledge and to become an epicenter of creative solutions.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>To provide good quality technical education and opportunities for innovation.</li>
              <li>To provide holistic environment for overall development of personality.</li>
              <li>To create opportunities for employment and entrepreneurship.</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4B-Qfx7j9EjWmEguLYgp4HsyB5gjVHuovw&s"
              alt="College Campus"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Achievements</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>NAAC A++ Accreditation</li>
                <li>NBA Accredited Programs</li>
                <li>ISO 9001:2015 Certified</li>
                <li>Ranked among Top 100 Engineering Colleges</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
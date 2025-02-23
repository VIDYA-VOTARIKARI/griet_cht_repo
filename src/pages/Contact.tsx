import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                  <p>Bachupally, Kukatpally, Hyderabad - 500090</p>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-blue-600" />
                  <p>+91-40-42985000</p>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  <p>info@griet.ac.in</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Form</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg h-full"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Location</h2>
            <div className="aspect-w-16 aspect-h-9 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3605874065474!2d78.4242!3d17.4937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918d9c12aa53%3A0x3c12d7940f03c416!2sGokaraju%20Rangaraju%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1648226058377!5m2!1sen!2sin"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
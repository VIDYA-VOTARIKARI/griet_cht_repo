import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 dark:bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Bachupally, Kukatpally, Hyderabad - 500090
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                +91-40-42985000
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                info@griet.ac.in
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors">AICTE</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">JNTUH</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">UGC</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">NBA</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Student Corner</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Examination Cell</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Student Activities</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Sports</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 dark:border-gray-700">
          <p className="text-center">
            © {new Date().getFullYear()} Gokaraju Rangaraju Institute of Engineering and Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
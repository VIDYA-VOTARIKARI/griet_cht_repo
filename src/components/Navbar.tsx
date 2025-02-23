import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Search, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Placements', path: '/placements' },
    { name: 'Contact', path: '/contact' },
  ];

  const dropdownLinks = {
    Academics: [
      { name: 'Programs', path: '/academics/programs' },
      { name: 'Curriculum', path: '/academics/curriculum' },
      { name: 'Research', path: '/academics/research' },
    ],
    Departments: [
      { name: 'CSE', path: '/departments/CSE' },
      { name: 'ECE', path: '/departments/ECE' },
      { name: 'MECH', path: '/departments/mechanical' },
      { name: 'CSBS', path: '/departments/CSBS' },
      { name: 'CSM', path: '/departments/CSM' },
      { name: 'IT', path: '/departments/IT' },
      { name: 'AIML', path: '/departments/AIML' },
    ],
  };

  return (
    <nav className="bg-blue-900 dark:bg-gray-800 text-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="rounded-full h-12 w-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTkkG-9c2jad8zMOjRkn8o8qZ-L9nnRC5JA&s"
                alt="GRIET Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-1 rounded-full text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div ref={dropdownRef} className="relative">
              {Object.keys(dropdownLinks).map((menu) => (
                <div key={menu} className="relative inline-block">
                  <button
                    onClick={() => toggleDropdown(menu)}
                    className="px-3 py-2 rounded-md text-sm font-medium flex items-center hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
                  >
                    {menu} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {dropdownOpen === menu && (
                    <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-lg py-2 z-50">
                      {dropdownLinks[menu].map((sublink) => (
                        <Link
                          key={sublink.path}
                          to={sublink.path}
                          className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
                          onClick={() => setDropdownOpen(null)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-blue-900 dark:bg-gray-800 text-white shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {Object.keys(dropdownLinks).map((menu) => (
              <div key={menu} className="">
                <button
                  onClick={() => toggleDropdown(menu)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
                >
                  {menu}
                </button>
                {dropdownOpen === menu && (
                  <div className="pl-6">
                    {dropdownLinks[menu].map((sublink) => (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        className="block px-3 py-2 text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
                        onClick={() => {
                          setDropdownOpen(null);
                          setIsOpen(false);
                        }}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

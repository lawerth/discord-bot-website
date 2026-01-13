import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Disc as Discord } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">SB</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">SenBot</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              SenBot is the ultimate Discord bot solution for server management, moderation, music, and entertainment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Discord className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#features" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#commands" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Commands
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} SenBot. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
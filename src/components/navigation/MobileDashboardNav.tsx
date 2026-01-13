import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, LayoutDashboard, Server, Command as CommandLine, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  onClick: () => void;
}

const MobileNavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label, onClick }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        'flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-all',
        isActive
          ? 'bg-primary text-white'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
      )}
      onClick={onClick}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </NavLink>
  );
};

const MobileDashboardNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
    closeMenu();
    logout();
  };

  return (
    <div className="md:hidden sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
          <span className="font-medium text-gray-900 dark:text-white">Dashboard</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {user?.username}
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            {user?.avatar ? (
              <img 
                src={user.avatar} 
                alt={user?.username || 'User'} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-primary text-white">
                {user?.username?.[0]?.toUpperCase() || 'U'}
              </div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-200 dark:border-gray-800"
          >
            <div className="p-4 space-y-1">
              <MobileNavItem 
                to="/dashboard" 
                icon={LayoutDashboard} 
                label="Overview" 
                onClick={closeMenu} 
              />
              <MobileNavItem 
                to="/dashboard/servers" 
                icon={Server} 
                label="Servers" 
                onClick={closeMenu} 
              />
              <MobileNavItem 
                to="/dashboard/commands" 
                icon={CommandLine} 
                label="Commands" 
                onClick={closeMenu} 
              />
              <MobileNavItem 
                to="/dashboard/settings" 
                icon={Settings} 
                label="Settings" 
                onClick={closeMenu} 
              />
              
              <button 
                onClick={handleLogout}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm w-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 mt-4"
              >
                <LogOut className="h-5 w-5" />
                <span>Log out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileDashboardNav;
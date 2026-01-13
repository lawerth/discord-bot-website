import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Server, Command as CommandLine, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../utils/cn';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all',
        isActive
          ? 'bg-primary text-white'
          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </NavLink>
  );
};

const DashboardSidebar: React.FC = () => {
  const { logout, user } = useAuth();

  return (
    <aside className="hidden md:flex md:w-64 flex-col gap-y-6 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 h-screen sticky top-0">
      {/* User Profile */}
      <div className="flex items-center gap-3 px-3 py-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
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
        <div>
          <p className="font-medium text-gray-900 dark:text-white">
            {user?.username || 'User'}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Dashboard</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 mb-1">
          Main
        </p>
        <NavItem to="/dashboard" icon={LayoutDashboard} label="Overview" />
        <NavItem to="/dashboard/servers" icon={Server} label="Servers" />
        <NavItem to="/dashboard/commands" icon={CommandLine} label="Commands" />
        <NavItem to="/dashboard/settings" icon={Settings} label="Settings" />
      </nav>

      <div className="mt-auto">
        <button 
          onClick={logout}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm w-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
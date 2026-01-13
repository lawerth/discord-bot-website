import React from 'react';
import { Activity, Users, Server, MessageSquare, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  changeValue?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  changeValue, 
  changeType = 'neutral',
  delay = 0 
}) => {
  const changeColor = {
    positive: 'text-green-600 dark:text-green-400',
    negative: 'text-red-600 dark:text-red-400',
    neutral: 'text-gray-600 dark:text-gray-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</h3>
          
          {changeValue && (
            <p className={`text-xs mt-2 flex items-center ${changeColor[changeType]}`}>
              {changeType === 'positive' && '↑'}
              {changeType === 'negative' && '↓'}
              {changeValue}
            </p>
          )}
        </div>
        
        <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back, {user?.username}! Here's what's happening with your bot.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Servers"
            value="24"
            icon={<Server className="h-5 w-5 text-primary" />}
            changeValue="+4 this week"
            changeType="positive"
            delay={0.1}
          />
          <StatCard
            title="Active Users"
            value="1,453"
            icon={<Users className="h-5 w-5 text-blue-500" />}
            changeValue="+11% from last month"
            changeType="positive"
            delay={0.2}
          />
          <StatCard
            title="Commands Used"
            value="8,753"
            icon={<MessageSquare className="h-5 w-5 text-green-500" />}
            changeValue="250 today"
            changeType="neutral"
            delay={0.3}
          />
          <StatCard
            title="Uptime"
            value="99.9%"
            icon={<Activity className="h-5 w-5 text-purple-500" />}
            changeValue="No outages"
            changeType="positive"
            delay={0.4}
          />
        </div>

        {/* Command Usage Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Command Usage</h2>
            <div>
              <select className="text-sm border border-gray-300 dark:border-gray-700 rounded-md py-1 px-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
          </div>

          {/* Placeholder for chart */}
          <div className="h-64 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-gray-100 dark:border-gray-700">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 dark:text-gray-400">Command usage analytics chart will appear here</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Play', count: '2,345', color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' },
              { name: 'Ban', count: '432', color: 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400' },
              { name: 'Help', count: '1,987', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' },
              { name: 'Meme', count: '897', color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Top Command</p>
                    <p className="font-medium text-gray-900 dark:text-white mt-1">{item.name}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-md text-xs font-medium ${item.color}`}>
                    {item.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6"
        >
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Activity</h2>
          
          <div className="overflow-hidden">
            <ul className="divide-y divide-gray-200 dark:divide-gray-800">
              {[
                { event: 'New server joined', server: 'Gaming Community', time: '2 minutes ago' },
                { event: 'Bot restart', server: 'System', time: '1 hour ago' },
                { event: 'Command error', server: 'Anime Fans', time: '3 hours ago' },
                { event: 'New user interaction', server: 'Coding Help', time: '5 hours ago' },
                { event: 'Settings updated', server: 'Music Lovers', time: 'Yesterday' }
              ].map((activity, index) => (
                <li key={index} className="py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.event}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Server: {activity.server}</p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-4 text-center">
            <button className="text-sm text-primary hover:text-primary/80">
              View all activity
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
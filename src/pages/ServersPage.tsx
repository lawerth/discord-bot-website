import React, { useState } from 'react';
import { Search, Server, Shield, Settings, ChevronRight, Users, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

interface ServerCardProps {
  server: {
    id: string;
    name: string;
    icon: string;
    memberCount: number;
    region: string;
  };
  delay: number;
}

const ServerCard: React.FC<ServerCardProps> = ({ server, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden"
    >
      <div className="h-24 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
      <div className="p-5">
        <div className="flex items-start">
          <div className="relative -mt-12 mr-4">
            <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 p-1 border-2 border-white dark:border-gray-800">
              {server.icon ? (
                <img 
                  src={server.icon} 
                  alt={server.name} 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {server.name[0].toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
              {server.name}
            </h3>
            <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
              <Users className="h-4 w-4 mr-1" />
              <span>{server.memberCount.toLocaleString()} members</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="flex items-center justify-center">
            <Settings className="h-4 w-4 mr-1" />
            <span>Configure</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center justify-center">
            <Shield className="h-4 w-4 mr-1" />
            <span>Moderate</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ServersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock server data
  const servers = [
    {
      id: '1',
      name: 'Gaming Community',
      icon: 'https://api.dicebear.com/7.x/identicon/svg?seed=GamingCommunity',
      memberCount: 2345,
      region: 'US West'
    },
    {
      id: '2',
      name: 'Anime Fans',
      icon: 'https://api.dicebear.com/7.x/identicon/svg?seed=AnimeFans',
      memberCount: 1267,
      region: 'US East'
    },
    {
      id: '3',
      name: 'Coding Help',
      icon: 'https://api.dicebear.com/7.x/identicon/svg?seed=CodingHelp',
      memberCount: 893,
      region: 'Europe'
    },
    {
      id: '4',
      name: 'Music Lovers',
      icon: 'https://api.dicebear.com/7.x/identicon/svg?seed=MusicLovers',
      memberCount: 1543,
      region: 'Asia'
    },
    {
      id: '5',
      name: 'Meme Masters',
      icon: 'https://api.dicebear.com/7.x/identicon/svg?seed=MemeMasters',
      memberCount: 3421,
      region: 'US Central'
    },
    {
      id: '6',
      name: 'Art Club',
      icon: 'https://api.dicebear.com/7.x/identicon/svg?seed=ArtClub',
      memberCount: 567,
      region: 'Oceania'
    }
  ];

  const filteredServers = servers.filter(server => 
    server.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Servers</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage all your Discord servers where SenBot is active
          </p>
        </div>

        {/* Search and Actions */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search servers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 pr-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <a 
              href="https://discord.com/api/oauth2/authorize" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button variant="primary" className="flex items-center">
                <Server className="mr-2 h-4 w-4" />
                Add to New Server
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Total Servers', value: '6', icon: <Server className="h-5 w-5 text-primary" /> },
            { title: 'Total Members', value: '10,036', icon: <Users className="h-5 w-5 text-blue-500" /> },
            { title: 'Active Today', value: '4', icon: <Shield className="h-5 w-5 text-green-500" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-4"
            >
              <div className="flex items-center">
                <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 mr-4">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Server Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServers.length > 0 ? (
            filteredServers.map((server, index) => (
              <ServerCard key={server.id} server={server} delay={index * 0.1} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <Server className="mx-auto h-12 w-12 text-gray-400 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No servers found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or add SenBot to a new server
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServersPage;
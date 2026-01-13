import React, { useState } from 'react';
import { Command as CommandLine, Search, Plus, Edit, Trash, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

interface Command {
  id: string;
  name: string;
  description: string;
  usage: string;
  category: string;
  isActive: boolean;
  isCustom: boolean;
}

const CommandsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showCustomOnly, setShowCustomOnly] = useState(false);
  
  // Mock commands data
  const commands: Command[] = [
    {
      id: '1',
      name: 'play',
      description: 'Play music from YouTube, Spotify, or SoundCloud',
      usage: '!play <song name or URL>',
      category: 'music',
      isActive: true,
      isCustom: false
    },
    {
      id: '2',
      name: 'ban',
      description: 'Ban a user from your server with optional reason',
      usage: '!ban <@user> [reason]',
      category: 'moderation',
      isActive: true,
      isCustom: false
    },
    {
      id: '3',
      name: 'meme',
      description: 'Get a random meme from Reddit',
      usage: '!meme [subreddit]',
      category: 'fun',
      isActive: true,
      isCustom: false
    },
    {
      id: '4',
      name: 'welcome',
      description: 'Configure the welcome message for new members',
      usage: '!welcome <message>',
      category: 'utility',
      isActive: false,
      isCustom: false
    },
    {
      id: '5',
      name: 'poll',
      description: 'Create interactive polls with reactions',
      usage: '!poll <question> | <option1> | <option2> ...',
      category: 'utility',
      isActive: true,
      isCustom: false
    },
    {
      id: '6',
      name: 'roll',
      description: 'Roll dice with custom modifiers',
      usage: '!roll <count>d<sides>[+/-modifier]',
      category: 'fun',
      isActive: true,
      isCustom: true
    },
    {
      id: '7',
      name: 'quote',
      description: 'Add and display inspiring quotes',
      usage: '!quote [add <text>]',
      category: 'fun',
      isActive: true,
      isCustom: true
    }
  ];

  // Filter commands based on search, category, and custom status
  const filteredCommands = commands.filter(command => {
    const matchesSearch = command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          command.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || command.category === categoryFilter;
    const matchesCustom = !showCustomOnly || command.isCustom;
    
    return matchesSearch && matchesCategory && matchesCustom;
  });

  // Get unique categories for filter
  const categories = ['all', ...Array.from(new Set(commands.map(command => command.category)))];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Commands</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage bot commands and create custom ones
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search commands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 pr-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            
            <Button variant="outline" onClick={() => setShowCustomOnly(!showCustomOnly)}>
              {showCustomOnly ? 'Show All' : 'Custom Only'}
            </Button>
            
            <Button className="flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Add Custom Command
            </Button>
          </div>
        </div>

        {/* Commands Table */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Command
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Usage
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((command, index) => (
                    <motion.tr 
                      key={command.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-800 mr-3">
                            <CommandLine className="h-4 w-4 text-primary" />
                          </div>
                          <div className="font-medium text-gray-900 dark:text-white flex items-center">
                            !{command.name}
                            {command.isCustom && (
                              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
                                Custom
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {command.description}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                          {command.usage}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300">
                          {command.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          command.isActive 
                            ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300' 
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300'
                        }`}>
                          {command.isActive ? (
                            <>
                              <Check className="mr-1 h-3 w-3" />
                              Active
                            </>
                          ) : (
                            <>
                              <X className="mr-1 h-3 w-3" />
                              Disabled
                            </>
                          )}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
                            <Edit className="h-4 w-4" />
                          </button>
                          {command.isCustom && (
                            <button className="p-1 rounded-md hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400">
                              <Trash className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center">
                      <CommandLine className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-gray-500 dark:text-gray-400">No commands found matching your criteria</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandsPage;
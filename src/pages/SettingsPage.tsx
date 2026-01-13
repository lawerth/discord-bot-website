import React, { useState } from 'react';
import { Save, Bell, Shield, Globe, Palette, Tag, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

interface SettingsSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ 
  title, 
  description, 
  icon, 
  children,
  delay = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6"
    >
      <div className="flex items-start space-x-4 mb-6">
        <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
        </div>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
};

interface ToggleSettingProps {
  label: string;
  description?: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const ToggleSetting: React.FC<ToggleSettingProps> = ({ 
  label, 
  description, 
  enabled, 
  onChange 
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <div className="font-medium text-gray-900 dark:text-white">{label}</div>
        {description && (
          <div className="text-sm text-gray-500 dark:text-gray-400">{description}</div>
        )}
      </div>
      <button
        type="button"
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
          enabled ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
        }`}
        onClick={() => onChange(!enabled)}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
};

const SettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  // Notification settings
  const [notifyServerJoin, setNotifyServerJoin] = useState(true);
  const [notifyErrors, setNotifyErrors] = useState(true);
  const [notifyUpdates, setNotifyUpdates] = useState(false);
  
  // Moderation settings
  const [autoModEnabled, setAutoModEnabled] = useState(true);
  const [linkProtection, setLinkProtection] = useState(true);
  const [spamProtection, setSpamProtection] = useState(true);
  
  // Prefix settings
  const [prefix, setPrefix] = useState('!');
  const [allowMultiplePrefixes, setAllowMultiplePrefixes] = useState(false);
  
  // Appearance settings
  const [darkMode, setDarkMode] = useState(theme === 'dark');
  
  // Handle dark mode toggle
  const handleDarkModeToggle = (enabled: boolean) => {
    setDarkMode(enabled);
    if ((enabled && theme !== 'dark') || (!enabled && theme !== 'light')) {
      toggleTheme();
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save settings to the server
    alert('Settings saved!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Configure your bot preferences and behaviors
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Notification Settings */}
            <SettingsSection 
              title="Notifications" 
              description="Configure when and how you receive notifications from the bot"
              icon={<Bell className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />}
              delay={0.1}
            >
              <ToggleSetting
                label="Server Join Notifications"
                description="Get notified when your bot joins a new server"
                enabled={notifyServerJoin}
                onChange={setNotifyServerJoin}
              />
              <ToggleSetting
                label="Error Notifications"
                description="Get notified about errors and issues with the bot"
                enabled={notifyErrors}
                onChange={setNotifyErrors}
              />
              <ToggleSetting
                label="Update Notifications"
                description="Get notified about new features and updates"
                enabled={notifyUpdates}
                onChange={setNotifyUpdates}
              />
            </SettingsSection>

            {/* Moderation Settings */}
            <SettingsSection 
              title="Moderation" 
              description="Configure automated moderation features"
              icon={<Shield className="h-5 w-5 text-red-600 dark:text-red-400" />}
              delay={0.2}
            >
              <ToggleSetting
                label="Auto-Moderation"
                description="Automatically detect and handle rule violations"
                enabled={autoModEnabled}
                onChange={setAutoModEnabled}
              />
              <ToggleSetting
                label="Link Protection"
                description="Filter potentially malicious links"
                enabled={linkProtection}
                onChange={setLinkProtection}
              />
              <ToggleSetting
                label="Spam Protection"
                description="Detect and prevent message spam"
                enabled={spamProtection}
                onChange={setSpamProtection}
              />
            </SettingsSection>

            {/* Command Prefix */}
            <SettingsSection 
              title="Command Prefix" 
              description="Customize how users invoke bot commands"
              icon={<Tag className="h-5 w-5 text-green-600 dark:text-green-400" />}
              delay={0.3}
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="prefix" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Command Prefix
                  </label>
                  <input
                    type="text"
                    id="prefix"
                    name="prefix"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    className="w-full max-w-xs px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    placeholder="!"
                  />
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    This is what users will type before commands (e.g., {prefix}help)
                  </p>
                </div>
                <ToggleSetting
                  label="Allow Multiple Prefixes"
                  description="Allow commands to be triggered with alternative prefixes"
                  enabled={allowMultiplePrefixes}
                  onChange={setAllowMultiplePrefixes}
                />
              </div>
            </SettingsSection>

            {/* Appearance */}
            <SettingsSection 
              title="Appearance" 
              description="Customize the look and feel of the dashboard"
              icon={<Palette className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
              delay={0.4}
            >
              <ToggleSetting
                label="Dark Mode"
                description="Toggle between light and dark theme"
                enabled={darkMode}
                onChange={handleDarkModeToggle}
              />
            </SettingsSection>

            {/* Danger Zone */}
            <SettingsSection 
              title="Danger Zone" 
              description="Irreversible actions that affect your bot"
              icon={<AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />}
              delay={0.5}
            >
              <div className="space-y-4">
                <div className="border border-red-200 dark:border-red-900/30 rounded-lg p-4 bg-red-50 dark:bg-red-900/10">
                  <h4 className="text-sm font-medium text-red-800 dark:text-red-400 mb-2">
                    Reset Bot Configuration
                  </h4>
                  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                    This will reset all your bot's settings to default values. All custom commands and configurations will be lost.
                  </p>
                  <Button
                    type="button"
                    variant="destructive"
                    className="text-sm"
                  >
                    Reset Configuration
                  </Button>
                </div>
              </div>
            </SettingsSection>

            {/* Submit */}
            <div className="flex justify-end">
              <Button
                type="submit"
                className="flex items-center"
              >
                <Save className="mr-2 h-4 w-4" />
                Save Settings
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ArrowLeft, DiscIcon as DiscordIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

const LoginPage: React.FC = () => {
  const { loginWithDiscord } = useAuth();
  const navigate = useNavigate();

  const handleDiscordLogin = () => {
    loginWithDiscord();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto">
                <span className="text-white font-bold">SB</span>
              </div>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to SenBot</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Sign in with Discord to access your dashboard
            </p>
          </div>

          <Button
            onClick={handleDiscordLogin}
            variant="discord"
            className="w-full flex items-center justify-center gap-2 py-6 text-lg"
          >
            <DiscordIcon className="h-6 w-6" />
            Continue with Discord
          </Button>

          <div className="mt-8 text-center">
            <Link to="/" className="text-primary hover:text-primary/80 text-sm flex items-center justify-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
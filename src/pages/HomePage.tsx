import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Server, Zap, Shield, ShieldCheck, Users, ChevronRight } from 'lucide-react';
import Navbar from '../components/navigation/Navbar';
import { Button } from '../components/ui/Button';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Server className="h-6 w-6 text-blue-500" />,
      title: 'Server Management',
      description: 'Powerful moderation tools to keep your server safe and organized.'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: 'Auto-moderation',
      description: 'Automatically detect and handle spam, inappropriate content, and rule violations.'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: 'Welcome System',
      description: 'Customize welcome messages and role assignments for new members.'
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: 'Music & Entertainment',
      description: 'High-quality music playback and fun commands to engage your community.'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium mb-4">
                  Introducing SenBot
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  The Ultimate Discord Bot for Your Server
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                  Enhance your Discord community with powerful moderation, music, games, and customization features.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://discord.com/api/oauth2/authorize" target="_blank" rel="noopener noreferrer">
                    <Button variant="discord" size="lg" className="font-medium">
                      Add to Discord
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link to="/login">
                    <Button variant="outline" size="lg" className="font-medium">
                      Go to Dashboard
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="w-64 md:w-80 h-64 md:h-80 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="h-10 bg-[#5865F2] flex items-center px-4">
                    <Bot className="h-5 w-5 text-white" />
                    <span className="ml-2 text-white font-medium">SenBot</span>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2 mr-3">
                        <Bot className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-sm flex-1">
                        <p className="text-gray-800 dark:text-gray-200">
                          Welcome to the server! Type <span className="font-mono bg-gray-200 dark:bg-gray-600 px-1 rounded">!help</span> to see what I can do.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#5865F2]/10 rounded-full p-2 mr-3">
                        <Users className="h-5 w-5 text-[#5865F2]" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-sm flex-1">
                        <p className="text-gray-800 dark:text-gray-200">
                          <span className="font-mono bg-gray-200 dark:bg-gray-600 px-1 rounded">!play</span> lofi beats
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2 mr-3">
                        <Bot className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-sm flex-1">
                        <p className="text-gray-800 dark:text-gray-200">
                          Now playing: Lofi Hip Hop - beats to relax/study to
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Background patterns */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-white dark:bg-gray-950 clip-wave"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                All-in-One Discord Bot Solution
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Powerful features to help you build and manage the perfect Discord community
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Preview */}
      <section id="commands" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Powerful Commands for Every Need
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  SenBot offers over 100 commands across various categories to enhance your Discord server experience.
                </p>

                <div className="space-y-4">
                  {[
                    { cmd: '!play', desc: 'Play music from YouTube, Spotify, or SoundCloud' },
                    { cmd: '!ban', desc: 'Ban a user from your server with optional reason' },
                    { cmd: '!welcome', desc: 'Configure the welcome message for new members' },
                    { cmd: '!poll', desc: 'Create interactive polls with reactions' },
                  ].map((command, index) => (
                    <div 
                      key={index}
                      className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono text-indigo-600 dark:text-indigo-400 min-w-20">
                        {command.cmd}
                      </code>
                      <span className="ml-4 text-gray-700 dark:text-gray-300">
                        {command.desc}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link to="/login">
                    <Button variant="outline" size="sm" className="text-primary">
                      See all commands
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Command Categories</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Moderation', icon: <ShieldCheck className="h-4 w-4 text-red-500" />, count: 24 },
                      { name: 'Music', icon: <Zap className="h-4 w-4 text-purple-500" />, count: 18 },
                      { name: 'Fun & Games', icon: <Server className="h-4 w-4 text-blue-500" />, count: 32 },
                      { name: 'Utility', icon: <Bot className="h-4 w-4 text-green-500" />, count: 27 },
                    ].map((category, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center">
                          {category.icon}
                          <span className="ml-2 text-gray-800 dark:text-gray-200">{category.name}</span>
                        </div>
                        <span className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400">
                          {category.count} commands
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Example Usage</h3>
                  <div className="bg-gray-900 text-gray-200 p-3 rounded-md font-mono text-sm overflow-x-auto">
                    <p className="mb-2"><span className="text-blue-400">!</span><span className="text-green-400">play</span> lofi hip hop mix</p>
                    <p className="text-gray-500 mb-2">-- Bot searching for music --</p>
                    <p><span className="text-purple-400">▶️ Now playing:</span> Lofi Hip Hop - beats to relax/study to</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the plan that works best for your Discord community
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Free',
                price: '$0',
                period: 'forever',
                description: 'Perfect for small communities just getting started',
                features: [
                  'Basic moderation commands',
                  'Music playback (limited)',
                  'Up to 3 custom commands',
                  'Standard support'
                ],
                cta: 'Get Started',
                popular: false
              },
              {
                name: 'Pro',
                price: '$4.99',
                period: 'per month',
                description: 'Ideal for growing communities with active members',
                features: [
                  'Advanced moderation & auto-mod',
                  'Unlimited music playback',
                  'Up to 20 custom commands',
                  'Welcome message customization',
                  'Priority support'
                ],
                cta: 'Upgrade to Pro',
                popular: true
              },
              {
                name: 'Premium',
                price: '$9.99',
                period: 'per month',
                description: 'For serious communities that need all the features',
                features: [
                  'All Pro features included',
                  'Unlimited custom commands',
                  'Custom bot branding',
                  'Advanced analytics',
                  'Premium support & 24h response'
                ],
                cta: 'Go Premium',
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border ${
                  plan.popular 
                    ? 'border-primary' 
                    : 'border-gray-200 dark:border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 font-medium text-sm">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">
                      /{plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? 'discord' : 'outline'}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to enhance your Discord server?
              </h2>
              <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join thousands of communities already using SenBot to make their Discord servers more engaging, organized, and fun.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://discord.com/api/oauth2/authorize" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto">
                    Add to Discord
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Access Dashboard
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
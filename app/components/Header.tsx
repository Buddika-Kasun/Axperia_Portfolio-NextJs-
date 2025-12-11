'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/Button';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose' },
  { label: 'Digital Marketing', href: '#digital-marketing' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blumine-600 to-luckypoint-600 rounded-xl" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Axperia</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Information Systems</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blumine-600 dark:hover:text-blumine-400 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.location.href = '#contact'}
              className="ml-4"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blumine-600 dark:hover:text-blumine-400 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center space-x-4 mb-4">
                    <a href="tel:+94788017808" className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Phone size={16} />
                      <span>+94 78 8017808</span>
                    </a>
                    <a href="mailto:ask.axperia@gmail.com" className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Mail size={16} />
                      <span>Email Us</span>
                    </a>
                  </div>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => {
                      window.location.href = '#contact';
                      setIsOpen(false);
                    }}
                  >
                    Start Project
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
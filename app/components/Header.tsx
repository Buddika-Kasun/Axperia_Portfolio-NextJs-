'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import Image from 'next/image';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose' },
  { label: 'Digital Marketing', href: '#digital-marketing' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Run animations only on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <div className="container-custom py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Animation */}
          <motion.div
            initial={hasAnimated ? false : { opacity: 0, x: -30, scale: 0.8 }}
            animate={hasAnimated ? false : { opacity: 1, x: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.5
            }}
            className="flex items-center space-x-2"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-10 h-10 md:w-12 md:h-12"
            >
              {/* Replace this div with your actual logo image */}
              <div className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden cursor-pointer">
                {/* Temporary placeholder - Replace with your logo.png */}
                {/* <div className="text-white font-bold text-lg">AIS</div> */}
                {/* Uncomment and use this when you have logo.png in public folder */}
                 
                <Image 
                  src="/logo.png" 
                  alt="Axperia Logo" 
                  width={48} 
                  height={48} 
                  className="object-contain"
                  priority
                />
                
              </div>
              {/* Animated ring effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 border-2 border-blumine-400/30 rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={hasAnimated ? false : { opacity: 0, y: -20 }}
              animate={hasAnimated ? false : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blumine-600 to-luckypoint-600 bg-clip-text text-transparent">
                Axperia
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Information Systems</p>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation with Stagger Animation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <motion.div 
              className="flex items-center space-x-6 lg:space-x-8"
              initial={hasAnimated ? false : { opacity: 0 }}
              animate={hasAnimated ? false : { opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={hasAnimated ? false : { opacity: 0, y: -10 }}
                  animate={hasAnimated ? false : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  <motion.a
                    href={item.href}
                    className="relative text-gray-700 dark:text-gray-300 hover:text-blumine-600 dark:hover:text-blumine-400 font-medium transition-colors px-2 py-1 group"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blumine-500 to-luckypoint-500 group-hover:w-full transition-all duration-300" />
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>

            {/* Get Started Button with Logo Colors */}
            <motion.div
              initial={hasAnimated ? false : { opacity: 0, scale: 0.8 }}
              animate={hasAnimated ? false : { opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-gradient-to-r from-blumine-600 to-luckypoint-600 hover:from-blumine-700 hover:to-luckypoint-700 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={hasAnimated ? false : { opacity: 0, scale: 0.8 }}
            animate={hasAnimated ? false : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-blumine-50 to-luckypoint-50 dark:from-gray-800 dark:to-gray-900 hover:from-blumine-100 hover:to-luckypoint-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
                className="py-4 space-y-4"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (index * 0.05) }}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blumine-600 dark:hover:text-blumine-400 font-medium hover:bg-gradient-to-r hover:from-blumine-50/50 hover:to-luckypoint-50/50 dark:hover:from-gray-800 dark:hover:to-gray-900 rounded-lg transition-all"
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <motion.a
                      href="tel:+94788017808"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-blumine-50 to-luckypoint-50 dark:from-gray-800 dark:to-gray-900 rounded-lg hover:from-blumine-100 hover:to-luckypoint-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all"
                    >
                      <Phone size={18} className="text-blumine-600 dark:text-blumine-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Call Us</span>
                    </motion.a>
                    
                    <motion.a
                      href="mailto:ask.axperia@gmail.com"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-blumine-50 to-luckypoint-50 dark:from-gray-800 dark:to-gray-900 rounded-lg hover:from-blumine-100 hover:to-luckypoint-100 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all"
                    >
                      <Mail size={18} className="text-blumine-600 dark:text-blumine-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Us</span>
                    </motion.a>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      variant="primary"
                      className="w-full group bg-gradient-to-r from-blumine-600 to-luckypoint-600 hover:from-blumine-700 hover:to-luckypoint-700"
                      onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false);
                      }}
                    >
                      Start Project
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
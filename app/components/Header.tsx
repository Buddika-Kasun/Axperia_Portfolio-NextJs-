'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ChevronDown,
  Rocket,
  Shield,
  Code,
  TrendingUp,
  Globe,
  Palette,
  Database
} from 'lucide-react';
import { Button } from './ui/Button';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'About', href: '#about', icon: <Sparkles className="w-4 h-4" /> },
  { label: 'Services', href: '#services', icon: <Code className="w-4 h-4" /> },
  { label: 'Why Choose Us', href: '#why-choose', icon: <Shield className="w-4 h-4" /> },
  { label: 'Digital Marketing', href: '#digital-marketing', icon: <TrendingUp className="w-4 h-4" /> },
  { label: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Run animations only on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.2
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-blumine-500/10 border-b border-white/20 dark:border-gray-800/30' 
            : 'bg-transparent backdrop-blur-lg'
        }`}
      >
        {/* Animated background gradient */}
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute inset-0 -z-10 bg-gradient-to-r from-blumine-500/5 via-luckypoint-500/5 to-blumine-500/5 bg-[length:400%_400%] transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-30'
          }`}
        />

        {/* Floating particles */}
        {scrolled && (
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute w-1 h-1 rounded-full bg-blumine-400/30"
                style={{
                  left: `${(i * 7) % 100}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
              />
            ))}
          </div>
        )}

        <div className="container-custom py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo with Enhanced Animation */}
            <motion.div
              initial={hasAnimated ? false : { opacity: 0, x: -30 }}
              animate={hasAnimated ? false : { opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all">
                  {/* <div className="text-white font-bold text-lg">AIS</div> */}
                  {/* Uncomment when you have logo.png */}
                  <Image 
                    src="/logo.png" 
                    alt="Axperia Logo" 
                    width={56} 
                    height={56}
                    className="object-contain p-0"
                    priority
                  /> 
                </div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 rounded-xl border-2 border-blumine-400/50 border-t-transparent"
                />
              </motion.div>
              
              <motion.div
  initial={hasAnimated ? false : { opacity: 0, y: -10 }}
  animate={hasAnimated ? false : { opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="hidden sm:block"
>
  {/* Main Logo with Animated Background */}
  <div className="relative">
    {/* Animated gradient background behind text */}
    <motion.div
      className="absolute -inset-4 rounded-2xl -z-10 blur-xl"
      animate={{
        background: [
          'radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.3) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 70%)',
          'radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.3) 0%, rgba(37, 99, 235, 0.3) 50%, transparent 70%)',
          'radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.3) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 70%)',
        ]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Animated border */}
    <motion.div
      className="absolute -inset-2 rounded-xl border-2 -z-5"
      animate={{
        borderColor: [
          'rgba(37, 99, 235, 0.2)',
          'rgba(168, 85, 247, 0.2)',
          'rgba(37, 99, 235, 0.2)',
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    
    <h1 className="text-xl md:text-2xl font-bold relative">
      {/* Animated gradient text */}
      <motion.span
        className="bg-gradient-to-r from-blumine-400 via-white to-luckypoint-400 bg-clip-text text-transparent"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 200%'
        }}
      >
        Axperia
      </motion.span>
      
      {/* Floating particles around text */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blumine-400/30"
          animate={{
            y: [0, -5, 0],
            x: [0, Math.sin(i) * 3, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            width: `${2 + i}px`,
            height: `${2 + i}px`,
            left: `${i * 15}%`,
            top: '-5px',
          }}
        />
      ))}
    </h1>
  </div>
  
  {/* Tagline with enhanced animation */}
  <div className="flex items-center space-x-2 mt-1">
    <motion.p
      className="text-xs text-gray-600 dark:text-gray-400"
      animate={{
        x: [0, 2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      Information Systems
    </motion.p>
    
    {/* Enhanced Zap icon with particle trail */}
    <div className="relative">
      {/* Particle trail */}
      <motion.div
        className="absolute -left-2 top-1/2 transform -translate-y-1/2"
        animate={{
          opacity: [0, 1, 0],
          x: [-4, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="flex space-x-1">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-amber-400/50"
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Main Zap icon */}
      <motion.div
        animate={{ 
          y: [0, -2, 0],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <Zap className="w-3 h-3 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]" />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-sm"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)'
          }}
        />
      </motion.div>
    </div>
  </div>
  
  {/* Subtle connection line */}
  <motion.div
    className="h-0.5 mt-1 w-0 mx-auto"
    animate={{
      width: ['0%', '100%', '0%'],
      background: [
        'linear-gradient(to right, transparent, rgba(37, 99, 235, 0.3), transparent)',
        'linear-gradient(to right, transparent, rgba(168, 85, 247, 0.3), transparent)',
        'linear-gradient(to right, transparent, rgba(37, 99, 235, 0.3), transparent)',
      ]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</motion.div>
            </motion.div>

            {/* Desktop Navigation - Icon Expands with Enhanced Colors */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <motion.div 
                className="flex items-center space-x-1 lg:space-x-2"
                initial={hasAnimated ? false : { opacity: 0 }}
                animate={hasAnimated ? false : { opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={hasAnimated ? false : { opacity: 0, scale: 0.8 }}
                    animate={hasAnimated ? false : { opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="relative"
                  >
                    <motion.button
                      onClick={() => scrollToSection(item.href.replace('#', ''))}
                      className="relative overflow-hidden rounded-xl"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      variants={{
                        hover: { scale: 1.05 }
                      }}
                    >
                      {/* Glass Morphism Container */}
                      <motion.div
                        className="flex items-center backdrop-blur-md"
                        initial={{ width: "39px" }}
                        variants={{
                          hover: { width: "auto" }
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {/* Colorful glass border */}
                        <div className={`absolute inset-0 rounded-xl border-2 ${
                          item.label === 'About' 
                            ? 'border-purple-400/30 dark:border-purple-400/20' 
                            : item.label === 'Services'
                            ? 'border-blue-400/30 dark:border-blue-400/20'
                            : item.label === 'Why Choose Us'
                            ? 'border-emerald-400/30 dark:border-emerald-400/20'
                            : item.label === 'Digital Marketing'
                            ? 'border-amber-400/30 dark:border-amber-400/20'
                            : 'border-cyan-400/30 dark:border-cyan-400/20'
                        }`} />
                        
                        {/* Icon Section with Enhanced Gradient Glass */}
                        <div className={`relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-l-xl overflow-hidden ${
                          item.label === 'About' 
                            ? 'bg-gradient-to-br from-purple-500/70 via-purple-400/60 to-pink-500/70 dark:from-purple-500/60 dark:via-purple-400/50 dark:to-pink-500/60' 
                            : item.label === 'Services'
                            ? 'bg-gradient-to-br from-blue-500/70 via-cyan-400/60 to-sky-500/70 dark:from-blue-500/60 dark:via-cyan-400/50 dark:to-sky-500/60'
                            : item.label === 'Why Choose Us'
                            ? 'bg-gradient-to-br from-emerald-500/70 via-green-400/60 to-teal-500/70 dark:from-emerald-500/60 dark:via-green-400/50 dark:to-teal-500/60'
                            : item.label === 'Digital Marketing'
                            ? 'bg-gradient-to-br from-amber-500/70 via-yellow-400/60 to-orange-500/70 dark:from-amber-500/60 dark:via-yellow-400/50 dark:to-orange-500/60'
                            : 'bg-gradient-to-br from-blumine-500/70 via-luckypoint-400/60 to-cyan-500/70 dark:from-blumine-500/60 dark:via-luckypoint-400/50 dark:to-cyan-500/60'
                        }`}>
                          {/* Colorful shine effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br from-white/25 ${
                            item.label === 'About' 
                              ? 'to-pink-300/20' 
                              : item.label === 'Services'
                              ? 'to-sky-300/20'
                              : item.label === 'Why Choose Us'
                              ? 'to-teal-300/20'
                              : item.label === 'Digital Marketing'
                              ? 'to-orange-300/20'
                              : 'to-cyan-300/20'
                          }`} />
                          
                          {/* Animated inner glow */}
                          <motion.div
                            className="absolute inset-0"
                            animate={{
                              background: item.label === 'About' 
                                ? ['radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.3) 0%, transparent 70%)', 
                                  'radial-gradient(circle at 70% 70%, rgba(192, 132, 252, 0.3) 0%, transparent 70%)',
                                  'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.3) 0%, transparent 70%)']
                                : item.label === 'Services'
                                ? ['radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
                                  'radial-gradient(circle at 70% 70%, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
                                  'radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 70%)']
                                : item.label === 'Why Choose Us'
                                ? ['radial-gradient(circle at 30% 30%, rgba(52, 211, 153, 0.3) 0%, transparent 70%)',
                                  'radial-gradient(circle at 70% 70%, rgba(20, 184, 166, 0.3) 0%, transparent 70%)',
                                  'radial-gradient(circle at 30% 30%, rgba(52, 211, 153, 0.3) 0%, transparent 70%)']
                                : item.label === 'Digital Marketing'
                                ? ['radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
                                  'radial-gradient(circle at 70% 70%, rgba(245, 158, 11, 0.3) 0%, transparent 70%)',
                                  'radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.3) 0%, transparent 70%)']
                                : ['radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
                                  'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
                                  'radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 70%)']
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                          
                          {/* Icon with vibrant color */}
                          <div className={`relative z-10 ${
                            item.label === 'About' 
                              ? 'text-purple-100 drop-shadow-lg' 
                              : item.label === 'Services'
                              ? 'text-blue-100 drop-shadow-lg'
                              : item.label === 'Why Choose Us'
                              ? 'text-emerald-100 drop-shadow-lg'
                              : item.label === 'Digital Marketing'
                              ? 'text-amber-100 drop-shadow-lg'
                              : 'text-cyan-100 drop-shadow-lg'
                          }`}>
                            {item.icon}
                          </div>
                          
                          {/* Colorful inner glass border */}
                          <div className={`absolute inset-0 border-r ${
                            item.label === 'About' 
                              ? 'border-purple-300/40' 
                              : item.label === 'Services'
                              ? 'border-blue-300/40'
                              : item.label === 'Why Choose Us'
                              ? 'border-emerald-300/40'
                              : item.label === 'Digital Marketing'
                              ? 'border-amber-300/40'
                              : 'border-cyan-300/40'
                          }`} />
                        </div>

                        {/* Label Section with Colorful Frosted Glass */}
                        <motion.div
                          className="relative flex items-center h-10 overflow-hidden"
                          initial={{ 
                            opacity: 0, 
                            width: 0, 
                            paddingLeft: 0, 
                            paddingRight: 0,
                            backdropFilter: 'blur(0px)'
                          }}
                          variants={{
                            hover: { 
                              opacity: 1, 
                              width: "auto",
                              paddingLeft: "1rem",
                              paddingRight: "1.25rem",
                              backdropFilter: 'blur(12px)'
                            }
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          {/* Color-tinted glass background */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${
                            item.label === 'About' 
                              ? 'from-purple-500/20 to-pink-500/15 dark:from-purple-600/25 dark:to-pink-600/20' 
                              : item.label === 'Services'
                              ? 'from-blue-500/20 to-cyan-500/15 dark:from-blue-600/25 dark:to-cyan-600/20'
                              : item.label === 'Why Choose Us'
                              ? 'from-emerald-500/20 to-teal-500/15 dark:from-emerald-600/25 dark:to-teal-600/20'
                              : item.label === 'Digital Marketing'
                              ? 'from-amber-500/20 to-orange-500/15 dark:from-amber-600/25 dark:to-orange-600/20'
                              : 'from-blumine-500/20 to-cyan-500/15 dark:from-blumine-600/25 dark:to-cyan-600/20'
                          }`} />
                          
                          {/* White glass overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 dark:from-white/10 dark:to-white/5" />
                          
                          {/* Animated color particles */}
                          <div className="absolute inset-0 overflow-hidden">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className={`absolute rounded-full ${
                                  item.label === 'About' 
                                    ? 'bg-pink-400/20' 
                                    : item.label === 'Services'
                                    ? 'bg-cyan-400/20'
                                    : item.label === 'Why Choose Us'
                                    ? 'bg-teal-400/20'
                                    : item.label === 'Digital Marketing'
                                    ? 'bg-orange-400/20'
                                    : 'bg-cyan-400/20'
                                }`}
                                animate={{
                                  y: [0, -10, 0],
                                  x: [0, Math.sin(i) * 5, 0],
                                  scale: [1, 1.2, 1],
                                }}
                                transition={{
                                  duration: 2 + i,
                                  repeat: Infinity,
                                  delay: i * 0.5,
                                }}
                                style={{
                                  width: `${4 + i * 2}px`,
                                  height: `${4 + i * 2}px`,
                                  left: `${20 + i * 30}%`,
                                  top: `${30 + (i * 20)}%`,
                                }}
                              />
                            ))}
                          </div>
                          
                          {/* Vibrant label text */}
                          <span className={`relative z-10 whitespace-nowrap font-semibold text-sm tracking-wide ${
                            item.label === 'About' 
                              ? 'text-purple-800 dark:text-purple-100 drop-shadow-sm' 
                              : item.label === 'Services'
                              ? 'text-blue-800 dark:text-blue-100 drop-shadow-sm'
                              : item.label === 'Why Choose Us'
                              ? 'text-emerald-800 dark:text-emerald-100 drop-shadow-sm'
                              : item.label === 'Digital Marketing'
                              ? 'text-amber-800 dark:text-amber-100 drop-shadow-sm'
                              : 'text-cyan-800 dark:text-cyan-100 drop-shadow-sm'
                          }`}>
                            {item.label}
                          </span>
                          
                          {/* Colorful right border */}
                          <div className={`absolute right-0 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b ${
                            item.label === 'About' 
                              ? 'from-transparent via-purple-400/50 to-transparent' 
                              : item.label === 'Services'
                              ? 'from-transparent via-cyan-400/50 to-transparent'
                              : item.label === 'Why Choose Us'
                              ? 'from-transparent via-teal-400/50 to-transparent'
                              : item.label === 'Digital Marketing'
                              ? 'from-transparent via-orange-400/50 to-transparent'
                              : 'from-transparent via-cyan-400/50 to-transparent'
                          }`} />
                        </motion.div>
                      </motion.div>

                      {/* Enhanced outer glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl -z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        variants={{
                          hover: { opacity: 1, scale: 1 }
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          background: item.label === 'About' 
                            ? 'radial-gradient(circle at 24px 24px, rgba(192, 132, 252, 0.4) 0%, rgba(236, 72, 153, 0.25) 40%, transparent 70%)'
                            : item.label === 'Services'
                            ? 'radial-gradient(circle at 24px 24px, rgba(56, 189, 248, 0.4) 0%, rgba(14, 165, 233, 0.25) 40%, transparent 70%)'
                            : item.label === 'Why Choose Us'
                            ? 'radial-gradient(circle at 24px 24px, rgba(52, 211, 153, 0.4) 0%, rgba(20, 184, 166, 0.25) 40%, transparent 70%)'
                            : item.label === 'Digital Marketing'
                            ? 'radial-gradient(circle at 24px 24px, rgba(251, 191, 36, 0.4) 0%, rgba(245, 158, 11, 0.25) 40%, transparent 70%)'
                            : 'radial-gradient(circle at 24px 24px, rgba(56, 189, 248, 0.4) 0%, rgba(168, 85, 247, 0.25) 40%, transparent 70%)'
                        }}
                      />
                      
                      {/* Colorful glass shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl overflow-hidden -z-5"
                        initial={{ x: '-100%' }}
                        variants={{
                          hover: { x: '100%' }
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                          item.label === 'About' 
                            ? 'via-pink-300/30 to-transparent' 
                            : item.label === 'Services'
                            ? 'via-cyan-300/30 to-transparent'
                            : item.label === 'Why Choose Us'
                            ? 'via-teal-300/30 to-transparent'
                            : item.label === 'Digital Marketing'
                            ? 'via-orange-300/30 to-transparent'
                            : 'via-cyan-300/30 to-transparent'
                        }`} />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                ))}

                {/* Spacer */}
                <div className="w-4" />

                {/* Get Started Button with Enhanced Colors */}
                <motion.div
                  initial={hasAnimated ? false : { opacity: 0, scale: 0.8 }}
                  animate={hasAnimated ? false : { opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => scrollToSection('contact')}
                    className="group relative overflow-hidden backdrop-blur-lg bg-gradient-to-r from-blumine-500/80 via-luckypoint-500/80 to-cyan-500/80 hover:from-blumine-600/80 hover:via-luckypoint-600/80 hover:to-cyan-600/80 shadow-xl hover:shadow-2xl border-2 border-cyan-300/30 dark:border-cyan-400/20"
                  >
                    {/* Colorful glass shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-cyan-200/15 to-transparent rounded-lg" />
                    
                    {/* Animated moving shine */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                    />
                    
                    {/* Animated inner glow */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      animate={{
                        background: [
                          'radial-gradient(circle at 30% 50%, rgba(56, 189, 248, 0.4) 0%, transparent 70%)',
                          'radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
                          'radial-gradient(circle at 30% 50%, rgba(56, 189, 248, 0.4) 0%, transparent 70%)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Colorful inner border */}
                    <div className="absolute inset-0 rounded-lg border border-white/30" />
                    
                    <span className="relative z-10 flex items-center text-white drop-shadow-md">
                      <Rocket className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={hasAnimated ? false : { opacity: 0, scale: 0.8 }}
              animate={hasAnimated ? false : { opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-xl bg-gradient-to-r from-blumine-500/10 to-luckypoint-500/10 backdrop-blur-sm border border-white/20 dark:border-gray-800/30 hover:from-blumine-500/20 hover:to-luckypoint-500/20 transition-all"
              whileHover={{ scale: 1.1, rotate: isOpen ? 90 : 0 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Glass Effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ backdropFilter: 'blur(0px)' }}
              animate={{ backdropFilter: 'blur(10px)' }}
              exit={{ backdropFilter: 'blur(0px)' }}
              className="absolute inset-0 bg-black/20"
            />
            
            {/* Glass Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-l border-white/20 dark:border-gray-800/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 h-full overflow-y-auto">
                {/* Logo in mobile menu */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-200/50 dark:border-gray-800/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blumine-500 to-luckypoint-500 flex items-center justify-center shadow-lg">
                    <div className="text-white font-bold text-lg">AIS</div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-blumine-400 to-luckypoint-400 bg-clip-text text-transparent">
                      Axperia
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Information Systems</p>
                  </div>
                </motion.div>

                {/* Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (index * 0.05) }}
                      onClick={() => scrollToSection(item.href.replace('#', ''))}
                      className="flex items-center space-x-3 w-full p-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blumine-600 dark:hover:text-blumine-400 hover:bg-gradient-to-r hover:from-blumine-50/50 hover:to-luckypoint-50/50 dark:hover:from-gray-800/50 dark:hover:to-gray-900/50 transition-all"
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.label === 'Services' 
                          ? 'bg-blue-500/20 text-blue-500' 
                          : item.label === 'Digital Marketing'
                          ? 'bg-amber-500/20 text-amber-500'
                          : 'bg-blumine-500/20 text-blumine-500'
                      }`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs text-gray-500">Click to navigate</div>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400 transform rotate-[-90deg]" />
                    </motion.button>
                  ))}
                </div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-800/50 space-y-4"
                >
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Quick Contact
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <motion.a
                      href="tel:+94788017808"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blumine-500/10 to-luckypoint-500/10 backdrop-blur-sm rounded-xl border border-blumine-500/20 hover:from-blumine-500/20 hover:to-luckypoint-500/20 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-2">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Call Now</span>
                      <span className="text-xs text-gray-500">+94 78 8017808</span>
                    </motion.a>
                    
                    <motion.a
                      href="mailto:ask.axperia@gmail.com"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blumine-500/10 to-luckypoint-500/10 backdrop-blur-sm rounded-xl border border-blumine-500/20 hover:from-blumine-500/20 hover:to-luckypoint-500/20 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-2">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Us</span>
                      <span className="text-xs text-gray-500">Quick Response</span>
                    </motion.a>
                  </div>

                  {/* Start Project Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6"
                  >
                    <Button
                      variant="primary"
                      className="w-full group bg-gradient-to-r from-blumine-600 to-luckypoint-600 hover:from-blumine-700 hover:to-luckypoint-700 shadow-xl"
                      onClick={() => {
                        scrollToSection('contact');
                        setIsOpen(false);
                      }}
                    >
                      <Rocket className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                      Start Your Project
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
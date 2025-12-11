'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Sparkles, 
  Rocket, 
  Code, 
  TrendingUp,
  Globe,
  Palette,
  Database,
  ArrowUpRight,
  Heart,
  Send,
  Share2,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import your logo properly
import logoImage from '@/public/logo.png';
import Image from 'next/image';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed email:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  const socialLinks = [
    { 
      icon: <Share2 className="w-5 h-5" />, 
      href: "https://www.linkedin.com/company/axperia-information-systems", 
      label: "LinkedIn", 
      color: "hover:bg-[#0A66C2]",
      bgColor: "bg-[#0A66C2]/10",
      borderColor: "border-[#0A66C2]/30"
    },
    { 
      icon: <Rocket className="w-5 h-5" />, 
      href: "https://twitter.com", 
      label: "Twitter", 
      color: "hover:bg-[#1DA1F2]",
      bgColor: "bg-[#1DA1F2]/10",
      borderColor: "border-[#1DA1F2]/30"
    },
    { 
      icon: <Heart className="w-5 h-5" />, 
      href: "https://instagram.com", 
      label: "Instagram", 
      color: "hover:bg-[#E4405F]",
      bgColor: "bg-[#E4405F]/10",
      borderColor: "border-[#E4405F]/30"
    },
    { 
      icon: <Send className="w-5 h-5" />, 
      href: "https://facebook.com", 
      label: "Facebook", 
      color: "hover:bg-[#1877F2]",
      bgColor: "bg-[#1877F2]/10",
      borderColor: "border-[#1877F2]/30"
    },
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Services', href: '#services', icon: <Code className="w-4 h-4" /> },
    { label: 'Why Choose Us', href: '#why-choose', icon: <TrendingUp className="w-4 h-4" /> },
    { label: 'Digital Marketing', href: '#digital-marketing', icon: <Globe className="w-4 h-4" /> },
    { label: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const services = [
    { label: 'Software Development', icon: <Code className="w-4 h-4" /> },
    { label: 'ERP Consulting', icon: <Database className="w-4 h-4" /> },
    { label: 'Digital Marketing', icon: <TrendingUp className="w-4 h-4" /> },
    { label: 'Web Development', icon: <Globe className="w-4 h-4" /> },
    { label: 'Creative Design', icon: <Palette className="w-4 h-4" /> },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black pt-16 pb-8 border-t border-gray-800/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blumine-500/5 to-luckypoint-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-luckypoint-500/5 to-blumine-500/5 rounded-full blur-3xl"
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #2563eb 1px, transparent 1px),
                             linear-gradient(to bottom, #2563eb 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-xl">
                  {/* <div className="text-white font-bold text-xl">AIS</div> */}
                  {/* Fallback if logo.png doesn't exist - Uncomment Image when you have logo.png */}
                   
                  <Image 
                    src={logoImage}
                    alt="Axperia Logo" 
                    width={86}
                    height={86}
                    className="object-contain p-0"
                  />
                  
                </div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 rounded-xl border-2 border-blumine-400/30"
                />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blumine-400 to-luckypoint-400 bg-clip-text text-transparent">
                  Axperia
                </h2>
                <p className="text-sm text-gray-400">Information Systems</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Your trusted all-in-one technology partner for digital transformation and sustainable business growth across Sri Lanka.
            </p>

            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white flex items-center">
                <Send className="w-4 h-4 mr-2 text-blumine-400" />
                Stay Updated
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:border-blumine-500 focus:ring-1 focus:ring-blumine-500"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 bg-gradient-to-r from-blumine-500 to-luckypoint-500 text-white font-semibold rounded-r-lg hover:from-blumine-600 hover:to-luckypoint-600 transition-all"
                  >
                    Subscribe
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500">
                  Join our newsletter for tech insights & updates
                </p>
              </form>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-blumine-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-white group transition-colors"
                  >
                    <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-4 h-4 text-blumine-400" />
                    </span>
                    {link.icon}
                    <span className="ml-2">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-blumine-400" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className="group"
                >
                  <div className="flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <div className={`w-8 h-8 rounded-lg ${service.label === 'Software Development' ? 'bg-blue-500/20' : 'bg-gray-800/50'} group-hover:bg-blumine-500/20 flex items-center justify-center mr-3 transition-colors`}>
                      {service.icon}
                    </div>
                    <span>{service.label}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Send className="w-5 h-5 mr-2 text-blumine-400" />
              Contact Info
            </h3>
            <ul className="space-y-4">
              {[
                { 
                  icon: <Mail className="w-5 h-5" />, 
                  text: 'ask.axperia@gmail.com', 
                  href: 'mailto:ask.axperia@gmail.com',
                  color: 'text-blue-400'
                },
                { 
                  icon: <Phone className="w-5 h-5" />, 
                  text: '+94 78 8017808', 
                  href: 'tel:+94788017808',
                  color: 'text-green-400'
                },
                { 
                  icon: <MapPin className="w-5 h-5" />, 
                  text: 'Colombo, Sri Lanka', 
                  href: '#',
                  color: 'text-amber-400'
                },
              ].map((contact, index) => (
                <motion.li
                  key={contact.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={contact.href}
                    className="flex items-center group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 flex items-center justify-center mr-3 transition-colors ${contact.color}`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-white group-hover:text-blumine-300 transition-colors">
                        {contact.text}
                      </p>
                      <p className="text-sm text-gray-500">
                        {contact.icon.type === Mail ? 'Email us anytime' : 
                         contact.icon.type === Phone ? 'Call for consultation' : 
                         'Based in Sri Lanka'}
                      </p>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-500 text-sm">
                © {currentYear} Axperia Information Systems. All rights reserved.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Empowering Sri Lankan businesses through digital innovation
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 hidden md:block">Connect with us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    y: -3 
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative w-10 h-10 rounded-xl ${social.bgColor} border ${social.borderColor} flex items-center justify-center transition-all duration-300 group ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    initial={{ y: 10 }}
                  >
                    {social.label}
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blumine-600/20 to-luckypoint-600/20 border border-blumine-500/30 text-blumine-300 rounded-lg hover:from-blumine-600/30 hover:to-luckypoint-600/30 transition-all"
            >
              <ArrowUpRight className="w-4 h-4 mr-2" />
              Back to Top
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
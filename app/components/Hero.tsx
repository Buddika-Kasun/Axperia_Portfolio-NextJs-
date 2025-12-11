'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, Rocket, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="section-padding pt-24 md:pt-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blumine-50/40 via-white/10 to-luckypoint-50/40 dark:from-blumine-900/20 dark:via-gray-900/5 dark:to-luckypoint-900/20" />
        
        {/* Moving gradient based on mouse */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(37, 99, 235, 0.15) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 70%)`,
          }}
        />
        
        {/* Floating shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen"
            animate={{
              x: [0, Math.sin(i) * 100, 0],
              y: [0, Math.cos(i) * 100, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${100 + i * 40}px`,
              height: `${100 + i * 40}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            }}
          />
        ))}
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-5 dark:opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #2563eb 1px, transparent 1px),
                             linear-gradient(to bottom, #2563eb 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blumine-500/10 to-luckypoint-500/10 dark:from-blumine-500/20 dark:to-luckypoint-500/20 backdrop-blur-sm border border-blumine-200/50 dark:border-blumine-700/30 px-5 py-3 rounded-2xl"
            >
              <div className="relative">
                <Sparkles className="text-blumine-500 dark:text-blumine-400" size={20} />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-blumine-400/30 blur-sm"
                />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-blumine-600 to-luckypoint-600 bg-clip-text text-transparent">
                Your All-in-One Digital & Technology Partner
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">Empowering</span>
                <span className="block mt-2">
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-blumine-600 via-luckypoint-600 to-blumine-600 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                      Sri Lankan Businesses
                    </span>
                    <motion.span
                      animate={{ width: ['0%', '100%', '0%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blumine-500 to-luckypoint-500 rounded-full"
                    />
                  </span>
                </span>
                <span className="block mt-2 text-gray-600 dark:text-gray-300 text-xl md:text-2xl">
                  with Intelligent Digital Solutions
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Axperia Information Systems delivers <span className="font-semibold text-blumine-600 dark:text-blumine-400">innovative, scalable, and intelligent</span> digital solutions 
              for businesses of all sizes across Sri Lanka.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: <Target className="w-5 h-5" />, text: 'Full-service technology solutions' },
                { icon: <TrendingUp className="w-5 h-5" />, text: 'ERP consulting & implementation' },
                { icon: <Rocket className="w-5 h-5" />, text: 'Digital marketing & branding' },
                { icon: <Users className="w-5 h-5" />, text: 'Custom software development' },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 hover:shadow-lg transition-all group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-blumine-100 to-luckypoint-100 dark:from-blumine-900/30 dark:to-luckypoint-900/30 flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <div className="text-blumine-600 dark:text-blumine-400">
                      {feature.icon}
                    </div>
                  </motion.div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                variant="primary"
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blumine-600 to-luckypoint-600 hover:from-blumine-700 hover:to-luckypoint-700 shadow-xl hover:shadow-2xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-blumine-600 text-blumine-600 dark:border-blumine-400 dark:text-blumine-400 hover:bg-blumine-50 dark:hover:bg-blumine-900/20 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center">
                  Explore Services
                  <motion.svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </motion.svg>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            {/* Glowing background effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-br from-blumine-500/20 via-luckypoint-500/20 to-blumine-500/20 rounded-3xl blur-xl -z-10"
            />

            <div className="relative">
              {/* Main Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blumine-500 via-blumine-600 to-luckypoint-600 rounded-3xl p-1 shadow-2xl"
              >
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 backdrop-blur-sm">
                  {/* Logo Header */}
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="flex items-center space-x-4 mb-8"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blumine-500 to-luckypoint-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-2xl">AIS</span>
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-2xl border-2 border-blumine-300/30 border-t-transparent"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Trusted Technology Partner</h3>
                      <p className="text-gray-600 dark:text-gray-400">Driving Digital Excellence Since 2023</p>
                    </div>
                  </motion.div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { label: 'ERP Solutions', value: '100%', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
                      { label: 'Client Satisfaction', value: '100%', icon: '⭐', color: 'from-amber-500 to-yellow-500' },
                      { label: 'Projects Delivered', value: '50+', icon: '🚀', color: 'from-green-500 to-emerald-500' },
                      { label: 'Team Experts', value: '15+', icon: '👥', color: 'from-purple-500 to-pink-500' },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="text-center p-4 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg"
                      >
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className={`text-3xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 text-4xl text-blumine-300 dark:text-blumine-600">&quot;</div>
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-4xl text-blumine-300 dark:text-blumine-600">&quot;</div>
                    <p className="text-center text-gray-600 dark:text-gray-300 italic px-6 py-4 bg-gradient-to-r from-blumine-50/50 to-luckypoint-50/50 dark:from-blumine-900/20 dark:to-luckypoint-900/20 rounded-xl">
                      Helping organizations grow efficiently through smart digital transformation
                    </p>
                    <div className="text-center mt-4">
                      <div className="inline-flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Proven Results • Trusted Partner • Innovative Solutions</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 360, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-luckypoint-400/30 to-transparent rounded-full blur-xl -z-10"
              />
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [360, 0, 360] }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blumine-400/30 to-transparent rounded-full blur-xl -z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-blumine-500 to-luckypoint-500 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
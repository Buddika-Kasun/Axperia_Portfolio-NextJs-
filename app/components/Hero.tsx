'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn, SlideInLeft, SlideInRight } from './ui/Animations';

export const Hero = () => {
  return (
    <section id="about" className="section-padding pt-24 md:pt-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blumine-50/20 to-luckypoint-50/20 dark:from-blumine-900/10 dark:to-luckypoint-900/10 -z-10" />
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SlideInLeft>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blumine-100 dark:bg-blumine-900/30 text-blumine-700 dark:text-blumine-300 px-4 py-2 rounded-full">
                <Sparkles size={16} />
                <span className="text-sm font-medium">Your All-in-One Digital & Technology Partner</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Businesses With{' '}
                <span className="gradient-text">Intelligent Solutions</span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Axperia Information Systems delivers innovative, scalable, and intelligent digital solutions 
                for businesses of all sizes. We specialize in software development, ERP implementations, 
                digital marketing, and mobile apps.
              </p>
              
              <div className="space-y-3">
                {[
                  'Full-service technology solutions',
                  'ERP consulting & implementation',
                  'Digital marketing & branding',
                  'Custom software development',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-blumine-600 dark:text-blumine-400" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="group"
                  onClick={() => window.location.href = '#contact'}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '#services'}
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </SlideInLeft>
          
          <SlideInRight>
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blumine-500 to-luckypoint-600 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blumine-400 to-luckypoint-500 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold">AIS</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Trusted Technology Partner</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Since 2023</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {[
                        { label: 'ERP Solutions', value: '100%' },
                        { label: 'Client Satisfaction', value: '98%' },
                        { label: 'Projects Delivered', value: '50+' },
                        { label: 'Team Experts', value: '15+' },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        &quot;Helping organizations grow efficiently through smart digital transformation&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-luckypoint-400/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-blumine-400/20 rounded-full blur-xl"
              />
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};
'use client';

import { Check, Users, Target, Award, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Everything Under One Place',
    description: 'From software development to digital marketing, ERP, UI/UX, and branding—your business gets all services from a single trusted partner.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Expertise With Real Industry Experience',
    description: 'Our team includes professionals in ERP consulting, project management, marketing, software engineering, and design.',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Results-Driven Digital Marketing',
    description: 'We focus on measurable growth with correct audience targeting, budget optimization, and transparent reporting.',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'High-Quality Creative Output',
    description: 'Professional designers, videographers, and content creators build engaging, SEO-friendly, brand-focused content.',
    gradient: 'from-emerald-500/20 to-green-500/20',
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: 'Scalable, Modern Technology',
    description: 'We use the latest frameworks, cloud technologies, and design principles to ensure long-term scalability and performance.',
    gradient: 'from-blumine-500/20 to-luckypoint-500/20',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Customer-Centric Approach',
    description: 'We work closely with clients, understand their business needs, and deliver solutions tailored to their goals.',
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blumine-50/10 via-transparent to-luckypoint-50/10 -z-10" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blumine-300/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-luckypoint-300/5 rounded-full blur-3xl -z-10" />
      
      <div className="container-custom">
        <SectionTitle
          title="Why Choose Axperia?"
          subtitle="Our commitment to excellence sets us apart as your technology partner"
        />
        
        {/* Glass morphism cards with equal height */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="h-full"
            >
              {/* Glass morphism card */}
              <div className="h-full relative group">
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                {/* Glass card */}
                <div className="h-full relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  {/* Card content */}
                  <div className="relative p-6 md:p-8 h-full flex flex-col">
                    <motion.div 
                      initial={{ rotate: -180, scale: 0 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200,
                        damping: 15,
                        delay: index * 0.1 + 0.2
                      }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-800/10 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 flex items-center justify-center mb-6"
                    >
                      <div className="text-blumine-600 dark:text-blumine-400">
                        {feature.icon}
                      </div>
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex-grow">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Bottom line indicator */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
                      className="h-0.5 bg-gradient-to-r from-blumine-500 to-transparent mt-6"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Section with glass effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '50+', label: 'Projects Completed', icon: '🚀' },
              { value: '100%', label: 'Client Satisfaction', icon: '⭐' },
              { value: '15+', label: 'Expert Team Members', icon: '👥' },
              { value: '24/7', label: 'Support Available', icon: '🛡️' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 150,
                  damping: 15 
                }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Glass background */}
                <div className="relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blumine-500/0 via-blumine-500/10 to-luckypoint-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 text-center">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium text-center">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
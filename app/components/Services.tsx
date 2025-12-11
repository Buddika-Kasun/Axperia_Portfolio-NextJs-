'use client';

import { Code, Database, TrendingUp, Globe, Palette, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';
import { useState } from 'react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Software Development',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    items: [
      'Custom web applications',
      'Cross-platform mobile apps (Flutter / Android)',
      'Business automation solutions',
      'API integrations & system enhancements',
    ],
    features: ['Agile Development', 'Cloud Native', 'Scalable Architecture']
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'ERP Consulting & Implementation',
    color: 'from-violet-500 to-purple-500',
    gradient: 'from-violet-500/20 to-purple-500/20',
    items: [
      'Axpert ERP solutions',
      'Requirement gathering & process mapping',
      'Implementation, UAT, training & support',
      'Data migration & workflow automation',
    ],
    features: ['Process Optimization', 'Custom Modules', '24/7 Support']
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Digital Marketing',
    color: 'from-amber-500 to-yellow-500',
    gradient: 'from-amber-500/20 to-yellow-500/20',
    items: [
      'Social media management',
      'Creative content creation',
      'Paid boosting & audience targeting',
      'SEO-optimized content',
    ],
    features: ['Data Analytics', 'ROI Tracking', 'Performance Reports']
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Development',
    color: 'from-emerald-500 to-green-500',
    gradient: 'from-emerald-500/20 to-green-500/20',
    items: [
      'Corporate websites',
      'E-commerce websites',
      'Responsive & mobile-friendly design',
      'High-performance hosting and maintenance',
    ],
    features: ['SEO Ready', 'Fast Loading', 'Secure & Reliable']
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Creative & Design Services',
    color: 'from-orange-500 to-red-500',
    gradient: 'from-orange-500/20 to-red-500/20',
    items: [
      'Graphic design',
      'UI/UX design',
      'Video editing & motion graphics',
      'Branding & rebranding',
    ],
    features: ['Brand Consistency', 'Modern Design', 'Visual Storytelling']
  },
];

export const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blumine-50/10 to-luckypoint-50/10 dark:from-gray-900 dark:via-blumine-900/5 dark:to-luckypoint-900/5" />
        
        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blumine-500"
              animate={{
                y: [0, Math.sin(i) * 20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${10 + (i * 5) % 80}%`,
                top: `${10 + (i * 7) % 80}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blumine-500/10 to-luckypoint-500/10 dark:from-blumine-500/20 dark:to-luckypoint-500/20 px-4 py-2 rounded-full mb-4"
          >
            <Zap className="w-4 h-4 text-blumine-500 dark:text-blumine-400" />
            <span className="text-sm font-semibold text-blumine-700 dark:text-blumine-300">Our Expertise</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block">Comprehensive</span>
            <span className="gradient-text">Digital Solutions</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            End-to-end technology services designed to drive growth, efficiency, and innovation for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glass Morphism Card */}
              <div className="h-full relative group">
                {/* Glow effect on hover */}
                {hoveredCard === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl -z-10`}
                  />
                )}
                
                {/* Main Card */}
                <div className="h-full relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{
                      background: hoveredCard === index 
                        ? `conic-gradient(from 0deg, transparent, ${service.color.split(' ')[1]}, transparent)`
                        : 'transparent',
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-[1px] rounded-2xl bg-white/80 dark:bg-gray-900/80" />
                  </motion.div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    }}
                  />

                  <div className="relative p-6 md:p-8 h-full flex flex-col">
                    {/* Icon with animation */}
                    <motion.div
                      animate={{ 
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <div className="text-white">
                        {service.icon}
                      </div>
                      {/* Pulsing effect */}
                      {hoveredCard === index && (
                        <motion.div
                          initial={{ scale: 1, opacity: 1 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="absolute inset-0 rounded-2xl border-2 border-white/30"
                        />
                      )}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>

                    {/* Features badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blumine-50 to-luckypoint-50 dark:from-blumine-900/30 dark:to-luckypoint-900/30 text-blumine-700 dark:text-blumine-300 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Service Items */}
                    <ul className="space-y-3 mb-6 flex-grow">
                      {service.items.map((item, idx) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.3 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-start"
                        >
                          <motion.div
                            animate={{ scale: hoveredCard === index ? 1.2 : 1 }}
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-blumine-500 to-luckypoint-500 mt-2 mr-3 flex-shrink-0"
                          />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="pt-6 mt-auto border-t border-gray-100 dark:border-gray-800">
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center text-blumine-600 dark:text-blumine-400 font-semibold group"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="mt-12 md:mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl">
            {/* Animated background */}
            <motion.div
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-br from-blumine-600 via-luckypoint-600 to-blumine-600 bg-[length:400%_400%]"
            />
            
            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 5 + i,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="absolute w-4 h-4 bg-white/20 rounded-full"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative p-8 md:p-12 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Let&#39;s Build Something Amazing</span>
                </motion.div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Need a <span className="text-yellow-300">Custom Solution</span> for Your Business?
                </h3>
                
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  We specialize in creating tailored digital solutions that perfectly match your unique business requirements. 
                  From concept to deployment, we&#39;re with you every step of the way.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blumine-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-2xl group"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href="tel:+94788017808"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                  >
                    Call Now: +94 78 8017808
                  </motion.a>
                </div>
                
                <p className="text-sm text-white/70 mt-6">
                  Average response time: <span className="font-semibold">Under 2 hours</span> • Free initial consultation
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '50+', label: 'Projects Delivered', icon: '🚀' },
              { value: '100%', label: 'Client Satisfaction', icon: '⭐' },
              { value: '24/7', label: 'Support Available', icon: '🛡️' },
              { value: '15+', label: 'Technology Experts', icon: '👨‍💻' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 text-center border border-white/30 dark:border-gray-700/30"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Target, TrendingUp, DollarSign, PieChart, Users, Star, Zap, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';
import { AnimateOnView } from './AnimateOnView';

const benefits = [
  { icon: <Target className="w-6 h-6" />, title: 'Targeted Audience Reach', desc: 'Precise targeting for maximum ROI' },
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Smart Social Media Boosting', desc: 'Strategic campaigns that deliver results' },
  { icon: <DollarSign className="w-6 h-6" />, title: 'Budget-Friendly Campaigns', desc: 'Transparent pricing, maximum value' },
  { icon: <PieChart className="w-6 h-6" />, title: 'Weekly Performance Analysis', desc: 'Data-driven optimization' },
  { icon: <Users className="w-6 h-6" />, title: 'Professional Designs', desc: 'SEO-friendly, engaging content' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Real Results', desc: 'Measurable growth from week one' },
];

const successStories = [
  { metric: 'Increased Engagement', value: '300%', icon: '🔥', color: 'from-orange-500 to-red-500' },
  { metric: 'ROI Improvement', value: '250%', icon: '📈', color: 'from-green-500 to-emerald-500' },
  { metric: 'Cost Reduction', value: '40%', icon: '💰', color: 'from-amber-500 to-yellow-500' },
  { metric: 'Client Satisfaction', value: '98%', icon: '⭐', color: 'from-blue-500 to-cyan-500' },
];

// Sri Lankan client testimonials
const testimonials = [
  {
    id: 1,
    quote: "Axperia's digital marketing team transformed our family business online. Our sales increased by 180% in just 4 months!",
    author: "Kumar Perera",
    role: "Owner, Perera Textiles",
    company: "Colombo",
    rating: 5,
    imageColor: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    quote: "As a startup in Kandy, we needed affordable yet effective marketing. Axperia delivered beyond expectations with 300% ROI.",
    author: "Nimali Silva",
    role: "Founder, TeaLeaf Creations",
    company: "Kandy",
    rating: 5,
    imageColor: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    quote: "Their social media campaigns for our hotel in Galle brought us international recognition. Bookings up by 150%!",
    author: "Rohan Fernando",
    role: "Manager, Oceanview Resort",
    company: "Galle",
    rating: 5,
    imageColor: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    quote: "Axperia's SEO strategy put our Ayurveda center on the map. We're now the top search result in Sri Lanka!",
    author: "Dr. Anura Bandara",
    role: "Director, Ayurveda Wellness",
    company: "Kurunegala",
    rating: 5,
    imageColor: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    quote: "From zero online presence to dominating our niche in Colombo. Axperia's team is simply brilliant!",
    author: "Chamari Rathnayake",
    role: "CEO, Lanka Crafts",
    company: "Colombo",
    rating: 5,
    imageColor: "from-indigo-500 to-blue-500"
  },
  {
    id: 6,
    quote: "As a small restaurant in Negombo, their local targeting strategy filled our tables every weekend. Amazing work!",
    author: "Samantha De Silva",
    role: "Owner, Spice Garden",
    company: "Negombo",
    rating: 5,
    imageColor: "from-amber-500 to-yellow-500"
  }
];

export const DigitalMarketing = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const PARTICLE_POSITIONS = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: (i * 5) % 100, // Deterministic positioning
    top: (i * 7) % 100,  // Deterministic positioning
  }));

  return (
    <section id="digital-marketing" className="section-padding relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blumine-50/20 via-white/10 to-luckypoint-50/20 dark:from-blumine-900/10 dark:via-gray-900/5 dark:to-luckypoint-900/10 -z-20" />
      
      {/* Animated floating elements */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-10 w-64 h-64 bg-blumine-300/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, -30, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-luckypoint-300/5 rounded-full blur-3xl -z-10"
      />
      
      <div className="container-custom">
        {/* Header */}
        <AnimateOnView animation="fade">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Digital Marketing Excellence</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              Grow Your Sri Lankan Business Online
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Proven strategies that deliver measurable results for businesses across Sri Lanka
            </p>
          </div>
        </AnimateOnView>

        {/* Benefits Grid - 2x3 Layout */}
        <AnimateOnView animation="fade" delay={0.2}>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Digital Marketing Advantages</h3>
              <div className="flex items-center space-x-2 text-blumine-600 dark:text-blumine-400">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Results-Driven Approach</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <Card className="h-full group hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-blumine-500 to-luckypoint-500 flex items-center justify-center flex-shrink-0"
                      >
                        <div className="text-white">
                          {benefit.icon}
                        </div>
                      </motion.div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blumine-600 dark:group-hover:text-blumine-400 transition-colors">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center text-blumine-600 dark:text-blumine-400 text-sm font-medium">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateOnView>

        {/* Performance Stats & Special Offer */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Performance Stats */}
          <AnimateOnView animation="slideLeft">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {successStories.map((story, index) => (
                  <motion.div
                    key={story.metric}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`bg-gradient-to-br ${story.color} p-6 rounded-2xl text-white relative overflow-hidden group`}>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      
                      <div className="relative z-10">
                        <div className="text-4xl mb-2">{story.icon}</div>
                        <div className="text-3xl font-bold mb-1">{story.value}</div>
                        <div className="text-sm opacity-90">{story.metric}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Progress Bars */}
              <div className="mt-8 space-y-6">
                {[
                  { label: 'Content Creation', value: 95, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
                  { label: 'SEO Optimization', value: 90, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
                  { label: 'Social Media Growth', value: 85, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
                  { label: 'ROI Improvement', value: 80, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
                ].map((item, index) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                      <span className="font-bold text-blumine-600 dark:text-blumine-400">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnView>

          {/* Special Offer Card */}
          <AnimateOnView animation="slideRight">
            <div className="relative h-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <div className="bg-gradient-to-br from-luckypoint-600 via-luckypoint-700 to-luckypoint-800 rounded-3xl p-8 h-full shadow-2xl relative overflow-hidden">
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {PARTICLE_POSITIONS.map((particle) => (
                      <motion.div
                        key={particle.id}
                        animate={{
                          y: [0, -100, 0],
                          x: [0, Math.sin(particle.id) * 50, 0],
                        }}
                        transition={{
                          duration: 3 + (particle.id % 3),
                          repeat: Infinity,
                          delay: particle.id * 0.1,
                        }}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        style={{
                          left: `${particle.left}%`,
                          top: `${particle.top}%`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Star className="w-7 h-7 text-yellow-300" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">Special Offer for Sri Lankan Businesses</h3>
                        <p className="text-luckypoint-200 text-sm">Limited Time Only</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      <p className="text-luckypoint-100 text-lg">
                        Get a <span className="font-bold text-white">FREE Digital Marketing Audit</span> worth LKR 50,000
                      </p>
                      
                      <div className="space-y-3">
                        {[
                          'Complete website SEO analysis',
                          'Social media profile audit',
                          'Competitor analysis report',
                          'Custom growth strategy',
                          '30-minute consultation with experts'
                        ].map((item, index) => (
                          <div key={item} className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full bg-white" />
                            <span className="text-white/90">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center w-full py-4 bg-white text-luckypoint-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-2xl text-lg group"
                      >
                        Claim Your Free Audit Now
                        <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                      </motion.a>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-luckypoint-200">Only 10 spots remaining this month</span>
                        <span className="text-white font-semibold">Valid until: 30th June</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimateOnView>
        </div>

        {/* Sri Lankan Client Testimonials - Continuous Scroll */}
        <AnimateOnView animation="fade" delay={0.3}>
          <div className="mt-20">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text text-center">Success Stories from Sri Lanka</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-center">Hear from businesses we&#39;ve helped grow across the island</p>
            </div>

            {/* Continuous Scrolling Container */}
            <div 
              className="relative overflow-hidden py-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-10" />
              
              {/* Scrolling Wrapper */}
              <motion.div
                animate={{ x: isPaused ? 0 : ['0%', '-50%'] }}
                transition={{
                  x: {
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="flex space-x-6"
                style={{ width: 'max-content' }}
              >
                {/* First Set */}
                {testimonials.map((testimonial) => (
                  <motion.div
                    key={`first-${testimonial.id}`}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      mass: 0.5
                    }}
                    className="w-80 flex-shrink-0"
                  >
                    <Card className="h-full group hover:shadow-2xl transition-all duration-300">
                      <div className="relative">
                        {/* Quote icon */}
                        <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.imageColor} opacity-10`} />
                        <Quote className="absolute -top-2 -right-2 w-8 h-8 text-blumine-400 opacity-50" />
                        
                        <div className="flex items-start space-x-4">
                          {/* Profile image placeholder */}
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.imageColor} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                            {testimonial.author.charAt(0)}
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                                <p className="text-xs text-blumine-600 dark:text-blumine-400 mt-1">{testimonial.company}</p>
                              </div>
                              <div className="flex text-amber-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-current" />
                                ))}
                              </div>
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-300 mt-3 italic text-sm leading-relaxed">
                              &quot;{testimonial.quote}&quot;
                            </p>
                          </div>
                        </div>
                        
                        {/* Hover indicator */}
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blumine-500 to-luckypoint-500"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ originX: 0 }}
                        />
                      </div>
                    </Card>
                  </motion.div>
                ))}

                {/* Duplicate Set for Seamless Loop */}
                {testimonials.map((testimonial) => (
                  <motion.div
                    key={`second-${testimonial.id}`}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      mass: 0.5
                    }}
                    className="w-80 flex-shrink-0"
                  >
                    <Card className="h-full group hover:shadow-2xl transition-all duration-300">
                      <div className="relative">
                        {/* Quote icon */}
                        <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.imageColor} opacity-10`} />
                        <Quote className="absolute -top-2 -right-2 w-8 h-8 text-blumine-400 opacity-50" />
                        
                        <div className="flex items-start space-x-4">
                          {/* Profile image placeholder */}
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.imageColor} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                            {testimonial.author.charAt(0)}
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                                <p className="text-xs text-blumine-600 dark:text-blumine-400 mt-1">{testimonial.company}</p>
                              </div>
                              <div className="flex text-amber-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-current" />
                                ))}
                              </div>
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-300 mt-3 italic text-sm leading-relaxed">
                              &quot;{testimonial.quote}&quot;
                            </p>
                          </div>
                        </div>
                        
                        {/* Hover indicator */}
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blumine-500 to-luckypoint-500"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ originX: 0 }}
                        />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Instructions */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                <span>✨ Hover to pause scroll</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </AnimateOnView>

        {/* CTA Section */}
        <AnimateOnView animation="fade" delay={0.4}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blumine-600 to-luckypoint-700 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blumine-100 mb-8 max-w-2xl mx-auto">
                Join 50+ Sri Lankan businesses that have achieved remarkable growth with our digital marketing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blumine-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-2xl"
                >
                  Start Free Consultation
                  <ArrowRight className="ml-2" />
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
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
};
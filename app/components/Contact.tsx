'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';
import { Button } from './ui/Button';
import { AnimateOnView } from './AnimateOnView';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'ask.axperia@gmail.com',
      link: 'mailto:ask.axperia@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+94 78 8017808',
      link: 'tel:+94788017808',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Sri Lanka',
      link: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'Axperia Information Systems',
      link: 'https://www.linkedin.com/company/axperia-information-systems',
      color: 'from-blue-600 to-blue-700'
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blumine-50/20 via-transparent to-luckypoint-50/20 dark:from-blumine-900/10 dark:via-transparent dark:to-luckypoint-900/10 -z-10" />
      
      <div className="container-custom">
        <AnimateOnView animation="fade">
          <SectionTitle
            title="Get In Touch"
            subtitle="Ready to transform your business? Let's discuss your project"
          />
        </AnimateOnView>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <AnimateOnView animation="slideLeft">
              <Card className="h-full">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Contact Information
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Reach out to us for inquiries, consultations, or to start your next project. 
                      We&apos;re here to help you succeed.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="group"
                      >
                        <a 
                          href={info.link}
                          target={info.title === 'LinkedIn' ? '_blank' : '_self'}
                          rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : ''}
                          className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
                        >
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <div className="text-white">
                              {info.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blumine-600 dark:group-hover:text-blumine-400 transition-colors">
                              {info.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Business Hours */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blumine-100 dark:bg-blumine-900/30 flex items-center justify-center">
                        <Clock className="text-blumine-600 dark:text-blumine-400" size={20} />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Business Hours</h4>
                    </div>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300 pl-13">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium text-red-500">Closed</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Response Time */}
                  <div className="p-4 bg-gradient-to-r from-blumine-50 to-luckypoint-50 dark:from-blumine-900/20 dark:to-luckypoint-900/20 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="text-blumine-600 dark:text-blumine-400" size={20} />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Fast Response Time</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">We typically respond within 2-4 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimateOnView>
          </div>
          
          {/* Contact Form */}
          <AnimateOnView animation="slideRight">
            <Card>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blumine-500 to-luckypoint-500 flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h3>
                    <p className="text-gray-600 dark:text-gray-400">Fill out the form below and we&apos;ll get back to you shortly</p>
                  </div>
                </div>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-300">Message Sent Successfully!</h4>
                        <p className="text-green-700 dark:text-green-400 text-sm">We&apos;ll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blumine-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blumine-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blumine-500 focus:border-transparent transition-all"
                        placeholder="+94 77 123 4567"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blumine-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="software">Software Development</option>
                        <option value="erp">ERP Consulting</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="web">Web Development</option>
                        <option value="design">Creative Design</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="consultation">Just Consultation</option>
                      </select>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blumine-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Please provide as much detail as possible for a better understanding
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full group relative overflow-hidden"
                      //disabled={isSubmitting}
                    >
                      <motion.div
                        animate={{ x: isSubmitting ? ['0%', '100%'] : '0%' }}
                        transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                  
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service
                  </p>
                </form>
              </div>
            </Card>
          </AnimateOnView>
        </div>
        
        {/* Map/CTA Section */}
        <AnimateOnView animation="fade" delay={0.3}>
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blumine-600 to-luckypoint-700 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Start Your Digital Transformation?</h3>
                  <p className="text-blumine-100 mb-6">
                    Schedule a free 30-minute consultation with our experts. 
                    Let&apos;s discuss your goals and how we can help you achieve them.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span>No obligation, free consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span>Tailored strategy session</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span>Clear roadmap for success</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blumine-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-2xl text-lg"
                  >
                    Book Free Consultation
                  </motion.a>
                  <p className="text-blumine-200 text-sm mt-4">
                    Limited slots available each week. Book now to secure your spot!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
};
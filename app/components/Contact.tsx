'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';
import { Button } from './ui/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Get In Touch"
          subtitle="Ready to transform your business? Let's discuss your project"
        />
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reach out to us for inquiries, consultations, or to start your next project.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-blumine-100 dark:bg-blumine-900/30 flex items-center justify-center">
                      <Mail className="text-blumine-600 dark:text-blumine-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                      <a 
                        href="mailto:ask.axperia@gmail.com" 
                        className="text-blumine-600 dark:text-blumine-400 hover:underline"
                      >
                        ask.axperia@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-blumine-100 dark:bg-blumine-900/30 flex items-center justify-center">
                      <Phone className="text-blumine-600 dark:text-blumine-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                      <a 
                        href="tel:+94788017808" 
                        className="text-blumine-600 dark:text-blumine-400 hover:underline"
                      >
                        +94 78 8017808
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-blumine-100 dark:bg-blumine-900/30 flex items-center justify-center">
                      <MapPin className="text-blumine-600 dark:text-blumine-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">Sri Lanka</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-blumine-100 dark:bg-blumine-900/30 flex items-center justify-center">
                      <Linkedin className="text-blumine-600 dark:text-blumine-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/company/axperia-information-systems" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blumine-600 dark:text-blumine-400 hover:underline"
                      >
                        Axperia Information Systems
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Business Hours</h4>
                  <div className="space-y-1 text-gray-600 dark:text-gray-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
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
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
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
                  </div>
                  
                  <div>
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
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
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
                  </select>
                </div>
                
                <div>
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
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  />
                </div>
                
                <Button
                  //type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full group"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
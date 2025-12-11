'use client';

import { motion } from 'framer-motion';
import { BarChart3, Target, TrendingUp, DollarSign, PieChart, Users } from 'lucide-react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';

const benefits = [
  { icon: <Target />, title: 'Targeted Audience Reach', desc: 'Precise targeting for maximum ROI' },
  { icon: <TrendingUp />, title: 'Smart Social Media Boosting', desc: 'Strategic campaigns that deliver results' },
  { icon: <DollarSign />, title: 'Budget-Friendly Campaigns', desc: 'Transparent pricing, maximum value' },
  { icon: <PieChart />, title: 'Weekly Performance Analysis', desc: 'Data-driven optimization' },
  { icon: <Users />, title: 'Professional Designs', desc: 'SEO-friendly, engaging content' },
  { icon: <BarChart3 />, title: 'Real Results', desc: 'Measurable growth from week one' },
];

export const DigitalMarketing = () => {
  return (
    <section id="digital-marketing" className="section-padding bg-gradient-to-br from-blumine-50/30 to-luckypoint-50/30 dark:from-blumine-900/20 dark:to-luckypoint-900/20">
      <div className="container-custom">
        <SectionTitle
          title="Digital Marketing Excellence"
          subtitle="Helping Sri Lankan businesses grow online with proven strategies"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  We help you see real results from the first few weeks
                </h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-blumine-100 dark:bg-blumine-900/30 flex items-center justify-center flex-shrink-0">
                        <div className="text-blumine-600 dark:text-blumine-400">
                          {benefit.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{benefit.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Content Creation', value: 95, color: 'from-blue-500 to-cyan-500' },
                { label: 'SEO Optimization', value: 90, color: 'from-green-500 to-emerald-500' },
                { label: 'Social Media Growth', value: 85, color: 'from-purple-500 to-pink-500' },
                { label: 'ROI Improvement', value: 80, color: 'from-orange-500 to-red-500' },
              ].map((item) => (
                <Card key={item.label} hover={false}>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                      <span className="font-bold text-lg gradient-text">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gradient-to-br from-luckypoint-600 to-luckypoint-800 text-white">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Special Offer for Sri Lankan Businesses</h3>
                <p className="text-luckypoint-100">
                  Get a free digital marketing audit and strategy session for your business. 
                  Let us analyze your current online presence and provide actionable insights.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-luckypoint-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Claim Free Audit
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
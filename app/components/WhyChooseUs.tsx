'use client';

import { Check, Users, Target, Award, Zap, Heart } from 'lucide-react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';
import { StaggerContainer, StaggerItem } from './ui/Animations';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Everything Under One Place',
    description: 'From software development to digital marketing, ERP, UI/UX, and branding—your business gets all services from a single trusted partner.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Expertise With Real Industry Experience',
    description: 'Our team includes professionals in ERP consulting, project management, marketing, software engineering, and design.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Results-Driven Digital Marketing',
    description: 'We focus on measurable growth with correct audience targeting, budget optimization, and transparent reporting.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'High-Quality Creative Output',
    description: 'Professional designers, videographers, and content creators build engaging, SEO-friendly, brand-focused content.',
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: 'Scalable, Modern Technology',
    description: 'We use the latest frameworks, cloud technologies, and design principles to ensure long-term scalability and performance.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Customer-Centric Approach',
    description: 'We work closely with clients, understand their business needs, and deliver solutions tailored to their goals.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Why Choose Axperia?"
          subtitle="Our commitment to excellence sets us apart as your technology partner"
        />
        
        <StaggerContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card>
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blumine-100 dark:bg-blumine-900/30 flex items-center justify-center">
                      <div className="text-blumine-600 dark:text-blumine-400">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
        
        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '15+', label: 'Expert Team Members' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
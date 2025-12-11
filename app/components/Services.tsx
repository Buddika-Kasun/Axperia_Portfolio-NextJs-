'use client';

import { Code, Database, TrendingUp, Globe, Palette } from 'lucide-react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';
import { StaggerContainer, StaggerItem } from './ui/Animations';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Software Development',
    color: 'from-blue-500 to-cyan-500',
    items: [
      'Custom web applications',
      'Cross-platform mobile apps (Flutter / Android)',
      'Business automation solutions',
      'API integrations & system enhancements',
    ],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'ERP Consulting & Implementation',
    color: 'from-violet-500 to-purple-500',
    items: [
      'Axpert ERP solutions',
      'Requirement gathering & process mapping',
      'Implementation, UAT, training & support',
      'Data migration & workflow automation',
    ],
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Digital Marketing',
    color: 'from-amber-500 to-yellow-500',
    items: [
      'Social media management',
      'Creative content creation',
      'Paid boosting & audience targeting',
      'SEO-optimized content',
    ],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Development',
    color: 'from-emerald-500 to-green-500',
    items: [
      'Corporate websites',
      'E-commerce websites',
      'Responsive & mobile-friendly design',
      'High-performance hosting and maintenance',
    ],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Creative & Design Services',
    color: 'from-orange-500 to-red-500',
    items: [
      'Graphic design',
      'UI/UX design',
      'Video editing & motion graphics',
      'Branding & rebranding',
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive digital solutions tailored to your business needs"
        />
        
        <StaggerContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <StaggerItem key={service.title}>
                <Card>
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-blumine-400 mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4">
                      <button className="text-blumine-600 dark:text-blumine-400 font-medium hover:underline">
                        Learn more →
                      </button>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
            
            {/* CTA Card */}
            <StaggerItem>
              <Card className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blumine-600 to-luckypoint-700">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
                  <p className="text-blumine-100 mb-6 max-w-2xl mx-auto">
                    We provide tailored solutions that perfectly match your business requirements. 
                    Let&apos;s discuss your project!
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-blumine-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </Card>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};
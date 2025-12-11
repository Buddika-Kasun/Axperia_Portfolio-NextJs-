'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    {children}
  </motion.div>
);
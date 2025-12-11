'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  amount?: number | 'some' | 'all';
}

export const FadeIn = ({ children, delay = 0, className = '', amount = 0.3 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, delay = 0, className = '', amount = 0.3 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, delay = 0, className = '', amount = 0.3 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0, className = '', amount = 0.3 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false, amount }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ 
  children, 
  className = '',
  staggerChildren = 0.1,
  amount = 0.3
}: { 
  children: ReactNode; 
  className?: string;
  staggerChildren?: number;
  amount?: number | 'some' | 'all';
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount }}
    variants={{
      visible: {
        transition: {
          staggerChildren,
        },
      },
    }}
    className={className}
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

// Special component that always animates on view
export const ViewAnimation = ({ 
  children, 
  animation = 'fade',
  delay = 0
}: { 
  children: ReactNode;
  animation?: 'fade' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
}) => {
  const animations = {
    fade: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
    slideLeft: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    slideRight: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
  };

  return (
    <motion.div
      initial={animations[animation].initial}
      whileInView={animations[animation].animate}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};
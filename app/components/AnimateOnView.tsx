'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimateOnViewProps {
  children: ReactNode;
  animation?: 'fade' | 'slideLeft' | 'slideRight' | 'scale' | 'bounce';
  delay?: number;
  className?: string;
}

export const AnimateOnView = ({ 
  children, 
  animation = 'fade',
  delay = 0,
  className = ''
}: AnimateOnViewProps) => {
  const getInitialState = () => {
    switch (animation) {
      case 'fade': return { opacity: 0, y: 20 };
      case 'slideLeft': return { opacity: 0, x: -50 };
      case 'slideRight': return { opacity: 0, x: 50 };
      case 'scale': return { opacity: 0, scale: 0.9 };
      case 'bounce': return { opacity: 0, y: 50 };
      default: return { opacity: 0, y: 20 };
    }
  };

  const getAnimateState = () => {
    switch (animation) {
      case 'fade': return { opacity: 1, y: 0 };
      case 'slideLeft': return { opacity: 1, x: 0 };
      case 'slideRight': return { opacity: 1, x: 0 };
      case 'scale': return { opacity: 1, scale: 1 };
      case 'bounce': return { opacity: 1, y: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={getAnimateState()}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: animation === 'bounce' ? 'spring' : 'tween',
        stiffness: animation === 'bounce' ? 100 : undefined,
        damping: animation === 'bounce' ? 10 : undefined
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
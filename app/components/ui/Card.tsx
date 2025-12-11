import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 ${
        hover ? 'card-hover' : ''
      } ${className}`}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
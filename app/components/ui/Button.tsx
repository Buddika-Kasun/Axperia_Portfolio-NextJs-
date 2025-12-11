import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  type?: string,
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  type,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blumine-600 to-blumine-700 text-white hover:from-blumine-700 hover:to-blumine-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-luckypoint-600 to-luckypoint-700 text-white hover:from-luckypoint-700 hover:to-luckypoint-800 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-blumine-600 text-blumine-600 dark:text-blumine-400 dark:border-blumine-400 hover:bg-blumine-50 dark:hover:bg-blumine-900/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
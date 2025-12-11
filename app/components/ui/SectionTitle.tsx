import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const SectionTitle = ({ title, subtitle, children }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};
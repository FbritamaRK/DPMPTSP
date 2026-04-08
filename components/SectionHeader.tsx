import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  underlineColor?: 'green' | 'yellow' | 'blue';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  alignment = 'center',
  underlineColor = 'green',
  className = '',
}) => {
  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const underlineStyles = {
    green: 'bg-gk-green',
    yellow: 'bg-gk-yellow',
    blue: 'bg-gk-blue',
  };

  const underlineAlignment = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  };

  return (
    <div className={`mb-12 ${alignmentStyles[alignment]} ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
      <div
        className={`h-1 w-20 mt-4 rounded-full ${underlineStyles[underlineColor]} ${underlineAlignment[alignment]}`}
      ></div>
    </div>
  );
};

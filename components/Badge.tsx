import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
  className?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'primary', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold";
    
    const variants = {
      primary: "bg-blue-700 text-slate-200",
      secondary: "bg-grey-200 text-gray-800",
      success: "bg-green-500 text-slate-200",
      warning: "bg-gold-500 text-slate-700",
      danger: "bg-red-100 text-red-800",
      outline: "border border-gray-200 text-gray-800",
    };

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

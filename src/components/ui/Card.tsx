'use client';

import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'soft' | 'compact';
  hover?: boolean;
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hover = true, className = '', children, ...props }, ref) => {
    const baseClasses = 'nv-card';
    
    const variantClasses = {
      default: '',
      soft: 'bg-opacity-60',
      compact: 'p-4',
    };

    const hoverClass = hover ? '' : 'hover:transform-none hover:shadow-soft';

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${hoverClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

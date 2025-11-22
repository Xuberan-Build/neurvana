'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-nv-text-soft mb-2 tracking-wide">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-5 py-3 
            bg-nv-surface-soft 
            border border-nv-border-subtle 
            rounded-md
            text-nv-text
            placeholder-nv-text-muted
            focus:outline-none 
            focus:ring-2 
            focus:ring-nv-accent 
            focus:border-transparent
            transition-all duration-fast
            ${error ? 'border-nv-error' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-nv-error">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

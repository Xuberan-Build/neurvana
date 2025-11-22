import { HTMLAttributes, forwardRef } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`nv-container ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

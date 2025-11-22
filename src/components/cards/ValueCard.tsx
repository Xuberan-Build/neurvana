'use client';

import { Value } from '@/types';

interface ValueCardProps {
  value: Value;
}

export const ValueCard = ({ value }: ValueCardProps) => {
  return (
    <div className="group">
      <div className="flex items-start gap-5 mb-5">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-200 to-sage-300 flex items-center justify-center text-primary-900 text-lg font-light flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-card">
          {value.id}
        </div>
        <div>
          <h3 className="text-xl lg:text-2xl font-light text-primary-900 group-hover:text-sage-600 transition-colors leading-tight">
            {value.title}
          </h3>
        </div>
      </div>
      <p className="text-primary-600 font-light leading-relaxed pl-19">
        {value.description}
      </p>
    </div>
  );
};

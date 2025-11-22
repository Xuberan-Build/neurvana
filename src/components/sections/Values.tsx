'use client';

import { values } from '@/data/values';
import { ValueCard } from '@/components/cards';

export const Values = () => {
  return (
    <section id="values" className="py-24 lg:py-32 bg-sand-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-sage-500 uppercase tracking-widest mb-4">Our Foundation</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primary-900 mb-6 tracking-tight">
            Grounded in Purpose
          </h2>
          <p className="text-xl text-primary-600 font-light max-w-2xl mx-auto">
            Principles that honor both science and soul.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {values.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

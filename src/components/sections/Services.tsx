'use client';

import { services } from '@/data/services';
import { ServiceCard } from '@/components/cards';
import { Service } from '@/types';

interface ServicesProps {
  onServiceClick?: (service: Service) => void;
}

export const Services = ({ onServiceClick }: ServicesProps) => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-white via-sand-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold text-sage-600 uppercase tracking-[0.2em] px-5 py-2 bg-sage-100/60 rounded-full border border-sage-300/40">
              Signature Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primary-900 tracking-tight mb-4">
            The Science of Touch
          </h2>
          <p className="text-lg sm:text-xl text-primary-600 font-light max-w-2xl mx-auto">
            Precision meets presence. Your body remembers.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              onLearnMore={onServiceClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

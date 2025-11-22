'use client';

import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  onLearnMore?: (service: Service) => void;
}

export const ServiceCard = ({ service, onLearnMore }: ServiceCardProps) => {
  return (
    <div className="service-card">
      {/* Top accent stripe */}
      <div style={{ height: '4px', background: 'linear-gradient(to right, #556650, #2dcca7, #bc9a8e)' }} />
      
      <div className="service-card-content">
        <h3 className="service-card-title">
          {service.title}
        </h3>
        
        <div className="service-card-pricing">
          {service.duration} • {service.price}
        </div>
        
        <p className="service-card-theme">
          "{service.theme}"
        </p>
        
        <div className="service-card-benefits">
          {service.benefits.slice(0, 3).map((benefit, i) => (
            <div key={i} className="service-card-benefit">
              <span className="service-card-benefit-bullet">•</span>
              <span className="service-card-benefit-text">{benefit}</span>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => onLearnMore?.(service)}
          className="service-card-button"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

'use client';

export const Mission = () => {
  return (
    <section id="mission" className="py-24 lg:py-32 bg-sand-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Decorative element */}
          <div className="flex justify-center mb-12">
            <svg className="w-24 h-1" viewBox="0 0 96 4" fill="none">
              <path d="M0 2 Q24 0, 48 2 T96 2" stroke="#6b7d62" strokeWidth="2" fill="none" opacity="0.4" />
            </svg>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary-900 mb-8 text-center leading-tight max-w-4xl mx-auto">
            At the heart of NeurVana lies the science of balance—between sensations and emotions.
          </h2>
          
          <p className="text-lg sm:text-xl text-primary-600 font-light leading-relaxed text-center max-w-3xl mx-auto">
            Our approach teaches the body to feel safe again, guiding the nervous system out of survival and into alignment. It's where science meets the art of restoration.
          </p>
        </div>
      </div>
    </section>
  );
};

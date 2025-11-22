'use client';

import { heroContent } from '@/data/content';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sage-50/30 via-white to-accent-50/20 pt-24 lg:pt-28"
    >
      {/* Background texture */}
      <div className="hero-texture" />
      
      {/* Floating gradient orbs */}
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />
      
      {/* Main content */}
      <div className="container-custom relative z-10 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center lg:min-h-[70vh]">
          {/* Left: Content */}
          <div className="hero-content space-y-8 animate-[fadeIn_1s_ease-out] max-w-2xl">
            <div className="inline-block">
              <span className="text-xs font-semibold text-sage-700 uppercase tracking-[0.2em] px-4 py-2 bg-sage-100/80 rounded-full border border-sage-300/50">
                Neurosomatic Therapy Studio
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-primary-900 leading-[1.08] tracking-tight">
              Recalibrating<br />
              Humanity,{' '}
              <span className="italic font-serif text-sage-600">
                One Nervous<br />System at a Time.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-primary-600 font-light leading-relaxed">
              {heroContent.subheadline}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="hero-cta-primary">
                Book a Session
              </button>
              <button className="hero-cta-secondary">
                Explore Services
              </button>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="hidden lg:block relative h-[600px] xl:h-[700px] hero-visual">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-[550px] xl:max-w-[600px] max-h-[550px] xl:max-h-[600px]">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-sage-400/30 hero-visual-ring" />
                
                {/* Middle layer with gradient */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-sage-100 via-accent-100 to-copper-100 shadow-2xl" />
                
                {/* Inner glow */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-white via-sage-50/50 to-accent-50/50 shadow-inner" />
                
                {/* Center focal point - image placeholder */}
                <div className="absolute inset-24 rounded-full bg-white shadow-soft flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-sage-200/20 via-accent-200/20 to-copper-200/20 flex items-center justify-center">
                    <div className="text-center space-y-2 p-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-sage-400/30 to-accent-400/30 animate-pulse" />
                      <p className="text-xs text-primary-400 font-light">[Image placeholder]</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating accent dots */}
                <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-sage-500/40 hero-visual-dot-1" />
                <div className="absolute bottom-32 left-16 w-3 h-3 rounded-full bg-accent-400/40 hero-visual-dot-2" />
                <div className="absolute top-40 left-24 w-2 h-2 rounded-full bg-sage-400/40 hero-visual-dot-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

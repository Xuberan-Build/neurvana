'use client';

import { Header, Footer } from '@/components/layout';
import { Hero, Mission, Services, Values, Newsletter } from '@/components/sections';
import { useModal } from '@/hooks/useModal';
import { Service } from '@/types';

export default function Home() {
  const { openModal } = useModal();

  const handleServiceClick = (service: Service) => {
    console.log('Service clicked:', service);
    openModal('service', service);
  };

  return (
    <div className="min-h-screen bg-sand-50">
      <Header />
      
      <main>
        <Hero />
        <Mission />
        <Services onServiceClick={handleServiceClick} />
        <Values />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}

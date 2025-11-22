'use client';

import { useState, FormEvent } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section
      id="newsletter"
      className="py-24 lg:py-32 bg-sand-50"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-primary-900 mb-6 tracking-tight">
            Join the Movement
          </h2>

          <p className="text-xl text-primary-600 mb-10 font-light">
            Insights for a calmer, more coherent life.
          </p>
          
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-full bg-white border border-sage-300 text-primary-900 placeholder-primary-400
                         focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all text-base"
            />
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 rounded-full bg-primary-900 text-sand-50 hover:bg-primary-800 hover:scale-105
                         transition-all duration-300 text-base font-medium shadow-md whitespace-nowrap disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-6 text-primary-700 font-light">
              ✓ Welcome! Check your inbox for confirmation.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

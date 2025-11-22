// src/components/layout/Header.tsx
'use client';

import { useState, useEffect, MouseEvent } from 'react';
import { Button } from '@/components/ui';

// Local smooth scroll helper for this header
const scrollToSection = (sectionId: string) => {
  if (typeof document === 'undefined') return;

  const el = document.getElementById(sectionId);
  if (!el) return;

  const headerOffset = 80; // ~ h-20
  const rect = el.getBoundingClientRect();
  const offset = rect.top + window.scrollY - headerOffset;

  window.scrollTo({
    top: offset,
    behavior: 'smooth',
  });
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#mission', label: 'About', sectionId: 'mission' },
    { href: '#services', label: 'Services', sectionId: 'services' },
    { href: '#values', label: 'Research', sectionId: 'values' },
    { href: '#newsletter', label: 'Insights', sectionId: 'newsletter' },
    { href: '#footer', label: 'Contact', sectionId: 'footer' },
  ];

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          isScrolled
            ? 'bg-sand-50/95 backdrop-blur-md border-b border-sage-300/20'
            : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={handleLogoClick}
            className="text-2xl font-light text-primary-900 tracking-wide hover:text-sage-600 transition-colors"
          >
            NeurVana
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="text-sm text-primary-600 hover:text-sage-600 transition-colors tracking-wide font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('services')}
            >
              Book
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary-900 p-2"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-sage-300/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="text-primary-600 hover:text-sage-600 transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToSection('services');
                  }}
                >
                  Book a Session
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

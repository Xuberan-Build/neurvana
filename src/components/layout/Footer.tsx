'use client';

const scrollToSection = (sectionId: string) => {
  if (typeof document === 'undefined') return;
  const el = document.getElementById(sectionId);
  if (!el) return;
  const headerOffset = 80;
  const rect = el.getBoundingClientRect();
  const offset = rect.top + window.scrollY - headerOffset;
  window.scrollTo({ top: offset, behavior: 'smooth' });
};

const footerLinks = [
  { label: 'About', sectionId: 'mission' },
  { label: 'Services', sectionId: 'services' },
  { label: 'Research', sectionId: 'values' },
  { label: 'Insights', sectionId: 'newsletter' },
  { label: 'Contact', sectionId: 'footer' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-nv-surface border-t border-nv-border-subtle py-12">
      <div className="nv-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-light text-nv-text mb-4">NeurVana</h3>
            <p className="text-nv-text-muted text-sm leading-relaxed">
              Recalibrating humanity, one nervous system at a time.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-nv-text uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.sectionId);
                    }}
                    className="text-nv-text-soft hover:text-nv-accent transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-nv-text uppercase tracking-wider mb-4">
              Stay Connected
            </h4>
            <p className="text-nv-text-muted text-sm mb-4">
              Insights for a calmer, more coherent life.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-nv-surface-soft border border-nv-border-subtle rounded-md text-sm text-nv-text placeholder-nv-text-muted focus:outline-none focus:ring-2 focus:ring-nv-accent"
              />
              <button className="px-4 py-2 bg-nv-accent text-nv-bg rounded-md hover:bg-nv-accent-strong transition-colors text-sm font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-nv-border-subtle text-center">
          <p className="text-nv-text-muted text-sm">
            © {currentYear} NeurVana — Where the body meets brilliance.
          </p>
        </div>
      </div>
    </footer>
  );
};

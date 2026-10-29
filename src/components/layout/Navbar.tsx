import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteData';

export interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = 'md',
  showText = true,
}) => {
  const imgSizes = {
    sm: "w-8 h-8 sm:w-9 sm:h-9",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-14 h-14 sm:w-16 sm:h-16"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Eclectic Seals International Logo */}
      <div className="shrink-0 rounded-xl bg-white p-1 shadow-md border border-white/20 flex items-center justify-center overflow-hidden">
        <img
          src="/assets/logo.jpg"
          alt="Eclectic Seals International logo"
          className={`${imgSizes[size]} object-contain`}
          loading="eager"
        />
      </div>
      {showText && (
        <div className="font-display text-lg sm:text-2xl font-bold tracking-tight whitespace-nowrap">
          <span className="text-white">Eclectic</span>{' '}
          <span className="text-[#F5810D]">Seals</span>{' '}
          <span className="text-white">Int'l</span>
        </div>
      )}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Services', path: '/services' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F172A]/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10'
            : 'bg-[#0F172A]/85 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Wordmark */}
          <Link to="/" className="shrink-0 hover:opacity-95 transition-opacity" aria-label="Eclectic Seals Int'l Home">
            <BrandLogo />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/90">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-1 transition-colors whitespace-nowrap ${
                    active ? 'text-[#F5810D] font-semibold' : 'text-white/85 hover:text-[#F5810D]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F5810D] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Dark toggle + CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-[#F5810D]" /> : <Moon className="w-4 h-4" />}
            </button>

            <Link
              to="/request-quote"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-950 bg-[#F5810D] hover:bg-[#e07205] transition-all transform active:scale-95 shadow-md shadow-orange-500/20 whitespace-nowrap"
            >
              Request Quote
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#F5810D] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0F172A] lg:hidden pt-6 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-6">
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} aria-label="Eclectic Seals International Home">
                <BrandLogo size="sm" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white hover:text-[#F5810D] focus:outline-none rounded-lg bg-white/5"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="text-xs uppercase tracking-widest text-[#F5810D] font-semibold mb-2">Navigation</div>
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-xl font-medium py-2 border-b border-white/10 transition-colors ${
                    active ? 'text-[#F5810D]' : 'text-white hover:text-[#F5810D]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <Link
              to="/request-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold text-slate-950 bg-[#F5810D] hover:bg-[#e07205] transition-colors"
            >
              Request a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-xs text-slate-400">
              Head Office: {SITE_CONFIG.address}
              <div className="mt-1 font-semibold text-white">Call: {SITE_CONFIG.phone1}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

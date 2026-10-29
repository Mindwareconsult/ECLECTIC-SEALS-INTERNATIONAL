import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowUp, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteData';
import { BrandLogo } from './Navbar';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <>
      <footer className="relative bg-[#0F172A] text-slate-300 overflow-hidden border-t border-white/10 pt-16 pb-8">
        {/* Architectural SVG lines at top of footer */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden pointer-events-none opacity-25">
          <svg className="w-full h-24" viewBox="0 0 1400 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 350 L200 350 L200 200 L500 200 L500 350 L800 350 L800 100 L1100 100 L1100 350 L1400 350" stroke="#F5810D" strokeWidth="1.5" fill="none" />
            <circle cx="200" cy="200" r="6" fill="none" stroke="#F5810D" strokeWidth="2" />
            <circle cx="800" cy="100" r="6" fill="none" stroke="#F5810D" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            {/* Col 1: Brand & Intro */}
            <div className="space-y-4">
              <Link to="/" className="inline-block" aria-label="Eclectic Seals International Home">
                <BrandLogo size="lg" />
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                A premium design, construction and property solutions company based in Abuja, delivering interiors, buildings, and landscapes crafted for a lifetime.
              </p>
              <div className="pt-2">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white text-xs font-semibold hover:border-[#F5810D] hover:text-[#F5810D] transition-colors"
                >
                  Start a Project <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-white text-base font-semibold mb-4 tracking-wide">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/about" className="hover:text-[#F5810D] transition-colors">About Us</Link></li>
                <li><Link to="/team" className="hover:text-[#F5810D] transition-colors">Our Team</Link></li>
                <li><Link to="/services" className="hover:text-[#F5810D] transition-colors">Our Services</Link></li>
                <li><Link to="/why-us" className="hover:text-[#F5810D] transition-colors">Why Choose Us</Link></li>
                <li><Link to="/projects" className="hover:text-[#F5810D] transition-colors">Project Portfolio</Link></li>
                <li><Link to="/testimonials" className="hover:text-[#F5810D] transition-colors">Client Testimonials</Link></li>
                <li><Link to="/blog" className="hover:text-[#F5810D] transition-colors">Latest Updates & Blog</Link></li>
                <li><Link to="/faq" className="hover:text-[#F5810D] transition-colors">Frequently Asked Questions</Link></li>
                <li><Link to="/contact" className="hover:text-[#F5810D] transition-colors">Contact Our Team</Link></li>
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="text-white text-base font-semibold mb-4 tracking-wide">Contact Us</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="leading-relaxed">
                  <span className="text-white font-medium block">Head Office:</span>
                  {SITE_CONFIG.address}
                </li>
                <li>
                  <span className="text-white font-medium block">Phone Inquiries:</span>
                  <a href={`tel:${SITE_CONFIG.phone1Tel}`} className="hover:text-[#F5810D] transition-colors block">{SITE_CONFIG.phone1}</a>
                  <a href={`tel:${SITE_CONFIG.phone2Tel}`} className="hover:text-[#F5810D] transition-colors block">{SITE_CONFIG.phone2}</a>
                </li>
                <li>
                  <span className="text-white font-medium block">Email:</span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#F5810D] transition-colors">{SITE_CONFIG.email}</a>
                </li>
              </ul>

              {/* Social */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={SITE_CONFIG.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F5810D] hover:text-slate-950 transition-colors"
                  aria-label="Eclectic Seals Facebook Page"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 4: Newsletter & Working Hours */}
            <div>
              <h4 className="text-white text-base font-semibold mb-4 tracking-wide">Newsletter</h4>
              <p className="text-xs text-slate-400 mb-3">
                Design insights, project completions, and building updates delivered monthly.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#F5810D]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#F5810D] hover:bg-[#e07205] text-slate-950 font-bold text-xs rounded-lg transition-colors shrink-0"
                  >
                    Join
                  </button>
                </div>
                {subscribed && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Thank you — you're subscribed!</span>
                  </div>
                )}
              </form>

              <div className="mt-6 pt-5 border-t border-white/10">
                <h5 className="text-white text-xs uppercase tracking-wider font-semibold mb-1">Working Hours</h5>
                <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-line">
                  {SITE_CONFIG.hours.replace(' | ', '\n')}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All Rights Reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            </div>
            <div className="opacity-75">
              Website Designed by Mindware Consulting Ltd
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons Stack (as seen in screenshot and footer.php) */}
      <div className="fixed right-4 bottom-6 z-40 flex flex-col items-center gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#1B2842] border border-white/20 text-white shadow-lg flex items-center justify-center hover:bg-[#F5810D] hover:text-slate-950 transition-all duration-200 transform hover:scale-105"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Request quote floating button (Orange) */}
        <Link
          to="/request-quote"
          className="w-12 h-12 rounded-full bg-[#F5810D] text-slate-950 shadow-xl shadow-orange-500/25 flex items-center justify-center hover:bg-[#e07205] transition-all duration-200 transform hover:scale-105"
          aria-label="Request a Quote"
          title="Request a Quote"
        >
          <FileText className="w-5 h-5" />
        </Link>

        {/* Direct Call floating button (Navy) */}
        <a
          href={`tel:${SITE_CONFIG.phone1Tel}`}
          className="w-12 h-12 rounded-full bg-[#0F172A] border border-white/20 text-white shadow-xl flex items-center justify-center hover:bg-[#1B2842] transition-all duration-200 transform hover:scale-105"
          aria-label="Call Eclectic Seals"
          title="Call Eclectic Seals"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp floating button (Green) */}
        <a
          href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/25 flex items-center justify-center hover:bg-[#20ba59] transition-all duration-200 transform hover:scale-105"
          aria-label="Chat with Eclectic Seals on WhatsApp"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </div>
    </>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 bg-[#0F172A] text-white text-center overflow-hidden">
      {/* Background with dark architectural overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1600&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/70" />

      {/* SVG lines matching 404.php */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 1400 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M100 700 L100 500 L400 500 L400 300 L750 300" stroke="#C8A45D" strokeWidth="1.5" fill="none" />
        <circle cx="750" cy="300" r="5" fill="none" stroke="#C8A45D" strokeWidth="2" />
      </svg>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-xs uppercase tracking-widest text-[#F5810D] font-bold mb-3">
          Error 404
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Oops! The Page You're Looking For Doesn't Exist.
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          It looks like the page has been moved or no longer exists. Let's get you back on track to explore our architectural and construction solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors"
          >
            Return Home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="px-8 py-3.5 rounded-full text-sm font-semibold border border-white/20 text-white hover:border-[#F5810D] hover:text-[#F5810D] transition-colors"
          >
            View Services
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full text-sm font-semibold border border-white/20 text-white hover:border-[#F5810D] hover:text-[#F5810D] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

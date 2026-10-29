import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  lead?: string;
  breadcrumb: string;
  image?: string;
  minHeight?: string;
  buttons?: Array<{
    label: string;
    url: string;
    style: 'primary' | 'outline';
  }>;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  eyebrow,
  lead,
  breadcrumb,
  image = "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1600&q=80",
  minHeight = "min-h-[460px]",
  buttons
}) => {
  return (
    <section className={`relative bg-[#0F172A] ${minHeight} flex items-center pt-28 pb-16 overflow-hidden`}>
      {/* Background image with deep navy gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 filter contrast-125"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/85 to-[#0F172A]/60" />

      {/* Architectural CAD line SVG overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        viewBox="0 0 1400 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0 600 L300 600 L300 400 L700 400 L700 650 L1000 650 L1000 250 L1400 250" stroke="#F5810D" strokeWidth="1.5" fill="none" />
        <circle cx="300" cy="400" r="5" fill="none" stroke="#F5810D" strokeWidth="2" />
        <circle cx="1000" cy="250" r="5" fill="none" stroke="#F5810D" strokeWidth="2" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[#F5810D]">{breadcrumb}</span>
        </div>

        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5810D] mb-3">
            <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
            {eyebrow}
          </div>
        )}

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl tracking-tight leading-tight mb-5">
          {title}
        </h1>

        {/* Lead */}
        {lead && (
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light mb-8">
            {lead}
          </p>
        )}

        {/* Action Buttons */}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap items-center gap-4">
            {buttons.map((btn, idx) => (
              <Link
                key={idx}
                to={btn.url}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all transform active:scale-95 ${
                  btn.style === 'primary'
                    ? 'bg-[#F5810D] text-slate-950 hover:bg-[#e07205] shadow-lg shadow-orange-500/25'
                    : 'border border-white/25 text-white hover:border-[#F5810D] hover:text-[#F5810D]'
                }`}
              >
                {btn.label}
                {btn.style === 'primary' && <ArrowRight className="w-4 h-4" />}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

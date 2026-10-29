import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white dark:bg-[#111827] text-slate-900 dark:text-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-[#F5810D] hover:text-slate-950 flex items-center justify-center transition-colors"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-[#F5810D] mb-4">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
              <path d={service.icon} />
            </svg>
          </div>
          <span className="text-xs uppercase tracking-widest font-bold">Comprehensive Solution</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
          {service.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Scope &amp; Capabilities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.bullets.map((b, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="w-5 h-5 rounded-full bg-orange-500/15 text-[#F5810D] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {service.deliverables && (
          <div className="mb-8 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-2">Key Deliverables</h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5810D]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <Link
            to="/request-quote"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors"
          >
            Request Consultation For This Service <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

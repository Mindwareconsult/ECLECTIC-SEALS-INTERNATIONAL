import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { FAQS_DATA } from '../data/siteData';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { slug: 'all', name: 'All' },
    { slug: 'general', name: 'General' },
    { slug: 'construction', name: 'Construction' },
    { slug: 'interior', name: 'Interior Design' },
    { slug: 'renovation', name: 'Renovation' },
    { slug: 'property', name: 'Property Management' },
    { slug: 'paint', name: 'Paint Manufacturing' },
    { slug: 'payments', name: 'Payments' },
    { slug: 'support', name: 'Support' },
  ];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCat = selectedCat === 'all' || item.category === selectedCat;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <PageHero
        title="Frequently Asked Questions"
        eyebrow="Support &amp; Guidance"
        lead="Everything you need to know about our construction, luxury interior design, renovation, paint manufacturing, property management, and consultation process."
        breadcrumb="FAQ"
        image="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1600&q=80"
        buttons={[
          { label: "Request a Quote", url: "/request-quote", style: "primary" },
          { label: "Contact Our Team", url: "/contact", style: "outline" }
        ]}
      />

      <section className="py-20 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search bar */}
          <div className="relative mb-8">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search a question about pricing, permits, materials, timelines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#162032] text-sm focus:outline-none focus:border-[#F5810D] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCat(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCat === cat.slug
                    ? 'bg-[#F5810D] text-slate-950 shadow-md shadow-orange-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#F8F9FA] dark:bg-[#162032] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-base sm:text-lg text-slate-900 dark:text-white"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#F5810D] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              No questions found matching your search. Try another query or reach out to our team directly.
            </div>
          )}
        </div>
      </section>

      {/* CTA Quote */}
      <section className="py-20 bg-[#0F172A] text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">Our senior engineering and design team is happy to talk through the specifics of your site.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/request-quote" className="px-7 py-3.5 rounded-full text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors">
              Request a Quote <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
            <Link to="/contact" className="px-7 py-3.5 rounded-full text-sm font-semibold border border-white/20 text-white hover:border-[#F5810D] hover:text-[#F5810D] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

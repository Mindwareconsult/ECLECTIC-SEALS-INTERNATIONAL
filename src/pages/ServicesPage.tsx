import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SERVICES_DATA, SITE_CONFIG } from '../data/siteData';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { Lightbox } from '../components/common/Lightbox';

export const ServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const galleryImages = [
    "/assets/projects/chinese-cultural-center/renovation-hero.jpg",
    "/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-02.jpeg",
    "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-06.jpeg",
    "/assets/projects/tv-console-installations/tv-console-installations-05.jpeg",
    "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-01.jpeg",
    "/assets/projects/floating-stairs-design/floating-stairs-design-03.jpeg",
    "/assets/projects/floor-tiles-installation/floor-tiles-installation-01.jpeg",
    "/assets/projects/landscaping-solutions/landscaping-solutions-03.jpeg",
    "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-14.jpeg"
  ];

  const workflow = [
    "Client Consultation",
    "Site Assessment",
    "Proposal",
    "Design",
    "Approval",
    "Execution",
    "Quality Assurance",
    "Completion"
  ];

  const reliability = [
    { title: "Transparent Communication", text: "You always know what stage your project is at with weekly site updates.", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
    { title: "Expert Team", text: "Licensed civil engineers and experienced designers on every job site.", icon: "M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z" },
    { title: "Quality Materials", text: "Sourced or manufactured to our own rigorous specifications.", icon: "M3 21V9l6-4 6 4v12M9 21V13h6v8" },
    { title: "Modern Equipment", text: "Precision laser levels, modern scaffolding, and high-efficiency tools.", icon: "M4 4h16v16H4zM4 9h16M9 9v11" },
    { title: "Timely Delivery", text: "Schedules built with realistic buffers, tracked and respected.", icon: "M12 7v5l3 3", circle: true },
    { title: "Customer Satisfaction", text: "Feedback loops built into every project phase before signoff.", icon: "M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5 1.2-7-5-5 7-1z" }
  ];

  const faqs = [
    { q: "How long does a project take?", a: "Timelines vary by scope; a single-room or kitchen renovation may take 2–4 weeks, while a full residential build can take 6–12 months. We provide a specific, guaranteed timeline in every quotation." },
    { q: "Do you offer free consultations?", a: "Yes. Initial consultations are complimentary and help us understand your architectural brief and lifestyle requirements before issuing a quotation." },
    { q: "Can you manage projects outside Abuja?", a: "Yes, we take on select commercial and residential projects across Nigeria depending on project scale and site accessibility." },
    { q: "Do you provide design before construction?", a: "Yes, our in-house design studio develops 3D photorealistic renderings and technical CAD drawings before any physical work begins." },
    { q: "Can I purchase materials only?", a: "Yes, our construction supplies division serves contractors and homeowners who only require premium materials and paint supply without full project management." },
    { q: "Do you offer maintenance services?", a: "Yes, our property management division provides ongoing maintenance contracts and emergency repair services after project completion." }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Complete Design & Construction Solutions"
        eyebrow="What We Offer"
        lead="From concept to completion, Eclectic Seals Int'l provides comprehensive solutions that transform ordinary spaces into extraordinary environments."
        breadcrumb="Services"
        image="/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-02.jpeg"
        buttons={[
          { label: "Request Quote", url: "/request-quote", style: "primary" },
          { label: "Call Us Now", url: `tel:${SITE_CONFIG.phone1Tel}`, style: "outline" }
        ]}
      />

      {/* Intro section */}
      <section className="py-20 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
            <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
            Integrated Delivery
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            One Team, Every Stage Of Your Project
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            We combine design, construction, materials, and property management under a single point of responsibility &mdash; so quality is consistent and nothing falls between the cracks. Every engagement includes professional project management, premium materials, and a team that has delivered similar work before.
          </p>
        </div>
      </section>

      {/* 9 Service Detailed Sections */}
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {SERVICES_DATA.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-24 ${isEven ? 'bg-[#F8F9FA] dark:bg-[#111827]' : 'bg-white dark:bg-[#0B1120]'} text-slate-900 dark:text-white`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Media */}
                  <div className={`rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200 dark:border-slate-800 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <img
                      src={service.image}
                      alt={`${service.title} by Eclectic Seals Int'l`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                        <path d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.bullets.map((b, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <span className="w-5 h-5 rounded-full bg-orange-500/15 text-[#F5810D] flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/request-quote"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors"
                      >
                        Book Consultation <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Workflow Process Track */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Our Workflow
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              How A Project Moves From Brief To Handover
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {workflow.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#1B2842]/70 rounded-xl p-4 border border-white/10 text-center flex flex-col items-center justify-between"
              >
                <div className="w-9 h-9 rounded-full bg-[#F5810D] text-slate-950 font-display font-bold text-xs flex items-center justify-center mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="font-display text-xs font-bold text-white leading-snug">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reliability Section */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Reliability
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Why Our Process Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reliability.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                    {item.circle && <circle cx="12" cy="12" r="9" />}
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Craftsmanship Gallery */}
      <section className="py-24 bg-[#F1F3F5] dark:bg-[#111827] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Gallery
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              A Glimpse Of Our Craftsmanship
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
              Click any photo to open the interactive high-resolution viewer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveGalleryIndex(idx);
                  setLightboxOpen(true);
                }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md border border-slate-200 dark:border-slate-800"
              >
                <img
                  src={img}
                  alt={`Eclectic Seals craftsmanship detail ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider">
                  View Fullscreen
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Questions
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#F8F9FA] dark:bg-[#162032] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-base sm:text-lg text-slate-900 dark:text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#F5810D] transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0F172A] text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Let's Build Something Exceptional Together</h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">Request a quotation or chat with our engineering team on WhatsApp to get started.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/request-quote" className="px-7 py-3.5 rounded-full text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors">
              Request a Quote <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full text-sm font-semibold border border-white/20 text-white hover:border-[#F5810D] hover:text-[#F5810D] transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        currentIndex={activeGalleryIndex}
        onSelectIndex={setActiveGalleryIndex}
        title="Eclectic Seals Craftsmanship Gallery"
      />
    </div>
  );
};

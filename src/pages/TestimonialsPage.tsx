import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { TESTIMONIALS_DATA } from '../data/siteData';
import { Play, ArrowRight } from 'lucide-react';

export const TestimonialsPage: React.FC = () => {
  const videoTestimonials = [
    {
      title: "A Villa Renovation, Told By The Homeowner",
      duration: "2:14",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      location: "Asokoro, Abuja"
    },
    {
      title: "Delivering A Corporate Fit-Out On Deadline",
      duration: "1:48",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      location: "Central Business District"
    },
    {
      title: "Building A Commercial Development From The Ground Up",
      duration: "3:02",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80",
      location: "Maitama, Abuja"
    }
  ];

  const corporateClients = [
    "Liberia Embassy Abuja",
    "Chinese Cultural Center",
    "Apex Investment Holdings",
    "Transcorp Commercial Suites",
    "Abuja Metropolitan Properties",
    "Prime Oak Estates"
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Trusted By Homeowners, Businesses & Property Investors"
        eyebrow="Client Voices"
        lead="Every project leaves behind a lasting relationship. Here is what our clients say about partnering with Eclectic Seals Int'l on their landmark properties."
        breadcrumb="Testimonials"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
        buttons={[
          { label: "Request Quote", url: "/request-quote", style: "primary" },
          { label: "View Our Projects", url: "/projects", style: "outline" }
        ]}
      />

      {/* Reviews Grid */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Reviews
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Client Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((testi) => (
              <div
                key={testi.id}
                className="bg-[#F8F9FA] dark:bg-[#162032] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#F5810D] text-sm mb-4">
                    {"★".repeat(testi.stars || 5)}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic mb-6">
                    &ldquo;{testi.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div
                    className="w-10 h-10 rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0"
                    style={{ backgroundColor: testi.avatarColor }}
                  >
                    {testi.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-slate-900 dark:text-white">{testi.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{testi.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section (Dark Navy) */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              On Camera
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Video Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((v, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 border border-white/10 shadow-lg cursor-pointer"
              >
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 border border-[#F5810D] flex items-center justify-center mb-3 group-hover:bg-[#F5810D] group-hover:text-slate-950 transition-colors">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-1 leading-snug">{v.title}</h3>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>{v.location}</span>
                    <span className="text-[#F5810D] font-mono">{v.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Clients */}
      <section className="py-20 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Trusted By
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Corporate &amp; Institutional Clients
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {corporateClients.map((client, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-[#F8F9FA] dark:bg-[#162032] text-center flex items-center justify-center font-display font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 opacity-70 hover:opacity-100 hover:border-[#F5810D] transition-all"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Quote */}
      <section className="py-20 bg-[#0F172A] text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Become Our Next Success Story</h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">Tell us about your project vision and join the satisfied clients above.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/request-quote" className="px-7 py-3.5 rounded-full text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors">
              Request a Consultation <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

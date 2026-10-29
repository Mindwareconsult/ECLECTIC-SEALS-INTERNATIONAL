import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { TEAM_MEMBERS, SITE_CONFIG } from '../data/siteData';
import { ArrowRight, Check } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const coreValues = [
    { title: "Integrity", text: "We do what we say, and price what we deliver.", icon: "M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z" },
    { title: "Quality", text: "Materials and workmanship built to outlast trends.", icon: "M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5 1.2-7-5-5 7-1z" },
    { title: "Innovation", text: "Modern construction methods applied to timeless design.", icon: "M3 21V9l6-4 6 4v12M9 21V13h6v8M15 21V11l6-3v13" },
    { title: "Professionalism", text: "Clear, proactive communication at every stage.", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
    { title: "Customer Satisfaction", text: "Your goals define what project success looks like.", icon: "M20 6 9 17l-5-5" },
    { title: "Transparency", text: "Itemised quotes, transparent bills, zero hidden surprises.", icon: "M9 12h6M12 9v6", circle: true },
    { title: "Teamwork", text: "Architects, engineers, artisans and project managers, aligned.", icon: "M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6" },
    { title: "Excellence", text: "The uncompromised standard we hold on every single site.", icon: "M12 7v5l3 3", circle: true }
  ];

  const differentiators = [
    { title: "Experienced Professionals", text: "A senior team with deep, cross-disciplinary project experience in Nigeria's built environment.", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
    { title: "Premium Materials", text: "In-house sourcing and paint manufacturing guarantees quality control remains uncompromising.", icon: "M3 21V9l6-4 6 4v12M9 21V13h6v8" },
    { title: "Creative Designs", text: "Concepts tailored to your specific site, brief, and spatial flow—never generic templates.", icon: "M4 4h16v16H4zM4 9h16M9 9v11" },
    { title: "Timely Delivery", text: "Milestones tracked weekly with disciplined logistical planning to protect project deadlines.", icon: "M12 7v5l3 3", circle: true },
    { title: "Competitive Pricing", text: "Direct manufacturer relationships that keep costs reasonable without shaving quality.", icon: "M9 12h6M12 9v6", circle: true },
    { title: "After-Sales Support", text: "We stand behind our craft with defect liability periods and long-term facility maintenance.", icon: "M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z" }
  ];

  const expertiseList = [
    "Luxury Residential Projects",
    "Commercial Construction",
    "Interior Architecture & Design",
    "Interior Finishing & Millwork",
    "Full Structural Renovation",
    "Real Estate Property Management",
    "Construction Supplies Procurement",
    "In-House Paint Manufacturing"
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Building Spaces That Inspire Excellence"
        eyebrow="Our Story"
        lead="Eclectic Seals Int'l is committed to transforming ideas into timeless spaces through innovative design, quality construction, premium finishing, and exceptional project delivery."
        breadcrumb="About Us"
        image="/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-02.jpeg"
        buttons={[
          { label: "Our Services", url: "/services", style: "primary" },
          { label: "Request Consultation", url: "/request-quote", style: "outline" }
        ]}
      />

      {/* Story Split Section */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200 dark:border-slate-800">
              <img
                src="/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-06.jpeg"
                alt="Eclectic Seals bespoke interior joinery installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D]">
                <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
                Our Story
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                From A Small Team To A Trusted Name In Abuja
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Eclectic Seals Int'l was founded on a simple conviction: that the buildings and interiors people live and work in shape the quality of their daily lives. What began as a dedicated team of designers and civil engineers in Abuja has grown into a full-service multidisciplinary firm spanning interior design, construction, renovation, landscaping, paint manufacturing, and real estate property management.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Every stage of our growth has been guided by the same standard: quality craftsmanship, honest communication, and a refusal to hand over anything less than our best work. We measure ourselves not by the mere volume of projects, but by how many discerning clients return to us for their next landmark development.
              </p>
              <blockquote className="p-4 rounded-xl border-l-4 border-[#F5810D] bg-slate-50 dark:bg-slate-900/50 font-display italic text-base sm:text-lg text-slate-900 dark:text-white">
                &ldquo;We don't simply construct buildings &mdash; we create environments where people live, work, grow, and thrive.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F1F3F5] dark:bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Provide innovative construction, interior design, and property solutions that exceed client expectations through quality craftsmanship, integrity, and uncompromising professionalism.
              </p>
            </div>

            <div className="bg-white dark:bg-[#162032] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                To stand as Nigeria's most respected construction and interior solutions company, recognized nationally for engineering excellence, design innovation, and sustainable property stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              What Drives Us
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#162032] shadow-sm hover:border-[#F5810D] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                    {v.circle && <circle cx="12" cy="12" r="9" />}
                    <path d={v.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-slate-900 dark:text-white">{v.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart (Dark Navy) */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              The Difference
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#1B2842]/70 border border-white/10 hover:border-[#F5810D] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                    {d.circle && <circle cx="12" cy="12" r="9" />}
                    <path d={d.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-white">{d.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Across Every Stage */}
      <section className="py-24 bg-[#F8F9FA] dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D]">
                <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
                Comprehensive Spectrum
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Expertise Across Every Stage Of Construction
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                From the first conceptual sketch to final turnkey handover, our specialized teams cover the full lifecycle of your property:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {expertiseList.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-[#162032] border border-slate-200 dark:border-slate-800 shadow-sm text-xs sm:text-sm font-medium">
                    <span className="w-6 h-6 rounded-full bg-orange-500/15 text-[#F5810D] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="Interior finishing detail on luxury residential project by Eclectic Seals Int'l"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white dark:bg-[#111827] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Leadership
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Meet Our Senior Team
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
              Licensed engineers, master designers, and site managers dedicated to project perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-[#F5810D] shadow-md bg-slate-900">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className={`w-full h-full object-cover ${member.imagePosition || 'object-top'}`}
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                  <div className="text-xs font-semibold text-[#F5810D] mb-3 tracking-wide">{member.role}</div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">{member.bio}</p>
                </div>
                <Link
                  to="/team"
                  className="text-xs font-bold text-[#F5810D] hover:text-[#c9670a] inline-flex items-center gap-1 mt-2"
                >
                  View Full Biography &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors shadow-lg shadow-orange-500/20"
            >
              Meet The Full Team &amp; Read Biographies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Quote Section */}
      <section className="py-20 bg-[#0F172A] text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Ready To Bring Your Vision To Life?</h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">Book a free consultation and let's scope your next landmark project together.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/request-quote" className="px-7 py-3.5 rounded-full text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors">
              Request Consultation <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
            <Link to="/projects" className="px-7 py-3.5 rounded-full text-sm font-semibold border border-white/20 text-white hover:border-[#F5810D] hover:text-[#F5810D] transition-colors">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

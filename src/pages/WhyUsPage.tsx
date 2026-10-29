import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { ArrowRight, Check } from 'lucide-react';

export const WhyUsPage: React.FC = () => {
  const commitments = [
    { title: "Quality Workmanship", text: "Every finish is executed to a standard we would accept in our own homes.", icon: "M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z" },
    { title: "Transparent Communication", text: "You will always know the status, cost, and timeline of your project.", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
    { title: "Innovative Design", text: "Concepts tailored to your brief, never recycled from a generic catalogue.", icon: "M4 4h16v16H4zM4 9h16M9 9v11" },
    { title: "Premium Materials", text: "Sourced or manufactured in-house for consistent quality and resilience.", icon: "M3 21V9l6-4 6 4v12M9 21V13h6v8" },
    { title: "On-Time Delivery", text: "Schedules tracked weekly with proactive milestone notifications.", icon: "M12 7v5l3 3", circle: true },
    { title: "Long-Term Value", text: "Built to perform and hold its value for decades, not just at handover.", icon: "M9 12h6M12 9v6", circle: true }
  ];

  const qualityStages = [
    { num: "01", title: "Planning", desc: "Rigorous feasibility, geotechnical, and architectural reviews." },
    { num: "02", title: "Inspection", desc: "Daily site checks for adherence to structural drawings." },
    { num: "03", title: "Testing", desc: "Cube compressive testing for concrete, pressure testing for MEP." },
    { num: "04", title: "Approval", desc: "Consulting structural engineer signoff at every key milestone." },
    { num: "05", title: "Delivery", desc: "Detailed client walk-through, snag rectification, and warranty handoff." }
  ];

  const companyValues = [
    { title: "Integrity", icon: "M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z" },
    { title: "Innovation", icon: "M4 4h16v16H4zM4 9h16M9 9v11" },
    { title: "Professionalism", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
    { title: "Reliability", icon: "M12 7v5l3 3", circle: true },
    { title: "Excellence", icon: "M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5 1.2-7-5-5 7-1z" },
    { title: "Safety", icon: "M20 6 9 17l-5-5" },
    { title: "Customer First", icon: "M9 12h6M12 9v6", circle: true }
  ];

  const differencePoints = [
    "Attention to detail in every architectural specification",
    "Skilled, vetted artisans and certified civil engineers on every site",
    "Close, transparent client collaboration throughout the build",
    "Structured project management software tracking milestones",
    "Modern equipment, precision laser levels, and safe scaffolding",
    "Independent 5-checkpoint quality control system"
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Why Homeowners & Businesses Trust Eclectic Seals Int'l"
        eyebrow="Our Promise"
        lead="Our commitment to excellence, quality, innovation, and customer satisfaction has earned us the trust of clients across residential, commercial, and institutional sectors in Abuja."
        breadcrumb="Why Choose Us"
        image="/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-02.jpeg"
        buttons={[
          { label: "Our Projects", url: "/projects", style: "primary" },
          { label: "Request Consultation", url: "/request-quote", style: "outline" }
        ]}
      />

      {/* Commitments Section */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Our Promise
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              What We Commit To On Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitments.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#F5810D] transition-colors"
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

      {/* What Makes Us Different Split Section */}
      <section className="py-24 bg-[#F1F3F5] dark:bg-[#111827] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200 dark:border-slate-800">
              <img
                src="/assets/projects/tv-console-installations/tv-console-installations-05.jpeg"
                alt="Detail of premium architectural finishing on an Eclectic Seals project"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D]">
                <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
                What Makes Us Different
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Attention To Detail, From Planning To Handover
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                We pair skilled professionals with genuine client collaboration, modern project management tools, and rigorous quality control at every stage. That combination is what allows us to deliver consistently, project after project, regardless of scale.
              </p>

              <div className="space-y-2.5 pt-2">
                {differencePoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-orange-500/15 text-[#F5810D] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance At Every Stage (Dark Navy) */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Standards
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Quality Assurance At Every Stage
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              We treat quality control as a checkpoint system, not an afterthought &mdash; every stage of a project is reviewed before the next begins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {qualityStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-[#1B2842]/70 rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center justify-between"
              >
                <div className="w-12 h-12 rounded-full bg-[#F5810D] text-slate-950 font-display font-bold text-sm flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
                  {stage.num}
                </div>
                <h4 className="font-display text-lg font-bold text-white mb-2">{stage.title}</h4>
                <p className="text-slate-300 text-xs leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Values
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Company Core Values
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {companyValues.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                    {v.circle && <circle cx="12" cy="12" r="9" />}
                    <path d={v.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">{v.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F172A] text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Experience Construction Without Compromise</h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">Talk to our civil engineering and interior architecture experts about your project today.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/request-quote" className="px-7 py-3.5 rounded-full text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors">
              Get Started <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
            <Link to="/contact" className="px-7 py-3.5 rounded-full text-sm font-semibold border border-white/20 text-white hover:border-[#F5810D] hover:text-[#F5810D] transition-colors">
              Talk To Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

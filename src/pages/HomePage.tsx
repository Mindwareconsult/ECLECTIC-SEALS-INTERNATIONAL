import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Phone, MapPin, Mail, MessageSquare } from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA, PROJECTS_DATA, TESTIMONIALS_DATA, TEAM_MEMBERS } from '../data/siteData';
import { ServiceItem } from '../types';
import { ServiceModal } from '../components/common/ServiceModal';

export const HomePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Trust badges for hero
  const trustBadges = [
    "10+ Years of Industry Experience",
    "Quality Craftsmanship",
    "Trusted Professionals",
    "Premium Customer Service"
  ];

  // 6 reasons for Section 4 (Why Eclectic Seals)
  const reasons = [
    {
      title: "Experienced Professionals",
      text: "A multidisciplinary team of architects, civil engineers, and master artisans with decades of combined project leadership.",
      icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
    },
    {
      title: "Superior Craftsmanship",
      text: "Every joint, bevel, fixture, and paint application is executed to a standard we would demand in our own private residences.",
      icon: "M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z"
    },
    {
      title: "Quality Materials",
      text: "We specify, rigorously test, and in many instances manufacture the building supplies and coatings that go into your project.",
      icon: "M3 21V9l6-4 6 4v12M9 21V13h6v8M15 21V11l6-3v13"
    },
    {
      title: "On-Time Delivery",
      text: "Realistic schedules built with sensible buffer margins, tracked weekly, and communicated proactively at every phase.",
      icon: "M12 7v5l3 3",
      circle: true
    },
    {
      title: "Transparent Pricing",
      text: "Itemised, transparent Bills of Quantities with zero hidden fees and clearly defined project milestone payments.",
      icon: "M9 12h6M12 9v6",
      circle: true
    },
    {
      title: "Customer Satisfaction",
      text: "A 95% client satisfaction rating built on listening first, engineering second, and standing behind our work after handover.",
      icon: "M12 2l3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5 1.2-7-5-5 7-1z"
    }
  ];

  // 7 process steps for Section 6
  const processSteps = [
    { num: "01", title: "Initial Consultation", desc: "We listen to your vision, spatial requirements, lifestyle goals, and budget boundaries." },
    { num: "02", title: "Site Inspection", desc: "Our engineering and architectural team evaluates site topography, services, and structural conditions." },
    { num: "03", title: "Design & Planning", desc: "Detailed 3D visualizations, schematic drawings, and material specifications are developed." },
    { num: "04", title: "Quotation", desc: "A transparent, itemised quotation with clear milestone deliverables is provided." },
    { num: "05", title: "Project Execution", desc: "Construction, interior craftsmanship, and installation proceed on schedule with regular updates." },
    { num: "06", title: "Quality Inspection", desc: "Every structural element and finish is audited against our 5-checkpoint quality standards." },
    { num: "07", title: "Project Delivery", desc: "Turnkey client walkthrough, documented warranty handover, and ongoing after-sales care." }
  ];

  return (
    <div className="min-h-screen">
      {/* ---------------- SECTION 1: HERO (Matching Screenshot Exactly) ---------------- */}
      <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0F172A]">
        {/* Background photo of construction blueprints & yellow hard hats */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 filter contrast-125"
          style={{
            backgroundImage: `url('/assets/aistudio/Screenshot__74__27a86498.png')`,
            backgroundPosition: 'center 45%'
          }}
        />
        {/* Dark navy architectural gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/70" />

        {/* Orange Architectural Line Art & Circular Nodes */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          viewBox="0 0 1400 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 600 L300 600 L300 400 L700 400 L700 650 L1000 650 L1000 250 L1400 250" stroke="#F5810D" strokeWidth="1.5" fill="none" />
          <circle cx="300" cy="400" r="5" fill="none" stroke="#F5810D" strokeWidth="2" />
          <circle cx="1000" cy="250" r="5" fill="none" stroke="#F5810D" strokeWidth="2" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F5810D] mb-4">
              <span className="w-8 h-0.5 bg-[#F5810D] rounded-full" />
              <span>{SITE_CONFIG.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              From Concept To <br />
              <em className="text-[#F5810D] not-italic italic font-normal">Blueprint To Reality.</em>
            </h1>

            {/* Lead description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light mb-10 max-w-2xl">
              {SITE_CONFIG.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-[#F5810D] hover:bg-[#e07205] transition-all transform active:scale-95 shadow-xl shadow-orange-500/25"
              >
                Request a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white border border-white/25 hover:border-[#F5810D] hover:text-[#F5810D] transition-colors bg-white/5 backdrop-blur-sm"
              >
                View Our Projects
              </Link>
            </div>

            {/* 4 Trust Badges */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs uppercase tracking-widest text-[#F5810D] font-bold mb-3">Why Eclectic Seals</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-white/90 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                    <Check className="w-4 h-4 text-[#F5810D] shrink-0 stroke-[2.5]" />
                    <span className="font-medium leading-tight">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: WHO WE ARE (Split layout) ---------------- */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Split Media */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
                <img
                  src="/assets/projects/chinese-cultural-center/renovation-hero.jpg"
                  alt="Architectural renovation by Eclectic Seals Int'l"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#0F172A] border border-[#F5810D]/30 text-white p-5 rounded-2xl shadow-xl max-w-xs">
                <div className="font-display text-2xl font-bold text-[#F5810D]">10+ Years</div>
                <div className="text-xs text-slate-300 mt-1">Transforming Abuja's residential and commercial landscape with enduring craft.</div>
              </div>
            </div>

            {/* Split Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D]">
                <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
                Who We Are
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Creating Exceptional Spaces That Inspire
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Eclectic Seals Int'l specialises in delivering premium construction, luxury interiors, renovations, property solutions, and building supplies that combine functionality with timeless aesthetics. Every project we undertake, from a private residence in Asokoro to a corporate headquarters in Maitama, is shaped by the same discipline: precise planning, honest materials, and craftsmanship that holds up for decades.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Our multidisciplinary team works across the full lifecycle of a property &mdash; design, build, finish, and manage &mdash; so our clients deal with a single, accountable partner from concept to handover.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all"
                >
                  About Us
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-950 bg-[#F5810D] hover:bg-[#e07205] transition-all shadow-md shadow-orange-500/20"
                >
                  Request Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: SERVICES (Bento Grid) ---------------- */}
      <section className="py-24 bg-[#F1F3F5] dark:bg-[#111827] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              What We Do
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Comprehensive Building &amp; Property Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Everything you need, from concept to completion, under one accountable roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-[#162032] rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mb-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                      <path d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 tracking-tight text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                  <ul className="space-y-2 mb-6 border-t border-slate-100 dark:border-slate-800 pt-4">
                    {service.bullets.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5810D] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#F5810D] hover:text-[#c9670a] transition-colors pt-2 group"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-colors"
            >
              Explore Full Service Catalogue <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: WHY CHOOSE ECLECTIC SEALS (Dark Navy) ---------------- */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Why Eclectic Seals
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
              Why Clients Choose Eclectic Seals Int'l
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Precision planning, honest materials, and craftsmanship that holds up for decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r, idx) => (
              <div
                key={idx}
                className="bg-[#1B2842]/70 rounded-2xl p-7 border border-white/10 hover:border-[#F5810D]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                    {r.circle && <circle cx="12" cy="12" r="9" />}
                    <path d={r.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-white">
                  {r.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MEET OUR TEAM PREVIEW ---------------- */}
      <section className="py-24 bg-[#F8F9FA] dark:bg-[#111827] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
                <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
                The People Behind Excellence
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Meet Our Leadership Team
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                A multidisciplinary collective of certified civil engineers, master interior space planners, and project managers delivering Abuja's most prestigious landmarks.
              </p>
            </div>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors shrink-0 shadow-md shadow-orange-500/20"
            >
              Meet the Full Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.slice(0, 3).map((member) => (
              <div
                key={member.id}
                className="group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#162032] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-900">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${member.imagePosition || 'object-top'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5810D] block mb-1">
                      {member.role}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-tight text-white leading-snug">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <Link
                      to="/team"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F5810D] hover:text-[#c9670a] transition-colors"
                    >
                      View Profile &amp; Bio <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] text-slate-400">
                      {member.experience || ''}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: FEATURED PROJECTS ---------------- */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Portfolio
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              A selection of recent work across interiors, renovation, construction and landscaping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.filter(p => p.featured).slice(0, 6).map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#162032] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F172A]/90 backdrop-blur-sm border border-white/10 text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {project.clientType}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-md">
                    {project.gallery.length} Photos
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#F5810D] font-semibold mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-[#F5810D] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#F5810D] transition-colors pt-2 border-t border-slate-100 dark:border-slate-800"
                  >
                    View Project Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-colors"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: OUR PROCESS (Dark Navy with Numbered Seals) ---------------- */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              How We Work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Our 7-Step Process
            </h2>
            <p className="text-slate-400 text-base">
              From the initial idea to the moment you unlock the door, our methodology guarantees clarity, quality, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-[#1B2842]/60 rounded-2xl p-5 border border-white/10 flex flex-col justify-between hover:border-[#F5810D] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#F5810D] text-slate-950 font-display font-bold text-sm flex items-center justify-center mb-4 shadow-md shadow-orange-500/20">
                    {step.num}
                  </div>
                  <h4 className="font-display text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 7: CLIENT TESTIMONIALS (Marquee) ---------------- */}
      <section className="py-24 bg-[#F8F9FA] dark:bg-[#111827] text-slate-900 dark:text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
            <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
            Client Voices
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Marquee loop */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex gap-6">
            {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((testi, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[400px] shrink-0 bg-white dark:bg-[#162032] p-7 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                {/* 5 gold stars */}
                <div className="flex items-center gap-1 text-[#F5810D] text-base mb-4">
                  {"★".repeat(testi.stars || 5)}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{testi.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
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

      {/* ---------------- SECTION 8: FINAL CTA BANNER ---------------- */}
      <section className="py-20 bg-[#0F172A] relative overflow-hidden border-t border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-4">
            <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
            Let's Collaborate
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your project and we'll respond within one business day with next steps, spatial concepts, and a consultation plan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-[#F5810D] hover:bg-[#e07205] transition-all transform active:scale-95 shadow-xl shadow-orange-500/25"
            >
              Request Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone1Tel}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-[#F5810D] hover:text-[#F5810D] transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Now: {SITE_CONFIG.phone1}
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 9: VISIT OR REACH US DIRECTLY (Map & Contact Split) ---------------- */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Contact Info details */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D]">
                <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
                Get In Touch
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                Visit Or Reach Us Directly
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Our head office is in Asokoro, Abuja. Reach out by phone, WhatsApp or email &mdash; our client liaison team typically responds within a few hours.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#162032] border border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-[#F5810D] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-slate-900 dark:text-white">Office Address</strong>
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{SITE_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#162032] border border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-[#F5810D] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-slate-900 dark:text-white">Phone &amp; WhatsApp</strong>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-x-2">
                      <a href={`tel:${SITE_CONFIG.phone1Tel}`} className="hover:text-[#F5810D]">{SITE_CONFIG.phone1}</a>
                      <span>|</span>
                      <a href={`tel:${SITE_CONFIG.phone2Tel}`} className="hover:text-[#F5810D]">{SITE_CONFIG.phone2}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#162032] border border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-[#F5810D] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-slate-900 dark:text-white">Email Address</strong>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-[#F5810D]">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-slate-950 bg-[#F5810D] hover:bg-[#e07205] transition-colors"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Embedded Interactive Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl aspect-[4/3]">
              <iframe
                title="Eclectic Seals Int'l Office Location Map"
                src="https://www.google.com/maps?q=Asokoro,Abuja,Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  );
};

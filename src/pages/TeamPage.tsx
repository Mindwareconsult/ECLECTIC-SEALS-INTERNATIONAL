import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { TEAM_MEMBERS, SITE_CONFIG } from '../data/siteData';
import { TeamMember } from '../types';
import { TeamMemberModal } from '../components/common/TeamMemberModal';
import { ArrowRight, Check, Award, ShieldCheck, HardHat, Compass } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const multidisciplinaryPillars = [
    {
      icon: Compass,
      title: "Design & Spatial Planning",
      desc: "Our interior architects and planners turn abstract design visions into functional, daylight-optimized, and aesthetically resonant spaces."
    },
    {
      icon: HardHat,
      title: "Civil & Structural Engineering",
      desc: "Licensed civil engineers oversee foundation integrity, structural load calculations, and turnkey building execution to strict codes."
    },
    {
      icon: ShieldCheck,
      title: "Rigorous Site Safety & Logistics",
      desc: "Certified HSE officers and procurement managers ensure zero-incident site environments and uninterrupted supply chain flow."
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Meet Our Team of Visionaries & Master Builders"
        eyebrow="Our People &amp; Expertise"
        lead="Discover the licensed civil engineers, lead interior space planners, seasoned project managers, and logistics coordinators behind Eclectic Seals Int'l."
        breadcrumb="Team"
        image="/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-02.jpeg"
        buttons={[
          { label: "Request Consultation", url: "/request-quote", style: "primary" },
          { label: "Our Story & Values", url: "/about", style: "outline" }
        ]}
      />

      {/* Multidisciplinary Collaboration Introduction */}
      <section className="py-20 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Unified Professionalism
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              How Our Multidisciplinary Team Works Together
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              At Eclectic Seals Int'l, we believe that world-class architecture and construction demand seamless alignment across engineering, procurement, spatial planning, and safety. Rather than treating each discipline as a disconnected vendor, our in-house leaders collaborate from preliminary concept sketches through to turnkey handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {multidisciplinaryPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-3 text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Member Profiles Grid */}
      <section className="py-24 bg-[#F1F3F5] dark:bg-[#111827] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Leadership &amp; Key Personnel
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Executive Profiles &amp; Technical Leads
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
              Select &ldquo;View Profile&rdquo; on any team member to view their complete executive biography, credentials, and achievements.
            </p>
          </div>

          {/* 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#162032] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Careful Cropping */}
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

                {/* Profile Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {member.experience && (
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                        {member.experience}
                      </div>
                    )}
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {/* Expertise Highlights */}
                    {member.expertise && (
                      <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                          Core Focus:
                        </span>
                        {member.expertise.slice(0, 2).map((exp, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F5810D] shrink-0" />
                            <span className="line-clamp-1">{exp}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F5810D] hover:text-[#c9670a] transition-colors"
                    >
                      View Profile &amp; Bio <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] text-slate-400">
                      {member.qualifications ? `${member.qualifications.length} Credentials` : ''}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Commitment CTA */}
      <section className="py-20 bg-[#0F172A] text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
            <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
            Let's Collaborate
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Partner With Abuja's Dedicated Construction &amp; Design Team
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            From preliminary architectural space planning to large-scale civil works and structural renovations, our senior team is ready to scope your vision.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/request-quote"
              className="px-8 py-3.5 rounded-full text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors inline-flex items-center gap-2"
            >
              Request a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3.5 rounded-full text-sm font-semibold border border-white/20 text-white hover:border-[#F5810D] hover:text-[#F5810D] transition-colors"
            >
              Explore Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
};

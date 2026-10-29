import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, Award, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { TeamMember } from '../../types';

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (member) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-modal-name"
    >
      <div
        className="relative bg-white dark:bg-[#111827] text-slate-900 dark:text-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-[#F5810D] hover:text-slate-950 flex items-center justify-center transition-colors z-10"
          aria-label="Close profile details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Portrait Column */}
          <div className="md:col-span-5 flex flex-col items-center text-center">
            <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden shadow-xl border-2 border-[#F5810D] relative mb-4">
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover ${member.imagePosition || 'object-top'}`}
              />
            </div>
            <h3 id="team-modal-name" className="font-display text-xl sm:text-2xl font-bold tracking-tight">
              {member.name}
            </h3>
            <div className="text-xs font-semibold text-[#F5810D] mt-1 mb-2 tracking-wide uppercase">
              {member.role}
            </div>
            {member.experience && (
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {member.experience}
              </span>
            )}
          </div>

          {/* Biography Details Column */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-2">
                Executive Biography
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line font-light">
                {member.fullBio || member.bio}
              </p>
            </div>

            {/* Areas of Expertise */}
            {member.expertise && member.expertise.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#F5810D]" /> Areas of Expertise
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {member.expertise.map((exp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-orange-500/15 text-[#F5810D] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Qualifications */}
            {member.qualifications && member.qualifications.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#F5810D]" /> Qualifications &amp; Credentials
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  {member.qualifications.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5810D] mt-1.5 shrink-0" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Achievements */}
            {member.achievements && member.achievements.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#F5810D]" /> Notable Career Milestones
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  {member.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
          <Link
            to="/request-quote"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors"
          >
            Consult With Our Leadership Team <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};

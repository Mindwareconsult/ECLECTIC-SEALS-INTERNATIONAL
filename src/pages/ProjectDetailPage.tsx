import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { PROJECTS_DATA } from '../data/siteData';
import { MapPin, Briefcase, Camera, ArrowRight, ArrowLeft } from 'lucide-react';
import { Lightbox } from '../components/common/Lightbox';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS_DATA.find(p => p.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen">
      <PageHero
        title={project.title}
        eyebrow={project.clientType}
        lead={project.summary}
        breadcrumb={`Projects / ${project.title}`}
        image={project.image}
        buttons={[
          { label: "Discuss Your Project", url: "/request-quote", style: "primary" },
          { label: "View All Projects", url: "/projects", style: "outline" }
        ]}
      />

      {/* Project Details Split */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Main Image */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border border-slate-200 dark:border-slate-800 cursor-pointer group relative"
              onClick={() => {
                setActivePhotoIndex(0);
                setLightboxOpen(true);
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider">
                Click to Expand Fullscreen
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D]">
                <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
                Project Details
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                {project.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.summary}
              </p>

              {/* Spotlight specs */}
              <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-[#162032] border border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F5810D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block">Location</span>
                    <strong className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{project.location}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-[#F5810D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block">Scope</span>
                    <strong className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{project.scope}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 text-[#F5810D] flex items-center justify-center font-bold text-sm shrink-0">🏛</span>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block">Client Type</span>
                    <strong className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{project.clientType}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-[#F5810D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider block">Gallery</span>
                    <strong className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{project.gallery.length} High-Res Photos</strong>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              {project.keyHighlights && project.keyHighlights.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Key Engineering & Design Highlights</h4>
                  <ul className="space-y-2">
                    {project.keyHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5810D] shrink-0 mt-1.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Services Provided */}
              {project.servicesProvided && project.servicesProvided.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Scope of Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.servicesProvided.map((s, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setActivePhotoIndex(0);
                    setLightboxOpen(true);
                  }}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-colors inline-flex items-center gap-2"
                >
                  <Camera className="w-4 h-4" /> View Full Gallery ({project.gallery.length})
                </button>
                <Link
                  to="/request-quote"
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors inline-flex items-center gap-2"
                >
                  Discuss Similar Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section (If Available) */}
      {project.beforeImage && project.afterImage && (
        <section className="py-20 bg-slate-100 dark:bg-[#0F172A] text-slate-900 dark:text-white border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
                <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
                Renovation Proof
              </div>
              <h3 className="font-display text-3xl font-bold tracking-tight">
                Before &amp; After Transformation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                Documenting the complete architectural evolution from original state to dignitary-standard execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl border border-slate-200 dark:border-slate-800 bg-black">
                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/80 text-white text-xs font-bold uppercase tracking-wider rounded-md border border-white/20">
                  Before Renovation
                </span>
                <img
                  src={project.beforeImage}
                  alt={`${project.title} before renovation`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl border border-slate-200 dark:border-slate-800 bg-black">
                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#F5810D] text-slate-950 text-xs font-bold uppercase tracking-wider rounded-md shadow-md">
                  After Completion
                </span>
                <img
                  src={project.afterImage}
                  alt={`${project.title} after completion`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Photos Gallery */}
      <section className="py-24 bg-[#F1F3F5] dark:bg-[#111827] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Complete Project Gallery
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              All {project.gallery.length} Authentic Photographs
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Click any image to view in fullscreen high-resolution lightbox with zoom and navigation controls.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActivePhotoIndex(idx);
                  setLightboxOpen(true);
                }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md border border-slate-200 dark:border-slate-800 bg-slate-950"
              >
                <img
                  src={img}
                  alt={`${project.title} photograph ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs font-bold uppercase tracking-wider p-4 text-center">
                  <Camera className="w-6 h-6 mb-2 text-[#F5810D]" />
                  <span>Enlarge Photo ({idx + 1} of {project.gallery.length})</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[#F5810D] hover:text-[#F5810D] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects Carousel / Grid */}
      <section className="py-20 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-2">
                <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
                More From Our Portfolio
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">Related Projects</h3>
            </div>
            <Link to="/projects" className="text-xs sm:text-sm font-bold text-[#F5810D] hover:underline inline-flex items-center gap-1">
              View All 11 Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS_DATA.filter(p => p.id !== project.id).slice(0, 3).map((rel) => (
              <Link
                key={rel.id}
                to={`/projects/${rel.id}`}
                className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#F8F9FA] dark:bg-[#162032] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F172A]/90 backdrop-blur-sm border border-white/10 text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {rel.clientType}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-[#F5810D] font-semibold mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{rel.location}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-[#F5810D] transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <span className="text-xs font-semibold text-slate-500">
                    {rel.gallery.length} Verified Photographs
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={project.gallery}
        currentIndex={activePhotoIndex}
        onSelectIndex={setActivePhotoIndex}
        title={`${project.title} — ${project.location}`}
      />
    </div>
  );
};

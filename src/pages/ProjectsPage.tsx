import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { PROJECTS_DATA } from '../data/siteData';
import { MapPin, ArrowRight, Camera, Building, Home, Briefcase } from 'lucide-react';
import { Lightbox } from '../components/common/Lightbox';

export const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState('');

  const categories = [
    { slug: 'all', name: 'All Projects' },
    { slug: 'renovation', name: 'Renovation & Diplomatic' },
    { slug: 'interior-design', name: 'Interior & Millwork' },
    { slug: 'construction', name: 'Civil & Construction' },
    { slug: 'landscaping', name: 'Landscaping & Grounds' },
    { slug: 'paint', name: 'Coatings & Paint' }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedFilter);

  const spotlights = [
    {
      id: "liberia-embassy-renovation",
      title: "Renovation of The Republic of Liberia Embassy",
      summary: "A complete historic renovation of the Republic of Liberia Embassy in Central Area, Abuja, transforming aging infrastructure into a dignitary-grade, contemporary diplomatic mission.",
      location: "Central Area, Abuja",
      scope: "Full Renovation & Diplomatic Upgrade",
      clientType: "Diplomatic Mission",
      beforeImg: "/assets/projects/liberia-embassy/before-renovation.jpg",
      afterImg: "/assets/projects/liberia-embassy/after-renovation.jpg",
      gallery: [
        "/assets/projects/liberia-embassy/after-renovation.jpg",
        "/assets/projects/liberia-embassy/before-renovation.jpg"
      ]
    },
    {
      id: "chinese-cultural-center-renovation",
      title: "Renovation of Chinese Cultural Center",
      summary: "A full architectural renovation of the Chinese Cultural Center in Wuse 2, Abuja, modernizing ceremonial halls, exhibition spaces, and diplomatic gathering rooms.",
      location: "Wuse 2, Abuja",
      scope: "Full Renovation & Cultural Space Modernization",
      clientType: "Cultural & Diplomatic Institution",
      beforeImg: "/assets/projects/chinese-cultural-center/chinese-cultural-center-01.jpeg",
      afterImg: "/assets/projects/chinese-cultural-center/renovation-hero.jpg",
      gallery: [
        "/assets/projects/chinese-cultural-center/renovation-hero.jpg",
        "/assets/projects/chinese-cultural-center/chinese-cultural-center-01.jpeg",
        "/assets/projects/chinese-cultural-center/chinese-cultural-center-02.jpeg",
        "/assets/projects/chinese-cultural-center/chinese-cultural-center-03.jpeg",
        "/assets/projects/chinese-cultural-center/chinese-cultural-center-04.jpeg",
        "/assets/projects/chinese-cultural-center/chinese-cultural-center-05.jpeg",
        "/assets/projects/chinese-cultural-center/chinese-cultural-center-06.jpeg"
      ]
    }
  ];

  const handleOpenGallery = (title: string, images: string[]) => {
    setLightboxTitle(title);
    setLightboxImages(images);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Every Project Tells A Story Of Excellence"
        eyebrow="Our Authentic Portfolio"
        lead="Explore a verified showcase of completed diplomatic chancelleries, civil infrastructure, luxury residential interiors, custom millwork, and grounds engineering delivered across Abuja."
        breadcrumb="Projects"
        image="/assets/projects/chinese-cultural-center/renovation-hero.jpg"
        buttons={[
          { label: "View Services", url: "/services", style: "primary" },
          { label: "Request Consultation", url: "/request-quote", style: "outline" }
        ]}
      />

      {/* Projects Grid Section */}
      <section className="py-20 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedFilter(cat.slug)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  selectedFilter === cat.slug
                    ? 'bg-[#F5810D] text-slate-950 shadow-md shadow-orange-500/25'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#F8F9FA] dark:bg-[#162032] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                  <button
                    onClick={() => handleOpenGallery(project.title, project.gallery)}
                    className="absolute bottom-3 right-3 bg-black/60 hover:bg-[#F5810D] hover:text-slate-950 text-white p-2 rounded-lg backdrop-blur-sm transition-colors"
                    aria-label={`View photos of ${project.title}`}
                    title="View Photos"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
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

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#F5810D] transition-colors inline-flex items-center gap-1"
                    >
                      Case Study <ArrowRight className="w-3 h-3" />
                    </Link>
                    <button
                      onClick={() => handleOpenGallery(project.title, project.gallery)}
                      className="text-xs font-medium text-slate-500 hover:text-[#F5810D] transition-colors"
                    >
                      {project.gallery.length} Photos
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* 2 Project Spotlights (Before / After) from archive-project.php */}
      {spotlights.map((spotlight, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={idx}
            className={`py-24 ${isEven ? 'bg-[#F1F3F5] dark:bg-[#111827]' : 'bg-white dark:bg-[#0B1120]'} text-slate-900 dark:text-white`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
                  <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
                  Project Spotlight
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                  {spotlight.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                  {spotlight.summary}
                </p>
              </div>

              {/* Before & After Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-lg border border-slate-200 dark:border-slate-800">
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/75 text-white text-xs font-bold uppercase tracking-wider rounded-md">
                    Before
                  </span>
                  <img
                    src={spotlight.beforeImg}
                    alt={`${spotlight.title} before renovation`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-lg border border-slate-200 dark:border-slate-800">
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#F5810D] text-slate-950 text-xs font-bold uppercase tracking-wider rounded-md">
                    After
                  </span>
                  <img
                    src={spotlight.afterImg}
                    alt={`${spotlight.title} after renovation`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Spotlight Metadata Bar */}
              <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white dark:bg-[#162032] border border-slate-200 dark:border-slate-800 shadow-sm mb-10">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Location</span>
                  <strong className="text-sm font-semibold">{spotlight.location}</strong>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Scope</span>
                  <strong className="text-sm font-semibold">{spotlight.scope}</strong>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Client Type</span>
                  <strong className="text-sm font-semibold">{spotlight.clientType}</strong>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block">Gallery</span>
                  <strong className="text-sm font-semibold">{spotlight.gallery.length} Photos</strong>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to={`/projects/${spotlight.id}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-colors"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => handleOpenGallery(spotlight.title, spotlight.gallery)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors"
                >
                  View Full Gallery ({spotlight.gallery.length} Photos) <Camera className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Quote */}
      <section className="py-20 bg-[#0F172A] text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Let's Create Your Next Landmark Project</h2>
          <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">Whatever the scale, our engineering and design team is ready to scope it with you.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/request-quote" className="px-7 py-3.5 rounded-full text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors">
              Request Consultation <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onSelectIndex={setLightboxIndex}
        title={lightboxTitle}
      />
    </div>
  );
};

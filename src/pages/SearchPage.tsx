import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SERVICES_DATA, PROJECTS_DATA, BLOG_POSTS, FAQS_DATA } from '../data/siteData';
import { Search, ArrowRight } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [inputVal, setInputVal] = useState(query);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: inputVal });
  };

  const matchedServices = query
    ? SERVICES_DATA.filter(s => s.title.toLowerCase().includes(query.toLowerCase()) || s.shortDesc.toLowerCase().includes(query.toLowerCase()))
    : [];

  const matchedProjects = query
    ? PROJECTS_DATA.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.summary.toLowerCase().includes(query.toLowerCase()) || p.location.toLowerCase().includes(query.toLowerCase()))
    : [];

  const matchedPosts = query
    ? BLOG_POSTS.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.excerpt.toLowerCase().includes(query.toLowerCase()))
    : [];

  const totalResults = matchedServices.length + matchedProjects.length + matchedPosts.length;

  return (
    <div className="min-h-screen">
      <PageHero
        title={query ? `Results For "${query}"` : "Search Our Services & Portfolio"}
        eyebrow="Search Results"
        lead="Discover architectural case studies, service specifications, and technical insights."
        breadcrumb="Search"
        minHeight="min-h-[360px]"
      />

      <section className="py-20 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearchSubmit} className="relative mb-12">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Search services, projects, paints, or articles..."
              className="w-full pl-12 pr-28 py-3.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#162032] text-sm focus:outline-none focus:border-[#F5810D]"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 rounded-full bg-[#F5810D] hover:bg-[#e07205] text-slate-950 font-bold text-xs"
            >
              Search
            </button>
          </form>

          {query && (
            <div className="mb-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Found {totalResults} result{totalResults === 1 ? '' : 's'} for &ldquo;{query}&rdquo;
            </div>
          )}

          {/* Results Sections */}
          {totalResults > 0 ? (
            <div className="space-y-10">
              {matchedServices.length > 0 && (
                <div>
                  <h3 className="font-display text-xl font-bold mb-4 text-[#F5810D]">Services</h3>
                  <div className="space-y-4">
                    {matchedServices.map(s => (
                      <div key={s.id} className="p-5 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                          <h4 className="font-display font-bold text-base mb-1">{s.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-1">{s.shortDesc}</p>
                        </div>
                        <Link to="/services" className="shrink-0 text-xs font-bold text-[#F5810D] flex items-center gap-1">
                          View Service <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedProjects.length > 0 && (
                <div>
                  <h3 className="font-display text-xl font-bold mb-4 text-[#F5810D]">Projects</h3>
                  <div className="space-y-4">
                    {matchedProjects.map(p => (
                      <div key={p.id} className="p-5 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                          <h4 className="font-display font-bold text-base mb-1">{p.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-1">{p.location} &bull; {p.summary}</p>
                        </div>
                        <Link to={`/projects/${p.id}`} className="shrink-0 text-xs font-bold text-[#F5810D] flex items-center gap-1">
                          View Project <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedPosts.length > 0 && (
                <div>
                  <h3 className="font-display text-xl font-bold mb-4 text-[#F5810D]">Blog Articles</h3>
                  <div className="space-y-4">
                    {matchedPosts.map(b => (
                      <div key={b.id} className="p-5 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                          <h4 className="font-display font-bold text-base mb-1">{b.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-1">{b.excerpt}</p>
                        </div>
                        <Link to={`/blog/${b.id}`} className="shrink-0 text-xs font-bold text-[#F5810D] flex items-center gap-1">
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : query ? (
            <div className="text-center py-16 bg-[#F8F9FA] dark:bg-[#162032] rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
              <h3 className="font-display text-2xl font-bold mb-2">No Results Found</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                Try searching for terms like "renovation", "interior", "paint", "commercial", or "pool".
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/services" className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#F5810D] text-slate-950">
                  View Services
                </Link>
                <Link to="/projects" className="px-6 py-2.5 rounded-full text-xs font-semibold border border-slate-300 dark:border-slate-700">
                  View Projects
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

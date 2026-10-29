import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { BLOG_POSTS } from '../data/siteData';
import { Search, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [newsName, setNewsName] = useState('');
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['all', 'Interior Design', 'Renovation', 'Paint Manufacturing'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCat = selectedCat === 'all' || post.category === selectedCat;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail) {
      setSubscribed(true);
      setNewsName('');
      setNewsEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Latest From Eclectic Seals Int'l"
        eyebrow="Updates &amp; Insights"
        lead="Project milestones, completed work, architectural techniques, and behind-the-scenes moments from our engineering and design team."
        breadcrumb="Blog"
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
        buttons={[
          { label: "Request a Quote", url: "/request-quote", style: "primary" },
          { label: "Contact Us", url: "/contact", style: "outline" }
        ]}
      />

      <section className="py-20 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar & Filter */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search updates and articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#162032] text-sm focus:outline-none focus:border-[#F5810D] transition-colors"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors capitalize ${
                    selectedCat === cat
                      ? 'bg-[#F5810D] text-slate-950'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Feed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#F8F9FA] dark:bg-[#162032] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F172A]/90 backdrop-blur-sm border border-white/10 text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-[#F5810D]" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-[#F5810D] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#F5810D] transition-colors pt-2 border-t border-slate-200 dark:border-slate-800"
                  >
                    Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              No updates match your search criteria.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscribe Form */}
      <section className="py-20 bg-[#F1F3F5] dark:bg-[#111827]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-[#162032] p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-slate-900 dark:text-white">Never Miss An Update</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
            Get project milestones, design trends, and company news from Eclectic Seals Int'l straight to your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={newsName}
                onChange={(e) => setNewsName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm focus:outline-none focus:border-[#F5810D]"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm focus:outline-none focus:border-[#F5810D]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#F5810D] hover:bg-[#e07205] text-slate-950 font-bold text-sm transition-colors shrink-0"
              >
                Subscribe
              </button>
            </div>
            {subscribed && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-500 pt-2 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thanks — you're on the list!</span>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

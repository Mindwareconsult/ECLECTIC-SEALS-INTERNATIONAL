import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { BLOG_POSTS } from '../data/siteData';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen">
      <PageHero
        title={post.title}
        eyebrow={post.category}
        lead={post.date}
        breadcrumb={`Blog / ${post.title}`}
        image={post.image}
        minHeight="min-h-[380px]"
      />

      <article className="py-20 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-10 aspect-[16/9] border border-slate-200 dark:border-slate-800">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#F5810D] mb-6 uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>Published {post.date}</span>
            <span>&bull;</span>
            <span>{post.category}</span>
          </div>

          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-base leading-relaxed space-y-6 whitespace-pre-line font-light">
            {post.content}
          </div>

          <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-[#F5810D] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back To All Updates
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors"
            >
              Start Your Project <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

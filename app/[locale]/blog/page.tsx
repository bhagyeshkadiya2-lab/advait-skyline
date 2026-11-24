import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { BLOG_POSTS } from '@/content/blog-posts';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/blog',
    customTitle: 'Real Estate Blog & Market Insights | Advait Skyline Naroli',
    customDescription:
      'Expert property guides, RERA compliance insights, home loan tips, and regional growth updates for homebuyers in Naroli, Bhilad, and Silvassa.',
  });
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Real Estate Blog', item: '/blog' },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span>Knowledge &amp; Market Insights</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            Real Estate <span className="text-gold-gradient">Blog &amp; Research</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-3xl leading-relaxed">
            Verified property guides, RERA legal insights, home loan checklists, and infrastructure growth analysis for buyers and investors in Naroli, Bhilad, Silvassa, and Dadra &amp; Nagar Haveli.
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/20 shadow-xs hover:border-[#D9A21B] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-sans text-[#7B4F2E] font-semibold">
                  <span className="px-2.5 py-0.5 rounded bg-[#EADFCB] uppercase tracking-wider text-[10px]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[#2A1F18]/60">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-display text-xl font-bold text-[#1E130C] group-hover:text-[#7B4F2E] transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}` as any}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#2A1F18]/75 font-sans leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#7B4F2E]/10 flex items-center justify-between">
                <div className="text-[11px] text-[#2A1F18]/60 font-sans flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}` as any}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#7B4F2E] group-hover:translate-x-0.5 transition-transform uppercase tracking-wider"
                >
                  <span>Read Article</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

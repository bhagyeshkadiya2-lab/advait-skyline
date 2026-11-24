import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Tag } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { BLOG_POSTS, BlogPost } from '@/content/blog-posts';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import LeadForm from '@/components/lead/LeadForm';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return createPageMetadata({ locale, path: '/blog' });
  }

  return createPageMetadata({
    locale,
    path: `/blog/${slug}`,
    customTitle: `${post.title} | Advait Skyline Blog`,
    customDescription: post.excerpt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Blog', item: '/blog' },
          { name: post.title, item: `/blog/${post.slug}` },
        ]}
      />

      {/* Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-sans text-[#F2D27A] hover:underline uppercase tracking-wider font-semibold"
          >
            <ArrowLeft size={13} />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex items-center gap-3 text-xs font-sans text-[#EADFCB]/70">
            <span className="px-2.5 py-0.5 rounded bg-[#271910] border border-[#D9A21B]/40 text-[#F2D27A] font-bold text-[10px] uppercase tracking-wider">
              {post.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
            {post.title}
          </h1>

          <div className="pt-2 flex items-center gap-3 text-xs font-sans text-[#EADFCB]/80">
            <div className="w-8 h-8 rounded-full bg-[#7B4F2E] flex items-center justify-center text-[#F2D27A] font-bold text-xs">
              DS
            </div>
            <div>
              <p className="font-semibold text-white">{post.author}</p>
              <p className="text-[11px] text-[#EADFCB]/60">Advait Skyline by Dhanasvi Infra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        <article className="prose prose-stone max-w-none text-sm sm:text-base font-sans text-[#2A1F18]/85 leading-relaxed space-y-6">
          <p className="font-medium text-base sm:text-lg text-[#1E130C] border-l-4 border-[#D9A21B] pl-4 italic bg-white p-4 rounded-r-xl border-y border-r border-[#7B4F2E]/10">
            {post.excerpt}
          </p>

          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Lead Form Box */}
        <section className="pt-8 border-t border-[#7B4F2E]/20">
          <div className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/25 shadow-sm space-y-4">
            <h3 className="font-display text-2xl font-bold text-[#1E130C]">
              Looking to Buy a Flat in Naroli or Near Silvassa?
            </h3>
            <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
              Advait Skyline offers 1 BHK (511 sq. ft.) and 2 BHK (573 sq. ft.) apartments with 39+ amenities on the Naroli–Silvassa main road, 200 meters from Naroli–Bhilad Checkpost.
            </p>
            <LeadForm />
          </div>
        </section>
      </div>
    </div>
  );
}

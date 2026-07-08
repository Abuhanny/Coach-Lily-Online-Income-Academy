import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/mockData';

export const metadata = { title: 'Blog | Coach Lily Online Income Academy' };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  return (
    <div className="section">
      <span className="eyebrow">Blog</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">Stories & guides.</h1>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group glass flex flex-col rounded-3xl p-6 transition-transform hover:-translate-y-1">
            <div className="mb-4 h-32 rounded-2xl bg-brand-gradient/20" />
            <div className="flex items-center gap-3 text-xs text-ink/50 dark:text-white/50">
              <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(p.date)}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {p.readTime}</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm text-ink/60 dark:text-white/60">{p.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-pink group-hover:gap-2 transition-all">
              Read post <ArrowRight size={15} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

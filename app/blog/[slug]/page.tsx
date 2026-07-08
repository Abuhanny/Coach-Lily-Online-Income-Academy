import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/mockData';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return { title: post ? `${post.title} | Coach Lily Academy Blog` : 'Post not found' };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="section max-w-3xl">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/60 hover:text-pink dark:text-white/60">
        <ArrowLeft size={15} /> Back to blog
      </Link>

      <h1 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">{post.title}</h1>

      <div className="mt-4 flex items-center gap-4 text-sm text-ink/50 dark:text-white/50">
        <span>{post.author}</span>
        <span className="flex items-center gap-1"><Calendar size={13} /> {formatDate(post.date)}</span>
        <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
      </div>

      <div className="mt-8 h-56 rounded-3xl bg-brand-gradient/20" />

      <div className="mt-8 space-y-5">
        {post.content.map((para, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-ink/75 dark:text-white/75">
            {para}
          </p>
        ))}
      </div>

      {otherPosts.length > 0 && (
        <div className="mt-16 border-t border-ink/10 pt-8 dark:border-white/10">
          <h3 className="font-display text-lg font-semibold">More from the blog</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {otherPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="glass rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
                <h4 className="font-display text-sm font-semibold leading-snug">{p.title}</h4>
                <p className="mt-1.5 text-xs text-ink/60 dark:text-white/60">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

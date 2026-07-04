export const metadata = { title: 'Blog | Coach Lily Online Income Academy' };

const posts = [
  { title: '5 Online Skills Anyone Can Learn in 7 Days', excerpt: 'A look at the fastest career paths to a first online income.' },
  { title: 'How Our Last Cohort Landed Their First Clients', excerpt: 'Real stories from the January cohort.' },
  { title: 'CV Mistakes That Cost You Remote Jobs', excerpt: 'What we tell every VIP student during CV review.' },
];

export default function BlogPage() {
  return (
    <div className="section">
      <span className="eyebrow">Blog</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">Stories & guides.</h1>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="glass rounded-3xl p-6">
            <div className="mb-4 h-32 rounded-2xl bg-brand-gradient/20" />
            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-ink/60 dark:text-white/60">{p.excerpt}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-xs text-ink/40 dark:text-white/40">
        Sample posts — connect a CMS or Firestore collection to publish real ones from the admin panel.
      </p>
    </div>
  );
}

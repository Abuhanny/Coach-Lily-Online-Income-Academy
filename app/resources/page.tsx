import { FileText, Search, Filter } from 'lucide-react';

export const metadata = { title: 'Resources | Coach Lily Online Income Academy' };

const sampleResources = [
  { title: 'VA Client Outreach Templates', type: 'PDF Manual', course: 'Virtual Assistant' },
  { title: 'Personal Branding Worksheet', type: 'Worksheet', course: 'Personal Branding' },
  { title: 'Cold Calling Script Pack', type: 'Template', course: 'Telemarketing' },
  { title: 'Figma Starter Kit', type: 'Template', course: 'UI/UX Design' },
];

export default function ResourcesPage() {
  return (
    <div className="section">
      <span className="eyebrow">Resource Library</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
        Manuals, templates, and worksheets for every course.
      </h1>
      <p className="mt-6 max-w-2xl text-ink/60 dark:text-white/60">
        A preview of the manuals and templates students get access to during the bootcamp.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <div className="glass flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-ink/50 dark:text-white/50">
          <Search size={15} /> Search resources&hellip;
        </div>
        <div className="glass flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-ink/50 dark:text-white/50">
          <Filter size={15} /> Filter by course
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {sampleResources.map((r) => (
          <div key={r.title} className="glass flex items-center gap-3 rounded-2xl p-5">
            <FileText className="text-pink" size={20} />
            <div>
              <p className="text-sm font-semibold">{r.title}</p>
              <p className="text-xs text-ink/50 dark:text-white/50">{r.type} &middot; {r.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

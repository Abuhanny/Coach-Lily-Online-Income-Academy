import CohortCard from '@/components/CohortCard';
import { cohorts } from '@/lib/mockData';

export const metadata = { title: 'Bootcamp | Coach Lily Online Income Academy' };

export default function BootcampPage() {
  return (
    <div className="section">
      <span className="eyebrow">The bootcamp</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
        Three cohorts a year. Seven days that change your direction.
      </h1>
      <p className="mt-6 max-w-2xl text-ink/60 dark:text-white/60">
        Every cohort runs live for 7 days &mdash; January, April, and August. Each day builds on
        the last, so you leave with a skill, a portfolio piece, and a 30-day action plan.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cohorts.map((c) => (
          <CohortCard key={c.id} cohort={c} />
        ))}
      </div>

      {/* Year timeline — a genuine sequence, so numbering earns its place here */}
      <div className="glass-strong mt-16 rounded-3xl p-8">
        <h2 className="font-display text-xl font-semibold">This year at a glance</h2>
        <div className="mt-8 grid grid-cols-12 gap-2">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => {
            const isCohort = [0, 3, 7].includes(i);
            return (
              <div key={m} className="flex flex-col items-center gap-2">
                <span className={`text-[10px] font-medium ${isCohort ? 'text-pink' : 'text-ink/40 dark:text-white/40'}`}>{m}</span>
                <span className={`h-2.5 w-2.5 rounded-full ${isCohort ? 'bg-brand-gradient ring-4 ring-pink/15' : 'bg-ink/10 dark:bg-white/15'}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

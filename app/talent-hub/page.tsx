import { Trophy, CheckCircle2 } from 'lucide-react';

export const metadata = { title: 'Talent Hub | Coach Lily Online Income Academy' };

const criteria = ['Attendance', 'Assignments', 'Participation', 'Professionalism', 'Final Score'];
const benefits = [
  'Exclusive mentoring with Coach Lily and David',
  'One-on-one career guidance',
  'Portfolio reviews from real practitioners',
  'Opportunity referrals to paid work',
  'Long-term support after the cohort ends',
];

export default function TalentHubPage() {
  return (
    <div className="section">
      <span className="eyebrow">Talent Hub</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
        Our top 5 graduates each cohort get more.
      </h1>
      <p className="mt-6 max-w-2xl text-ink/60 dark:text-white/60">
        At the end of every cohort, we select five standout students for continued, hands-on
        support as they build their online income.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="glass rounded-3xl p-7">
          <Trophy className="text-gold" size={22} />
          <h3 className="mt-4 font-display text-lg font-semibold">How the top 5 are selected</h3>
          <ul className="mt-4 space-y-2">
            {criteria.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm text-ink/70 dark:text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-pink" /> {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-3xl p-7">
          <CheckCircle2 className="text-pink" size={22} />
          <h3 className="mt-4 font-display text-lg font-semibold">What selected students get</h3>
          <ul className="mt-4 space-y-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-ink/70 dark:text-white/70">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

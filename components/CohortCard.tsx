import { Calendar, Users } from 'lucide-react';
import type { Cohort } from '@/lib/mockData';
import CountdownTimer from './CountdownTimer';

const statusStyles: Record<Cohort['status'], string> = {
  open: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'closing-soon': 'bg-gold/10 text-gold-deep',
  closed: 'bg-ink/10 text-ink/50 dark:bg-white/10 dark:text-white/50',
  upcoming: 'bg-pink/10 text-pink',
};

const statusLabel: Record<Cohort['status'], string> = {
  open: 'Registration Open',
  'closing-soon': 'Closing Soon',
  closed: 'Closed',
  upcoming: 'Opening Soon',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function CohortCard({ cohort }: { cohort: Cohort }) {
  const seatsLeft = cohort.seatsTotal - cohort.seatsTaken;
  const pctFull = Math.round((cohort.seatsTaken / cohort.seatsTotal) * 100);

  return (
    <div className="glass-strong flex flex-col justify-between rounded-3xl p-7">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl font-semibold">{cohort.name}</h3>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[cohort.status]}`}>
            {statusLabel[cohort.status]}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-ink/60 dark:text-white/60">
          <Calendar size={15} />
          {formatDate(cohort.startDate)} &ndash; {formatDate(cohort.endDate)}
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-ink/60 dark:text-white/60">
          <Users size={15} />
          {cohort.status === 'closed' ? 'Cohort full' : `${seatsLeft} seats left of ${cohort.seatsTotal}`}
        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-white/10">
          <div className="h-full rounded-full bg-brand-gradient" style={{ width: `${pctFull}%` }} />
        </div>

        {cohort.status !== 'closed' && (
          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink/40 dark:text-white/40">
              Starts in
            </p>
            <CountdownTimer target={cohort.startDate} />
          </div>
        )}
      </div>

      <button
        disabled={cohort.status === 'closed'}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-40"
      >
        {cohort.status === 'closed' ? 'Cohort Closed' : 'Join This Cohort'}
      </button>
    </div>
  );
}

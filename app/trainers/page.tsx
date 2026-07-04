import TrainerCard from '@/components/TrainerCard';
import { trainers } from '@/lib/mockData';

export const metadata = { title: 'Trainers | Coach Lily Online Income Academy' };

export default function TrainersPage() {
  return (
    <div className="section">
      <span className="eyebrow">Meet your trainers</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
        Taught by people who&rsquo;ve actually done it.
      </h1>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {trainers.map((t) => (
          <TrainerCard key={t.name} trainer={t} />
        ))}
      </div>
    </div>
  );
}

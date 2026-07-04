import TeamCard from '@/components/TeamCard';
import { team } from '@/lib/mockData';

export const metadata = { title: 'Our Team | Coach Lily Online Income Academy' };

export default function TeamPage() {
  return (
    <div className="section">
      <span className="eyebrow">Behind the academy</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">Our team.</h1>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {team.map((m) => (
          <TeamCard key={m.name} member={m} />
        ))}
      </div>
    </div>
  );
}

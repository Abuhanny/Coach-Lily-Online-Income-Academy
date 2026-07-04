import { Linkedin, Mail } from 'lucide-react';
import type { Trainer } from '@/lib/mockData';

export default function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <div className="glass-strong overflow-hidden rounded-3xl">
      <div className="flex h-56 items-center justify-center bg-brand-gradient font-display text-5xl font-bold text-white">
        {trainer.name.split(' ').map((n) => n[0]).join('')}
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold">{trainer.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-pink">{trainer.specialization}</p>
        <p className="mt-3 text-sm text-ink/60 dark:text-white/60">{trainer.bio}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {trainer.skills.map((s) => (
            <span key={s} className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium dark:bg-white/10">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <a href={trainer.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2 !text-xs">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href={`mailto:${trainer.email}`} className="btn-ghost !px-4 !py-2 !text-xs">
            <Mail size={14} /> Email
          </a>
        </div>
      </div>
    </div>
  );
}

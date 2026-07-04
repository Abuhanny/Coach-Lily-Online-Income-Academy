'use client';

import { useEffect, useState } from 'react';

function getTimeLeft(target: string) {
  const diff = +new Date(target) - +new Date();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ target }: { target: string }) {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft>>(null);

  useEffect(() => {
    setTime(getTimeLeft(target));
    const interval = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!time) {
    return <p className="text-sm font-semibold text-pink">Cohort has started</p>;
  }

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hrs', value: time.hours },
    { label: 'Min', value: time.minutes },
    { label: 'Sec', value: time.seconds },
  ];

  return (
    <div className="flex gap-2">
      {units.map((u) => (
        <div key={u.label} className="glass flex w-14 flex-col items-center rounded-xl py-2">
          <span className="font-display text-lg font-semibold tabular-nums">{String(u.value).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase tracking-wider text-ink/50 dark:text-white/50">{u.label}</span>
        </div>
      ))}
    </div>
  );
}

'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'How long is the bootcamp?', a: 'Each cohort runs for 7 live days, three times a year: January, April, and August.' },
  { q: 'Do I need experience to join?', a: 'No. The bootcamp is designed for beginners exploring which online career path fits them.' },
  { q: 'What do I get after the bootcamp?', a: 'A certificate, training manuals for your track, and continued community access.' },
  { q: 'How is the Talent Hub top 5 selected?', a: 'Based on attendance, assignments, participation, professionalism, and final score.' },
  { q: 'Can I get a refund?', a: 'Refund policy details are shared during registration and depend on your chosen pricing tier.' },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="section max-w-3xl">
      <span className="eyebrow">FAQ</span>
      <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Frequently asked questions.</h1>

      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="glass overflow-hidden rounded-2xl">
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {f.q}
              <ChevronDown size={16} className={`transition-transform ${open === i ? 'rotate-180 text-pink' : ''}`} />
            </button>
            {open === i && <p className="px-5 pb-4 text-sm text-ink/60 dark:text-white/60">{f.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

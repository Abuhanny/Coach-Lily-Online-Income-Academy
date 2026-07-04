'use client';

import { useState } from 'react';
import { Mail, Phone, Clock, MessageCircle, Check } from 'lucide-react';
import { pricing, socialLinks } from '@/lib/mockData';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="section">
      <span className="eyebrow">Get in touch</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
        Questions before you join? Ask us anything.
      </h1>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 text-pink" size={18} />
            <div>
              <h4 className="text-sm font-semibold">Email</h4>
              <p className="text-sm text-ink/60 dark:text-white/60">{socialLinks.email}</p>
            </div>
          </div>
          <div className="mt-5 flex items-start gap-3">
            <Phone className="mt-0.5 text-pink" size={18} />
            <div>
              <h4 className="text-sm font-semibold">Phone</h4>
              <p className="text-sm text-ink/60 dark:text-white/60">{socialLinks.phone}</p>
            </div>
          </div>
          <div className="mt-5 flex items-start gap-3">
            <Clock className="mt-0.5 text-pink" size={18} />
            <div>
              <h4 className="text-sm font-semibold">Office hours</h4>
              <p className="text-sm text-ink/60 dark:text-white/60">Mon &ndash; Fri, 9am &ndash; 5pm WAT</p>
            </div>
          </div>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-5 py-3 text-sm font-semibold text-[#128C4A] dark:text-[#25D366]"
          >
            <MessageCircle size={16} /> Chat with us on WhatsApp
          </a>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="glass-strong rounded-3xl p-7"
        >
          {sent && (
            <div className="mb-5 flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-600">
              <Check size={16} /> Message sent — we&rsquo;ll reply within 24 hours.
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-ink/50 dark:text-white/50">Full name</label>
              <input required className="mt-1.5 w-full rounded-xl border border-ink/10 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-pink dark:border-white/15" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/50 dark:text-white/50">Email</label>
              <input required type="email" className="mt-1.5 w-full rounded-xl border border-ink/10 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-pink dark:border-white/15" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs font-semibold text-ink/50 dark:text-white/50">Message</label>
            <textarea required rows={4} className="mt-1.5 w-full rounded-xl border border-ink/10 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-pink dark:border-white/15" />
          </div>
          <button type="submit" className="btn-primary mt-5 w-full">Send Message</button>
          <p className="mt-3 text-center text-xs text-ink/40 dark:text-white/40">
            Demo form — connect to an email service (e.g. Formspree, EmailJS) to receive real submissions.
          </p>
        </form>
      </div>

      {/* Pricing */}
      <div className="mt-20">
        <span className="eyebrow">Pricing</span>
        <h2 className="mt-3 font-display text-3xl font-semibold">Simple pricing, one bootcamp.</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {pricing.map((tier) => (
            <div
              key={tier.tier}
              className={`rounded-3xl p-7 ${tier.highlight ? 'bg-brand-gradient text-white shadow-xl' : 'glass'}`}
            >
              <h3 className="font-display text-lg font-semibold">{tier.tier}</h3>
              <p className="mt-2 font-display text-3xl font-bold">{tier.price}</p>
              <ul className="mt-5 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${tier.highlight ? 'text-white/90' : 'text-ink/70 dark:text-white/70'}`}>
                    <Check size={15} className="mt-0.5 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold ${tier.highlight ? 'bg-white text-pink-deep' : 'btn-primary'}`}>
                Choose {tier.tier}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

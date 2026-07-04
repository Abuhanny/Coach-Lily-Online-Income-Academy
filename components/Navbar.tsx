'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { socialLinks } from '@/lib/mockData';

const links = [
  { href: '/about', label: 'About' },
  { href: '/bootcamp', label: 'Bootcamp' },
  { href: '/courses', label: 'Courses' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/team', label: 'Team' },
  { href: '/talent-hub', label: 'Talent Hub' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="glass mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full px-5 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/images/logo.png"
              alt="Coach Lily Online Income Academy Logo"
              fill
              priority
              className="object-cover"
            />
          </div>

          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            Coach Lily <span className="text-pink">Online Income Academy</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.slice(0, 6).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-pink/10 hover:text-pink dark:text-white/70"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-[#25D366]/10 px-3 py-2 text-xs font-semibold text-[#128C4A] dark:text-[#25D366] sm:flex"
          >
            <MessageCircle size={14} /> Community
          </a>

          <ThemeToggle />

          <button
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 dark:border-white/15 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="glass-strong ml-auto flex h-full w-72 flex-col gap-1 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close menu"
                className="mb-4 self-end"
                onClick={() => setOpen(false)}
              >
                <X size={22} />
              </button>

              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-pink/10 hover:text-pink"
                >
                  {l.label}
                </Link>
              ))}

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2 rounded-xl bg-[#25D366]/10 px-3 py-3 text-sm font-semibold text-[#128C4A]"
              >
                <MessageCircle size={16} /> WhatsApp Community
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
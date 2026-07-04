import Link from 'next/link';
import { Instagram, Facebook, Youtube, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { socialLinks } from '@/lib/mockData';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-ink/10 dark:border-white/10">
      <div className="section grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-bold text-white">
              CL
            </span>
            <span className="font-display text-sm font-semibold">Coach Lily Academy</span>
          </div>
          <p className="mt-4 text-sm text-ink/60 dark:text-white/60">Discover. Learn. Earn.</p>
          <p className="mt-2 text-xs text-ink/40 dark:text-white/40">
            &copy; {new Date().getFullYear()} Coach Lily Online Income Academy. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink/50 dark:text-white/50">Academy</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-pink">About</Link></li>
            <li><Link href="/bootcamp" className="hover:text-pink">Bootcamp</Link></li>
            <li><Link href="/courses" className="hover:text-pink">Courses</Link></li>
            <li><Link href="/trainers" className="hover:text-pink">Trainers</Link></li>
            <li><Link href="/talent-hub" className="hover:text-pink">Talent Hub</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink/50 dark:text-white/50">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/resources" className="hover:text-pink">Resource Library</Link></li>
            <li><Link href="/blog" className="hover:text-pink">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-pink">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-pink">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink/50 dark:text-white/50">Stay connected</h4>
          <div className="flex flex-wrap gap-2">
            <a href={socialLinks.whatsapp} aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 hover:bg-pink/10 hover:text-pink dark:bg-white/10">
              <MessageCircle size={16} />
            </a>
            <a href={socialLinks.instagram} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 hover:bg-pink/10 hover:text-pink dark:bg-white/10">
              <Instagram size={16} />
            </a>
            <a href={socialLinks.facebook} aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 hover:bg-pink/10 hover:text-pink dark:bg-white/10">
              <Facebook size={16} />
            </a>
            <a href={socialLinks.youtube} aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 hover:bg-pink/10 hover:text-pink dark:bg-white/10">
              <Youtube size={16} />
            </a>
            <a href={socialLinks.linkedin} aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 hover:bg-pink/10 hover:text-pink dark:bg-white/10">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${socialLinks.email}`} aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 hover:bg-pink/10 hover:text-pink dark:bg-white/10">
              <Mail size={16} />
            </a>
          </div>
          <p className="mt-4 text-xs text-ink/50 dark:text-white/50">{socialLinks.email}</p>
          <p className="text-xs text-ink/50 dark:text-white/50">{socialLinks.phone}</p>
        </div>
      </div>
    </footer>
  );
}

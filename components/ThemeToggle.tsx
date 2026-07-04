'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: only render the real icon after mount.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex h-9 w-16 items-center rounded-full border border-ink/10 bg-ink/5 px-1 transition-colors dark:border-white/15 dark:bg-white/10"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-brand-gradient text-white shadow-md transition-transform duration-300 ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {mounted && (isDark ? <Moon size={14} /> : <Sun size={14} />)}
      </span>
    </button>
  );
}

import * as Icons from 'lucide-react';
import Link from 'next/link';
import type { Course } from '@/lib/mockData';

export default function CourseCard({ course }: { course: Course }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[course.icon] ?? Icons.BookOpen;

  return (
    <div className="group glass flex flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{course.title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink/60 dark:text-white/60">{course.overview}</p>
      <Link
        href={`/courses/${course.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-pink group-hover:gap-2 transition-all"
      >
        View course <Icons.ArrowRight size={15} />
      </Link>
    </div>
  );
}

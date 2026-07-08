import { notFound } from 'next/navigation';
import Link from 'next/link';
import * as Icons from 'lucide-react';
import { courses } from '@/lib/mockData';

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  return { title: course ? `${course.title} | Coach Lily Academy` : 'Course not found' };
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return notFound();

  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[course.icon] ?? Icons.BookOpen;

  const blocks: { title: string; items: string[] }[] = [
    { title: 'Career Opportunities', items: course.careerOpportunities },
    { title: 'Tools Used', items: course.tools },
    { title: 'Learning Outcomes', items: course.outcomes },
    { title: 'Assignments', items: course.assignments },
  ];

  return (
    <div className="section">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white">
        <Icon size={26} />
      </div>
      <h1 className="mt-5 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">{course.title}</h1>
      <p className="mt-4 max-w-2xl text-ink/60 dark:text-white/60">{course.overview}</p>

      <Link href={`/contact?course=${encodeURIComponent(course.title)}`} className="btn-primary mt-7 inline-flex">
        Enroll Now
      </Link>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {blocks.map((b) => (
          <div key={b.title} className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-semibold">{b.title}</h3>
            <ul className="mt-4 space-y-2">
              {b.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink/70 dark:text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

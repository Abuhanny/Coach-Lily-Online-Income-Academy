import CourseCard from '@/components/CourseCard';
import { courses } from '@/lib/mockData';

export const metadata = { title: 'Courses | Coach Lily Online Income Academy' };

export default function CoursesPage() {
  return (
    <div className="section">
      <span className="eyebrow">All career tracks</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
        Ten career tracks. One 7-day bootcamp.
      </h1>
      <p className="mt-6 max-w-2xl text-ink/60 dark:text-white/60">
        Every track includes an overview, career opportunities, the tools you&rsquo;ll use,
        learning outcomes, and hands-on assignments.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </div>
  );
}

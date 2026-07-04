import { Target, Heart, TrendingUp } from 'lucide-react';

export const metadata = { title: 'About | Coach Lily Online Income Academy' };

export default function AboutPage() {
  return (
    <div className="section">
      <span className="eyebrow">About the academy</span>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
        We help beginners turn confusion into a clear online career.
      </h1>
      <p className="mt-6 max-w-2xl text-ink/60 dark:text-white/60">
        Coach Lily Online Income Academy was built for one problem: too many people want to earn
        online but don&rsquo;t know which path fits them, or how to start. We run focused, live
        7-day bootcamps three times a year that let students try real skills, get feedback from
        real trainers, and leave with a plan instead of a bookmark folder of &ldquo;maybe
        later.&rdquo;
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        <div className="glass rounded-3xl p-7">
          <Target className="text-pink" size={22} />
          <h3 className="mt-4 font-display text-lg font-semibold">Our mission</h3>
          <p className="mt-2 text-sm text-ink/60 dark:text-white/60">
            Give anyone, anywhere, a practical route into an online income &mdash; no prior
            experience required.
          </p>
        </div>
        <div className="glass rounded-3xl p-7">
          <Heart className="text-pink" size={22} />
          <h3 className="mt-4 font-display text-lg font-semibold">Our values</h3>
          <p className="mt-2 text-sm text-ink/60 dark:text-white/60">
            Practical over theoretical, honest over hype, and community over competition.
          </p>
        </div>
        <div className="glass rounded-3xl p-7">
          <TrendingUp className="text-pink" size={22} />
          <h3 className="mt-4 font-display text-lg font-semibold">Our track record</h3>
          <p className="mt-2 text-sm text-ink/60 dark:text-white/60">
            Three cohorts a year, ten career tracks, and a growing community of graduates working
            online.
          </p>
        </div>
      </div>
    </div>
  );
}

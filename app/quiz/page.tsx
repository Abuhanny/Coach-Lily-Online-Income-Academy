'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { quizQuestions, courses } from '@/lib/mockData';

export default function QuizPage() {
  const [step, setStep] = useState(0); // index into quizQuestions, or -1 for intro
  const [started, setStarted] = useState(false);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);

  const totalQuestions = quizQuestions.length;
  const progressPct = started ? Math.round((step / totalQuestions) * 100) : 0;

  function selectOption(weights: Record<string, number>) {
    setScores((prev) => {
      const next = { ...prev };
      Object.entries(weights).forEach(([slug, points]) => {
        next[slug] = (next[slug] || 0) + points;
      });
      return next;
    });

    if (step + 1 < totalQuestions) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setStep(0);
    setScores({});
    setStarted(false);
    setFinished(false);
  }

  // Work out the top-scoring course once the quiz is finished
  const sortedResults = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topSlug = sortedResults[0]?.[0];
  const topCourse = courses.find((c) => c.slug === topSlug);
  const runnerUp = courses.find((c) => c.slug === sortedResults[1]?.[0]);

  return (
    <div className="section flex min-h-[70vh] flex-col items-center">
      <div className="w-full max-w-xl">
        {/* ---------------- INTRO ---------------- */}
        {!started && !finished && (
          <div className="glass-strong rounded-3xl p-9 text-center">
            <Sparkles className="mx-auto text-pink" size={28} />
            <h1 className="mt-4 font-display text-3xl font-semibold">Find your career path</h1>
            <p className="mt-3 text-sm text-ink/60 dark:text-white/60">
              {totalQuestions} quick questions, about 2 minutes. Answer with your gut instinct —
              we&rsquo;ll match you to one of our 10 career tracks.
            </p>
            <button onClick={() => setStarted(true)} className="btn-primary mt-7">
              Start the quiz <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* ---------------- QUESTIONS ---------------- */}
        {started && !finished && (
          <div>
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-ink/50 dark:text-white/50">
                <span>Question {step + 1} of {totalQuestions}</span>
                <span>{progressPct}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-white/10">
                <div className="h-full rounded-full bg-brand-gradient transition-all duration-300" style={{ width: `${progressPct}%` }} />
              </div>
            </div>

            <div className="glass-strong rounded-3xl p-8">
              <h2 className="font-display text-xl font-semibold sm:text-2xl">
                {quizQuestions[step].question}
              </h2>
              <div className="mt-6 flex flex-col gap-3">
                {quizQuestions[step].options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => selectOption(opt.weights)}
                    className="rounded-2xl border border-ink/10 px-5 py-4 text-left text-sm font-medium transition-colors hover:border-pink hover:bg-pink/5 dark:border-white/15"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- RESULT ---------------- */}
        {finished && topCourse && (
          <div className="glass-strong rounded-3xl p-9 text-center">
            <span className="eyebrow">Your match</span>
            <h1 className="mt-4 font-display text-3xl font-semibold">{topCourse.title}</h1>
            <p className="mt-3 text-sm text-ink/60 dark:text-white/60">{topCourse.overview}</p>

            {runnerUp && (
              <p className="mt-4 text-xs text-ink/40 dark:text-white/40">
                Close second: <span className="font-medium text-ink/60 dark:text-white/60">{runnerUp.title}</span>
              </p>
            )}

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href={`/courses/${topCourse.slug}`} className="btn-primary">
                View {topCourse.title} <ArrowRight size={16} />
              </Link>
              <Link href="/bootcamp" className="btn-ghost">
                See cohort dates
              </Link>
            </div>

            <button
              onClick={restart}
              className="mx-auto mt-6 flex items-center gap-1.5 text-xs font-semibold text-ink/50 hover:text-pink dark:text-white/50"
            >
              <RotateCcw size={13} /> Retake the quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

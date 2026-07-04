'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Calendar, Award } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import CohortCard from '@/components/CohortCard';
import { courses, cohorts } from '@/lib/mockData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function HomePage() {
  const nextOpenCohort = cohorts.find((c) => c.status === 'open') ?? cohorts[0];

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-96 w-96 animate-float rounded-full bg-pink/20 blur-3xl" />
          <div className="absolute -right-10 top-40 h-80 w-80 animate-float rounded-full bg-gold/20 blur-3xl" style={{ animationDelay: '2s' }} />
        </div>

        <div className="section pb-16 pt-16 text-center sm:pt-24">
          <motion.span initial="hidden" animate="visible" variants={fadeUp} className="eyebrow">
            <Sparkles size={13} /> Cohort {nextOpenCohort.month} &mdash; {nextOpenCohort.status === 'open' ? 'seats open now' : 'opening soon'}
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
          >
            Confused about where to <span className="text-gradient">start your online career?</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-6 max-w-xl text-base text-ink/60 dark:text-white/60 sm:text-lg"
          >
            Explore multiple online career paths in just 7 days, discover what fits you best, build
            practical skills, and leave with a clear action plan.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/bootcamp" className="btn-primary">
              Join Bootcamp <ArrowRight size={16} />
            </Link>
            <Link href="/courses" className="btn-ghost">
              Explore Courses
            </Link>
            <Link href="/quiz" className="btn-ghost">
              Take Career Quiz
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------------- TRUST STRIP ---------------- */}
      <section className="section !py-10">
        <div className="glass grid grid-cols-2 gap-6 rounded-3xl p-8 sm:grid-cols-4">
          {[
            { icon: Calendar, label: '3 live cohorts / year' },
            { icon: Users, label: '2 lead trainers' },
            { icon: Award, label: 'Certificate on completion' },
            { icon: Sparkles, label: '10 career tracks' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center">
              <item.icon className="text-pink" size={22} />
              <span className="text-xs font-medium text-ink/60 dark:text-white/60 sm:text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- COURSES PREVIEW ---------------- */}
      <section className="section">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Career paths</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Ten ways to build an income online.</h2>
          </div>
          <Link href="/courses" className="btn-ghost">
            View all courses <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>

      {/* ---------------- BOOTCAMP PREVIEW ---------------- */}
      <section className="section">
        <div className="mb-10">
          <span className="eyebrow">The bootcamp</span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Three cohorts. Seven days each. All year.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cohorts.map((c) => (
            <CohortCard key={c.id} cohort={c} />
          ))}
        </div>
      </section>

      {/* ---------------- CTA BAND ---------------- */}
      <section className="section">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient px-8 py-16 text-center text-white">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold sm:text-4xl">
            Your online income career starts with one decision.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/85">Join the next cohort and leave with a skill, a plan, and a community.</p>
          <Link href="/bootcamp" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-pink-deep shadow-lg transition-transform hover:scale-105">
            Join Bootcamp <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

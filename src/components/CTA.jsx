import React from 'react';
import { Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-20 text-white">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-12">
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 -ml-16 -mb-16 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">
          <h3 className="text-2xl font-semibold md:text-3xl">Start your journey today</h3>
          <p className="mt-2 max-w-2xl text-white/80">
            Pick a course, meet your mentor, and build something you’re proud of. Flexible schedules, lifetime access.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="#courses" className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-400">
              <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Get Started
            </a>
            <span className="text-sm text-white/70">No prerequisites • Beginner friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const points = [
  {
    title: 'Hands‑on learning',
    desc: 'Build portfolio‑ready projects with step‑by‑step guidance and reviews.',
  },
  {
    title: 'Mentor support',
    desc: 'Get feedback from industry experts and stay accountable to your goals.',
  },
  {
    title: 'Flexible & structured',
    desc: 'Learn at your pace with weekly milestones and live sessions.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-6 -z-[1] rounded-3xl bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 blur-2xl" />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-500/20 p-2"><Shield className="h-5 w-5 text-emerald-300" /></div>
              <h3 className="text-xl font-semibold">A learning experience you can trust</h3>
            </div>
            <ul className="mt-5 space-y-3 text-white/80">
              {points.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-400" />
                  <div>
                    <p className="font-medium text-white">{p.title}</p>
                    <p className="text-sm">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold md:text-4xl">Learn with clarity, grow with confidence</h2>
          <p className="mt-3 text-white/80">
            From fundamentals to advanced workflows, our programs are designed to help you master practical skills that employers value.
          </p>
          <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-white/5 text-center text-sm">
            <div className="p-4">
              <p className="text-2xl font-semibold text-white">10k+</p>
              <p className="text-white/70">Learners</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-semibold text-white">95%</p>
              <p className="text-white/70">Satisfaction</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-semibold text-white">200+</p>
              <p className="text-white/70">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

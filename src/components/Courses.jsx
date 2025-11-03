import React from 'react';
import { GraduationCap, Video, Palette } from 'lucide-react';

const courses = [
  {
    id: 'dm',
    title: 'Digital Marketing',
    icon: GraduationCap,
    color: 'from-emerald-400 to-cyan-400',
    description:
      'Master SEO, social media strategy, paid ads, and analytics. Build campaigns that grow brands and careers.',
    highlights: ['SEO & Content', 'Meta & Google Ads', 'Analytics & Reporting'],
  },
  {
    id: 've',
    title: 'Video Editing',
    icon: Video,
    color: 'from-fuchsia-400 to-violet-400',
    description:
      'Edit like a pro using industry tools. Learn storytelling, motion, sound design, and color to create impact.',
    highlights: ['Premiere Pro & DaVinci', 'Motion & Sound', 'Color & Delivery'],
  },
  {
    id: 'gd',
    title: 'Graphic Design',
    icon: Palette,
    color: 'from-amber-300 to-rose-400',
    description:
      'Turn ideas into visuals with strong fundamentals. Typography, layout, and branding using modern workflows.',
    highlights: ['Figma & Adobe Suite', 'Branding & Layout', 'Portfolio Projects'],
  },
];

const CourseCard = ({ title, icon: Icon, color, description, highlights }) => {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
      <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${color} p-3 text-slate-900`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>
      <ul className="mt-4 grid gap-2 text-sm text-white/80">
        {highlights.map((h) => (
          <li key={h} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/50" /> {h}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-white/60">8–12 weeks • Mentor-led</span>
        <button className="rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-white">Enroll</button>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-white/0 transition-all group-hover:opacity-100 group-hover:ring-white/20" />
    </div>
  );
};

const Courses = () => {
  return (
    <section id="courses" className="relative mx-auto max-w-7xl px-6 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Choose your path</h2>
        <p className="mt-3 text-white/80">Career-ready programs with real projects, feedback, and community support.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.id} {...c} />
        ))}
      </div>
    </section>
  );
};

export default Courses;

import React from 'react';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Hero />
      <Courses />
      <WhyChooseUs />
      <CTA />
      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} EduTech. Learn. Create. Grow.
      </footer>
    </div>
  );
}

export default App;

'use client';

import Projects from './projects/page';
import Contact from './contact/page';
import About from './about/page';
import Skills from './skills/page';
import Hero from '@/components/layout/Hero';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Content Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

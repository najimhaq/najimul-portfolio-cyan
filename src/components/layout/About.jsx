'use client';

import Section from "@/components/sections/Section";


const stats = [
  { label: 'Projects Built', value: '15+' },
  { label: 'Tech Stack', value: 'MERN' },
  { label: 'Learning', value: 'C, PostgreSQL' },
];

export default function AboutPage() {
  return (
    <Section
      id='about'
      title='About Me'
      description="I'm Najimul, a full-stack developer from a non-CSE background, self-taught and passionate about building real-world products with the MERN stack and Next.js."
      bgColor='from-gray-950 via-blue-950/20 to-gray-950'
    >
      <div className='grid md:grid-cols-3 gap-6 mt-4'>
        {stats.map((s) => (
          <div
            key={s.label}
            className='p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/30 transition-colors'
          >
            <p className='text-3xl font-bold text-cyan-400'>{s.value}</p>
            <p className='text-sm text-gray-500 mt-2'>{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

'use client';

import Section from '@/components/sections/Section';

const stats = [
  {
    value: 'Frontend',
    label: 'React, Next.js App Router, Tailwind CSS, Framer Motion',
  },
  { value: 'Backend', label: 'Node.js, Express.js, JWT, REST API' },
  { value: 'Database', label: 'MongoDB, PostgreSQL, Prisma ORM' },
  { value: 'Tooling', label: 'Git, GitHub, Vercel, VS Code, Postman' },
  { value: 'Design', label: 'Figma, Canva, Photoshop, Illustrator' },
  {
    value: 'Currently Learning',
    label: 'TypeScript, System Design, C, Python',
  },
];

const aboutDescription =
  'I am a self-taught full-stack developer focused on building production-minded web applications. I enjoy designing clean user interfaces, secure authentication systems, REST APIs, and practical database schemas. Currently, I am strengthening my skills in TypeScript, PostgreSQL, Prisma, C fundamentals, and system design.';

export default function AboutPage() {
  return (
    <Section
      id='about'
      title='About Me'
      description={aboutDescription}
      bgColor='from-gray-950 via-blue-950/20 to-gray-950'
    >
      <div className='grid md:grid-cols-3 gap-6 mt-4'>
        {stats.map((s) => (
          <div
            key={s.value}
            className='p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/30 transition-colors'
          >
            <p className='text-2xl font-bold text-cyan-400'>{s.value}</p>
            <p className='text-sm text-gray-500 mt-2'>{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

'use client';

import Section from '@/components/sections/Section';

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'JWT Auth', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma ORM'],
  },
  {
    title: 'Learning',
    items: ['TypeScript', 'C Programming', 'Python','System Design'],
  },
];


export default function Skills() {
  return (
    <Section
      id='skills'
      title='Skills'
      description='Tools and technologies that I work with and am learning about.'
      bgColor='from-gray-950 via-gray-900 to-gray-950'
    >
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className='p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/30 transition-colors text-left'
          >
            <h3 className='text-lg font-semibold text-white mb-4'>
              {group.title}
            </h3>
            <ul className='space-y-2'>
              {group.items.map((item) => (
                <li
                  key={item}
                  className='text-gray-400 text-sm flex items-center gap-2'
                >
                  <span className='w-1.5 h-1.5 rounded-full bg-cyan-400' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

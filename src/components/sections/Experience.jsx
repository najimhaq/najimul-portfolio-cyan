'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experience = [
  {
    year: 'NOW',
    title: 'Learning Something New',
    tag: 'Self-Development',
    desc: 'Continuously exploring emerging technologies, researching advanced AI systems.',
  },
  {
    year: '2025',
    title: 'AI Engineer',
    tag: 'Freelance & Projects',
    desc: 'Developing intelligent AI systems, chatbots, and machine learning solutions.',
  },
  {
    year: '2024',
    title: 'Full-Stack Developer',
    tag: 'Freelance & Projects',
    desc: 'Built complete web applications from frontend to backend.',
  },
  {
    year: '2023',
    title: 'Python Developer',
    tag: 'Self-Taught',
    desc: 'Dove deep into Python programming, building automation scripts and bots.',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className='py-24 px-6 bg-black'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent'>
          My career & experience
        </h2>

        <div ref={ref} className='relative flex'>
          {/* Track line */}
          <div className='relative w-[2px] mr-10 bg-white/10 rounded-full'>
            <motion.div
              style={{ height: lineHeight }}
              className='absolute top-0 left-0 w-[2px] rounded-full bg-gradient-to-b from-purple-300 via-purple-500 to-purple-900/0'
            />
            {/* Comet head glow */}
            <motion.div
              style={{ top: lineHeight }}
              className='absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-300 shadow-[0_0_25px_8px_rgba(168,85,247,0.7)]'
            />
          </div>

          {/* Content */}
          <div className='flex-1 space-y-16'>
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className='grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-6 items-start'
              >
                <div>
                  <h3 className='text-2xl font-bold text-white'>
                    {item.title}
                  </h3>
                  <p className='text-purple-400 font-medium'>{item.tag}</p>
                </div>
                <div className='text-3xl font-bold text-white/90'>
                  {item.year}
                </div>
                <p className='text-gray-400 leading-relaxed'>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

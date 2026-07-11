'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Section({ id, title, description, bgColor }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id={id}
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-b ${bgColor}`}
    >
      {/* Decorative line */}
      <div className='absolute left-1/2 top-0 w-px h-32 bg-gradient-to-b from-transparent via-gray-700 to-transparent' />

      <div ref={ref} className='max-w-4xl mx-auto px-6 text-center'>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='inline-block text-sm font-medium text-cyan-400 tracking-widest uppercase mb-4 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5'
        >
          {id}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-lg text-gray-400 max-w-2xl mx-auto mb-8'
        >
          {description}
        </motion.p>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='grid md:grid-cols-3 gap-6 mt-12'
        >
          {['Performant', 'Accessible', 'Customizable'].map((item, i) => (
            <div
              key={item}
              className='p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/30 transition-colors'
            >
              <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 mx-auto'>
                <span className='text-2xl'>
                  {i === 0 ? '⚡' : i === 1 ? '♿' : '🎨'}
                </span>
              </div>
              <h3 className='text-lg font-semibold text-white mb-2'>{item}</h3>
              <p className='text-sm text-gray-500'>
                Lenis তোমার site কে {item.toLowerCase()} করে তোলে effortlessly।
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

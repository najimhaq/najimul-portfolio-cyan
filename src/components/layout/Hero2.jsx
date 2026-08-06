'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SmoothLink from '@/components/ui/SmoothLink';
import LiquidBackground from '../ui/LiquidBackground';

const techStack = ['Next.js', 'React', 'Node.js', 'PostgreSQL'];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id='home'
      className='relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden pt-24'
    >
      <div className='absolute inset-0 -z-30 bg-[#050507]' />

      <div className='absolute inset-0 -z-20 opacity-70'>
        <LiquidBackground />
      </div>

      <div className='pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:52px_52px] md:opacity-70' />

      <div className='pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px] md:block' />

      <div className='relative z-10 mx-auto w-full max-w-5xl px-6 text-center'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className='mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-emerald-300'
        >
          <span className='relative flex h-2 w-2'>
            {!shouldReduceMotion && (
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70' />
            )}
            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
          </span>
          Open to full-time roles & freelance projects
        </motion.div>

        <motion.p
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
          className='mb-3 font-mono text-xs uppercase tracking-[0.22em] text-cyan-300/80'
        >
          Najimul Haque · Full-Stack Developer
        </motion.p>

        <motion.h1
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.16, ease: 'easeOut' }}
          className='mx-auto max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-8xl'
        >
          I build fast, thoughtful
          <span className='block bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
            web products.
          </span>
        </motion.h1>

        <motion.p
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          className='mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg'
        >
          I turn ideas into accessible, high-performance applications using
          Next.js, Node.js, and modern product engineering practices.
        </motion.p>

        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.34, ease: 'easeOut' }}
          className='mt-9 flex flex-wrap justify-center gap-3'
        >
          <SmoothLink
            href='/projects'
            className='group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:shadow-[0_0_28px_rgba(34,211,238,0.28)] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black'
          >
            View selected work
            <span className='transition-transform duration-200 group-hover:translate-x-1'>
              →
            </span>
          </SmoothLink>

          <SmoothLink
            href='/contact'
            className='rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-gray-200 transition hover:border-cyan-300/50 hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black'
          >
            Start a project
          </SmoothLink>
        </motion.div>

        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.43, ease: 'easeOut' }}
          className='mt-10 flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs font-medium text-gray-500'
        >
          {techStack.map((technology, index) => (
            <span key={technology} className='flex items-center gap-3'>
              {index > 0 && (
                <span className='h-1 w-1 rounded-full bg-gray-700' />
              )}
              {technology}
            </span>
          ))}
        </motion.div>
      </div>

      {!shouldReduceMotion && (
        <motion.div
          animate={{ y: [0, 7, 0], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-xs text-gray-500 sm:block'
        >
          Scroll to explore ↓
        </motion.div>
      )}
    </section>
  );
}

'use client';

import { motion, useReducedMotion } from 'framer-motion';
import SmoothLink from '@/components/ui/SmoothLink';
import LiquidBackground from '../ui/LiquidBackground';
import TypingAnimation from '../ui/TypingAnimations';

const techStack = ['Next.js', 'React', 'Node.js', 'PostgreSQL'];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id='home'
      className='relative isolate flex min-h-svh items-center justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pt-32'
    >
      {/* Base background */}
      <div className='absolute inset-0 -z-30 bg-[#050507]' />

      {/* Animated background */}
      <div className='absolute inset-0 -z-20 opacity-50 sm:opacity-60 md:opacity-70'>
        <LiquidBackground />
      </div>

      {/* Subtle grid */}
      <div className='pointer-events-none absolute inset-0 -z-10 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[36px_36px] sm:bg-size-[48px_48px] md:opacity-60' />

      {/* Desktop ambient glow */}
      <div className='pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-104 w-104 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] md:block lg:h-136 lg:w-136' />

      <div className='relative z-10 mx-auto w-full max-w-6xl text-center'>
        {/* Availability badge */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className='mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-[10px] font-medium tracking-wide text-emerald-300 sm:mb-7 sm:px-3.5 sm:text-xs'
        >
          <span className='relative flex h-2 w-2 shrink-0'>
            {!shouldReduceMotion && (
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70' />
            )}
            <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
          </span>
          <span>Open to full-time roles & freelance projects</span>
        </motion.div>

        {/* Identity line */}
        <motion.p
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
          className='mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300/80 sm:text-xs sm:tracking-[0.22em]'
        >
          Najimul Haque · Full-Stack Developer
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.16, ease: 'easeOut' }}
          className='mx-auto max-w-5xl font-sans inter text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white'
        >
          <span className='block lg:whitespace-nowrap'>
            I build fast, thoughtful
          </span>
          <span className='mt-1 block bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent sm:mt-2'>
            web products.
          </span>
        </motion.h1>

        {/* Dynamic typing line */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.45, delay: 0.21, ease: 'easeOut' }}
          className='mx-auto mt-4 flex h-8 max-w-full items-center justify-center text-sm text-gray-400/90 sm:mt-5 sm:h-10 sm:text-base md:text-lg'
        >
          <TypingAnimation />
        </motion.div>

        {/* Description */}
        <motion.p
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.28, ease: 'easeOut' }}
          className='mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:mt-4 sm:max-w-2xl sm:text-base sm:leading-7 md:text-lg '
        >
          I turn ideas into accessible, high-performance applications using
          Next.js, Node.js, and modern product engineering practices.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.36, ease: 'easeOut' }}
          className='mx-auto mt-7 flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row'
        >
          <SmoothLink
            href='/projects'
            className='group inline-flex w-full max-w-70 items-center justify-center gap-2 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white transition hover:shadow-[0_0_28px_rgba(34,211,238,0.28)] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black sm:w-auto sm:max-w-none'
          >
            View selected work
            <span className='transition-transform duration-200 group-hover:translate-x-1'>
              →
            </span>
          </SmoothLink>

          <SmoothLink
            href='/contact'
            className='inline-flex w-full max-w-70 items-center justify-center rounded-full border border-white/15 bg-white/3 px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-cyan-300/50 hover:bg-white/6 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black sm:w-auto sm:max-w-none'
          >
            Start a project
          </SmoothLink>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.44, ease: 'easeOut' }}
          className='mx-auto mt-5 flex max-w-sm flex-wrap justify-center gap-x-3 gap-y-2 text-[11px] font-medium text-gray-400 sm:mt-7 sm:max-w-none sm:text-xs'
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

        {/* Scroll indicator */}
        {!shouldReduceMotion && (
          <motion.div
            animate={{ y: [0, 7, 0], opacity: [0.45, 1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className='mt-5 flex flex-col items-center gap-1.5 sm:mt-7 sm:gap-2'
            aria-hidden='true'
          >
            <span className='text-[9px] uppercase tracking-[0.16em] text-gray-500'>
              Scroll to explore
            </span>

            <div className='flex h-8 w-5 justify-center rounded-full border border-gray-600 pt-1.5'>
              <motion.div
                animate={{ y: [0, 9, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='h-1.5 w-1.5 rounded-full bg-cyan-400'
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import SmoothLink from '@/components/ui/SmoothLink';
import TextReveal from '@/components/ui/TextReveal';
import TypingAnimation from '@/components/ui/TypingAnimations';
import LiquidBackground from '../ui/LiquidBackground';

export default function Hero() {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      <LiquidBackground />
      {/* Background Grid */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]' />

      {/* Glow Orbs */}
      <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]' />
      <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]' />

      <div className='relative z-10 text-center max-w-4xl mx-auto px-6'>
        <div className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6'>
          <TextReveal
            text='Md Najimul'
            delay={0.1}
            className='bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'
          />
          <TextReveal
            text='Haque'
            delay={0.3}
            className='bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'
          />
        </div>

        {/* Typing Animation */}
        <div className='text-xl md:text-xl text-gray-700 dark:text-gray-300 mb-4 h-14'>
          <TypingAnimation />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10'
        >
          I build fast, scalable web applications using Next.js, Node.js,Express, MongoDB, and PostgreSQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex gap-4 justify-center'
        >
          <SmoothLink
            href='#projects'
            className='px-8 py-3 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all'
          >
            View Projects
          </SmoothLink>
          <SmoothLink
            href='#about'
            className='px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-white transition-all'
          >
            Learn More
          </SmoothLink>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2'
      >
        <div className='w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2'>
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-1.5 h-1.5 rounded-full bg-cyan-400'
          />
        </div>
      </motion.div>
    </section>
  );
}

'use client';
import { motion} from 'framer-motion';
import Section from '@/components/sections/Section';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id='home'
        className='relative min-h-screen flex items-center justify-center overflow-hidden'
      >
        {/* Background Grid */}
        <div className='absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]' />

        {/* linear Orbs */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]' />

        <div className='relative z-10 text-center max-w-4xl mx-auto px-6'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6'
          >
            <span className='bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
              Smooth Scroll
            </span>
            <br />
            <span className='bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
              Like Butter
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10'
          >
            Lenis with silky smooth scrolling experience,Custom progress bar,
            back-to-top, scroll animations, parallax, horizontal scroll.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex gap-4 justify-center'
          >
            <a
              href='#features'
              className='px-8 py-3 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all'
            >
              Explore Features
            </a>
            <a
              href='#about'
              className='px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-white transition-all'
            >
              Learn More
            </a>
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

      {/* Feature Sections */}
      <Section
        id='features'
        title='Features'
        description='Lenis এর শক্তিশালী সব ফিচার যা তোমার site কে premium feel দেয়।'
        bgColor='from-gray-950 via-gray-900 to-gray-950'
      />

      <Section
        id='about'
        title='About'
        description='কেন Lenis? কারণ এটা lightweight, accessible এবং performant।'
        bgColor='from-gray-950 via-blue-950/20 to-gray-950'
      />

      <Section
        id='contact'
        title='Contact'
        description='যোগাযোগ করো আমাদের সাথে। আমরা সব সময় সাহায্য করতে প্রস্তুত।'
        bgColor='from-gray-950 via-purple-950/20 to-gray-950'
      />

      {/* Extra sections for scroll demo */}
      <Section
        id='extra'
        title='More Content'
        description='Scroll করো — দেখো কত smooth! Progress bar উপরে দেখো।'
        bgColor='from-gray-950 via-cyan-950/20 to-gray-950'
      />
    </>
  );
}

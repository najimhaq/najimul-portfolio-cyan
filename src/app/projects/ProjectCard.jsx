'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ImageParallax from '@/components/ui/ImageParallax';


export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  // 3D টিল্ট ইফেক্ট
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const springConfig = { damping: 15, stiffness: 200 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ y: -10 }}
      className='relative group'
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className='relative rounded-2xl overflow-hidden bg-linear-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50 hover:border-cyan-500/50 transition-colors'
      >
        {/* গ্লো ইফেক্ট */}
        <motion.div
          className='absolute -inset-0.5 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500'
          animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className='relative z-10'>
          {/* ইমেজ সেকশন */}
          <div className='relative h-64 overflow-hidden'>
            <ImageParallax
              src={project.image}
              alt={project.title}
              className='w-full h-full'
            />

            {/* ইমেজ ওভারলে */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4'
            >
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='p-4 bg-cyan-500/20 border-2 border-cyan-400 rounded-full hover:bg-cyan-500 transition-colors'
              >
                <FaExternalLinkAlt className='text-white text-xl' />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='p-4 bg-purple-500/20 border-2 border-purple-400 rounded-full hover:bg-purple-500 transition-colors'
              >
                <FaGithub className='text-white text-xl' />
              </motion.a>
            </motion.div>

            {/* ক্যাটাগরি ব্যাজ */}
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              animate={
                isHovered ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
              }
              transition={{ duration: 0.3 }}
              className='absolute top-4 left-4 px-3 py-1 text-xs font-medium uppercase tracking-wider bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-full backdrop-blur-sm'
            >
              {project.category}
            </motion.span>
          </div>

          {/* কন্টেন্ট সেকশন */}
          <div className='p-6'>
            <motion.h3
              className='text-2xl font-bold text-white mb-2'
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className='text-gray-400 text-sm mb-4 line-clamp-2'
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className='flex flex-wrap gap-2'
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {project.techs.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className='text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

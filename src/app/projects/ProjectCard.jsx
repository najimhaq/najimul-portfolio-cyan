'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className='grid md:grid-cols-2 gap-8 p-6 md:p-8 rounded-2xl border border-white/10 bg-gray-900/40 hover:border-cyan-500/30 transition-colors'
    >
      <div className='relative rounded-xl overflow-hidden border border-white/10 aspect-video'>
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className='object-cover'
        />
      </div>

      <div>
        <div className='flex items-center justify-between mb-2'>
          <div>
            <h3 className='text-2xl font-bold text-white'>{project.title}</h3>
            <p className='text-cyan-400 text-sm'>{project.tag}</p>
          </div>
          <div className='flex gap-2'>
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full border border-white/10 hover:border-cyan-400 transition-colors'
            >
              <ExternalLink size={16} />
            </a>
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 rounded-full border border-white/10 hover:border-cyan-400 transition-colors'
            >
              <BsGithub size={16} />
            </a>
          </div>
        </div>

        <div className='flex flex-wrap gap-2 mb-4'>
          {project.stack.map((t) => (
            <span
              key={t}
              className='text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10'
            >
              {t}
            </span>
          ))}
        </div>

        <div className='space-y-3 text-sm'>
          <div>
            <p className='text-gray-500 font-semibold uppercase text-xs mb-1'>
              Problem
            </p>
            <p className='text-gray-300'>{project.problem}</p>
          </div>
          <div>
            <p className='text-gray-500 font-semibold uppercase text-xs mb-1'>
              Decision
            </p>
            <p className='text-gray-300'>{project.decision}</p>
          </div>
          <div>
            <p className='text-gray-500 font-semibold uppercase text-xs mb-1'>
              Result
            </p>
            <p className='text-green-400 font-medium'>{project.result}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

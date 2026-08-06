'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import TechIcon from './TechIcon';

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4'
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className='relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-gray-900 border border-gray-800'
          >
            <button
              onClick={onClose}
              aria-label='Close project details'
              className='absolute top-4 right-4 z-10 p-2 rounded-full bg-red-500/10 hover:bg-white/20 text-white transition-colors'
            >
              <FaTimes size={16} className='text-red-300' />
            </button>

            <div className='relative w-full h-64'>
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes='100vw'
                className='object-cover'
              />
            </div>

            <div className='p-6'>
              <h3 className='text-2xl font-bold text-white mb-3'>
                {project.title}
              </h3>
              <p className='text-gray-400 text-sm leading-relaxed mb-5'>
                {project.description}
              </p>

              <div className='flex flex-wrap gap-2 mb-6'>
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className='flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                  >
                    <TechIcon name={tech} />
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex gap-3'>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all'
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 text-gray-300 text-sm hover:border-cyan-500/50 hover:text-white transition-all'
                  >
                    <FaGithub size={14} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

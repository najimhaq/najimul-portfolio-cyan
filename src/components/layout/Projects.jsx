'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Section from '@/components/sections/Section';
import ImageReveal from '@/components/ui/ImageReveal';
import { projectsData } from '@/app/data/projectsData';


export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    'all',
    ...new Set(projectsData.map((p) => p.category || 'general')),
  ];

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => (p.category || 'general') === filter);

  return (
    <Section
      id='projects'
      title='Projects'
      description='Some projects that I have built with real-world use cases in mind.'
      bgColor='from-gray-950 via-cyan-950/10 to-gray-950'
    >
      {/* Filter Tabs */}
      <div className='flex flex-wrap justify-center gap-3 mb-12'>
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 text-sm rounded-full capitalize transition-all duration-300 ${
              filter === category
                ? 'bg-linear-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:border-cyan-500/40 hover:text-white'
            }`}
          >
            {category === 'all' ? 'All Projects' : category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='grid md:grid-cols-3 gap-6'
        >
          {filteredProjects.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className='group relative rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-cyan-500/30 transition-colors text-left'
            >
              {/* Image with hover overlay */}
              <div className='relative overflow-hidden h-56'>
                <ImageReveal
                  src={p.image}
                  alt={p.name}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={p.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 bg-white/10 border border-white/20 rounded-full hover:bg-cyan-500 hover:border-cyan-500 transition-colors text-white'
                  >
                    <FaExternalLinkAlt size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={p.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 bg-white/10 border border-white/20 rounded-full hover:bg-purple-500 hover:border-purple-500 transition-colors text-white'
                  >
                    <FaGithub size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {p.name}
                </h3>
                <p className='text-gray-400 text-sm mb-4'>{p.desc}</p>
                <div className='flex flex-wrap gap-2'>
                  {(p.techs || []).map((tech) => (
                    <span
                      key={tech}
                      className='text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <p className='text-center text-gray-500 py-12'>
          No projects found in this category.
        </p>
      )}
    </Section>
  );
}

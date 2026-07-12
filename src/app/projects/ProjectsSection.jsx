'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import Section from '@/components/sections/Section';
import ProjectFilters from './ProjectFilters';
import GSAPReveal from '@/components/ui/GSAPReveal';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <Section
      id='projects'
      title='My Projects'
      description='Explore my latest work and personal projects'
      bgColor='from-gray-950 via-cyan-950/5 to-gray-950'
    >
      {/* ফিল্টার */}
      <ProjectFilters activeFilter={filter} onFilterChange={setFilter} />

      {/* প্রোজেক্ট গ্রিড */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {filteredProjects.map((project, index) => (
            <GSAPReveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} index={index} />
            </GSAPReveal>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* খালি স্টেট */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className='text-center py-16'
        >
          <div className='text-6xl mb-4'>🔍</div>
          <h3 className='text-xl font-semibold text-white mb-2'>
            No projects found
          </h3>
          <p className='text-gray-400'>Try adjusting your filter criteria</p>
        </motion.div>
      )}
    </Section>
  );
}

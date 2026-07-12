'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All Projects', icon: '🎯' },
  { id: 'ecommerce', label: 'E-Commerce', icon: '🛒' },
  { id: 'productivity', label: 'Productivity', icon: '⚡' },
  { id: 'blog', label: 'Blog', icon: '📝' },
  { id: 'portfolio', label: 'Portfolio', icon: '🎨' },
];

export default function ProjectFilters({ activeFilter, onFilterChange }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-12'>
      {categories.map((category) => {
        const isActive = activeFilter === category.id;
        const isHovered = hoveredId === category.id;

        return (
          <motion.button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            onMouseEnter={() => setHoveredId(category.id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300'
            style={{
              background: isActive
                ? 'linear-gradient(135deg, #06b6d4, #8b5cf6)'
                : 'rgba(255,255,255,0.05)',
              color: isActive ? '#fff' : '#9ca3af',
              border: isActive ? 'none' : '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* হোভার ইফেক্ট */}
            {!isActive && (
              <motion.div
                className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
              />
            )}

            <span className='relative z-10 flex items-center gap-2'>
              <span>{category.icon}</span>
              {category.label}

              {/* অ্যাক্টিভ ইন্ডিকেটর */}
              {isActive && (
                <motion.span
                  layoutId='activeFilterIndicator'
                  className='absolute -bottom-1 left-1/2 w-6 h-0.5 bg-white rounded-full'
                  style={{ x: '-50%' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ImageSkeleton from './ImageSkeleton';

export default function ImageReveal({ src, alt, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['inset(100% 0 0 0)', 'inset(0 0 0 0)']
  );

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ clipPath }}
        className='relative w-full h-full overflow-hidden'
      >
        <ImageSkeleton src={src} alt={alt} className='w-full h-full' />
      </motion.div>
    </div>
  );
}

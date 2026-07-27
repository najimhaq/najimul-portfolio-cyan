'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageSkeleton({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className='absolute inset-0 bg-gray-800 animate-pulse' />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

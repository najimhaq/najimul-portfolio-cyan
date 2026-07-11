'use client';

import { ReactLenis } from 'lenis/react';
import { lenisOptions } from '@/lib/lenis-config';

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

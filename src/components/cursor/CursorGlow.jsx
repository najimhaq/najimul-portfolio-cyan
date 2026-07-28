'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const rafId = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (isTouch || prefersReducedMotion) return;

    const updatePosition = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x - 200}px, ${pos.current.y - 200}px, 0)`;
      }
      rafId.current = null;
    };

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // Server/mobile-এ কিছুই render হবে না
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches
  ) {
    return null;
  }

  return (
    <div
      ref={glowRef}
      className='fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none -z-[5] will-change-transform hidden md:block'
      style={{
        background:
          'radial-gradient(circle, rgba(168,85,247,0.25), rgba(168,85,247,0.05) 40%, transparent 70%)',
        filter: 'blur(20px)',
      }}
    />
  );
}

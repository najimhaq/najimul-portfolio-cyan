'use client';

import Link from 'next/link';
import { useLenisScroll } from '@/hooks/useLenisScroll';

export default function SmoothLink({ href, children, className, ...props }) {
  const { scrollToElement } = useLenisScroll();

  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToElement(href);
    }
    // Route links (e.g. "/projects") fall through to Next.js Link navigation
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

const socials = [
  { icon: FiGithub, href: 'https://github.com/najimhaq', label: 'GitHub' },
  {
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/haq-najim',
    label: 'LinkedIn',
  },
  {
    icon: FiInstagram,
    href: 'https://www.instagram.com/raju_khl',
    label: 'Instagram',
  },
  { icon: FiMail, href: 'mailto:mdnajimulhaque@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className='relative border-t border-white/10 bg-gray-950'>
      <div className='absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent' />

      <div className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10'>
        <div className='md:col-span-2'>
          <Link
            href='/'
            className='text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'
          >
            Najimul
          </Link>
          <p className='mt-4 text-sm text-gray-400 max-w-sm leading-relaxed'>
            Full-stack developer building fast, scalable web applications with
            Next.js, Node.js, and modern web technologies.
          </p>

          <div className='mt-6 inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-300'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
              <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500' />
            </span>
            Available for freelance / full-time
          </div>
        </div>

        <div>
          <h4 className='text-sm font-semibold text-white mb-4 tracking-wide'>
            Quick Links
          </h4>
          <ul className='space-y-3'>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className='text-sm text-gray-400 hover:text-cyan-400 transition-colors'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='text-sm font-semibold text-white mb-4 tracking-wide'>
            Connect
          </h4>
          <div className='flex gap-3'>
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={s.label}
                  className='flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors'
                >
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>
          <p className='mt-6 text-xs text-gray-500'>📍 Khulna, Bangladesh</p>
        </div>
      </div>

      <div className='border-t border-white/5'>
        <div className='max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-xs text-gray-500'>
            © {new Date().getFullYear()} Najimul Haque. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

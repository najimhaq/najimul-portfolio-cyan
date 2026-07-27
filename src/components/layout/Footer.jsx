'use client';

const socials = [
  { name: 'GitHub', href: 'https://github.com/najimhaq' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/your-actual-username' },
  { name: 'Email', href: 'mailto:mdnajimulhaque@gmail.com' },
];

export default function Footer() {
  return (
    <footer className='border-t border-white/10 bg-gray-950 py-10'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6'>
        <p className='text-gray-500 text-sm'>
          © {new Date().getFullYear()} Najimul Haque. All rights reserved.
        </p>
        <div className='flex gap-6'>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-gray-400 hover:text-cyan-400 transition-colors'
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

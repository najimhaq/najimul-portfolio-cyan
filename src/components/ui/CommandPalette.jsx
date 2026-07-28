'use client';

import { Command } from 'cmdk';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, Code, FileDown, Home, Mail, Terminal, User } from 'lucide-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


export default function CommandPalette({ open, setOpen }) {
  const router = useRouter();

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen]);

  const runCommand = (action) => {
    setOpen(false);
    action();
  };

  const commands = [
    { icon: Home, label: 'Go to Home', action: () => router.push('/') },
    { icon: User, label: 'About Me', action: () => router.push('/about') },
    {
      icon: Briefcase,
      label: 'View Work / Projects',
      action: () => router.push('/projects'),
    },
    {
      icon: Code,
      label: 'Skills & Tech Stack',
      action: () => router.push('/skills'),
    },
    { icon: Mail, label: 'Contact', action: () => router.push('/contact') },
    {
      icon: FileDown,
      label: 'Download Resume',
      action: () => window.open('/assets/Najimul_Haque_Resume.pdf', '_blank'),
    },
    {
      icon: BsGithub,
      label: 'Open GitHub',
      action: () => window.open('https://github.com/najimhaq', '_blank'),
    },
    {
      icon: BsLinkedin,
      label: 'Open LinkedIn',
      action: () =>
        window.open('https://www.linkedin.com/in/haq-najim/', '_blank'),
    },
  ];

  if (!open) return null;

  return (
    <div
      className='fixed inset-0 z-9999 flex items-start justify-center pt-32 bg-black/60 backdrop-blur-sm'
      onClick={() => setOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className='w-full max-w-lg'>
        <Command className='rounded-2xl border border-white/10 bg-gray-950 shadow-2xl overflow-hidden'>
          <div className='flex items-center border-b border-white/10 px-4'>
            <Command.Input
              autoFocus
              placeholder='Type a command or search...'
              className='w-full bg-transparent py-4 text-sm text-white placeholder:text-gray-500 outline-none'
            />
            <kbd className='text-xs text-gray-500 border border-white/10 rounded px-1.5 py-0.5'>
              Esc
            </kbd>
          </div>

          <Command.List className='max-h-80 overflow-y-auto p-2'>
            <Command.Empty className='py-6 text-center text-sm text-gray-500'>
              No results found.
            </Command.Empty>

            {commands.map((cmd) => {
              const Icon = cmd.icon;
              return (
                <Command.Item
                  key={cmd.label}
                  onSelect={() => runCommand(cmd.action)}
                  className='flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 cursor-pointer aria-selected:bg-cyan-500/15 aria-selected:text-white'
                >
                  <Icon size={16} className='text-cyan-400' />
                  {cmd.label}
                </Command.Item>
              );
            })}
          </Command.List>
        </Command>
      </div>
    </div>
  );
}

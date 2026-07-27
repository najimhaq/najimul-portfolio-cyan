'use client';

import Section from '@/components/sections/Section';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiDownload,
} from 'react-icons/fi';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (field) => (e) =>
    setFormState((s) => ({ ...s, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/najimhaq', label: 'GitHub' },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/najimhaq',
      label: 'LinkedIn',
    },
    { icon: FiTwitter, href: 'https://twitter.com/najimhaq', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:mdnajimulhaque@gmail.com', label: 'Email' },
  ];

  return (
    <Section
      id='contact'
      title="Let's Build Something"
      description="Have a project in mind? Or just want to say hi? I'm always open to interesting conversations."
      bgColor='from-gray-950 via-purple-950/10 to-gray-950'
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-300 mb-10'
      >
        <span className='relative flex h-2 w-2'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
          <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500' />
        </span>
        Available for freelance / full-time
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 text-left'>
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className='lg:col-span-3 space-y-5'
        >
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-300 mb-1'
            >
              Name
            </label>
            <input
              id='name'
              type='text'
              required
              value={formState.name}
              onChange={handleChange('name')}
              className='w-full px-5 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all'
              placeholder='Your name'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-300 mb-1'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              required
              value={formState.email}
              onChange={handleChange('email')}
              className='w-full px-5 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all'
              placeholder='you@example.com'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-300 mb-1'
            >
              Message
            </label>
            <textarea
              id='message'
              required
              rows={5}
              value={formState.message}
              onChange={handleChange('message')}
              className='w-full px-5 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all resize-none'
              placeholder='Tell me about your project...'
            />
          </div>

          <button
            type='submit'
            disabled={status === 'submitting'}
            className='w-full py-3.5 bg-linear-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
          >
            {status === 'submitting' && (
              <span className='animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white' />
            )}
            {status === 'success' && <>✓ Sent! I'll get back to you soon.</>}
            {status === 'error' && <>Something went wrong. Try again.</>}
            {status === 'idle' && (
              <>
                Send message <FiSend className='w-4 h-4' />
              </>
            )}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='lg:col-span-2 flex flex-col justify-center gap-6'
        >
          <p className='text-gray-400 text-sm'>Or reach me directly on:</p>

          <div className='flex flex-wrap gap-3'>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 hover:border-cyan-500/30 transition-colors duration-300 group'
                >
                  <Icon className='w-4 h-4 group-hover:text-cyan-400 transition-colors' />
                  <span className='text-sm'>{link.label}</span>
                </a>
              );
            })}
          </div>

          <a
            href='/assets/Najimul_Haque_Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download
            className='flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl hover:bg-cyan-500/20 transition-colors'
          >
            <FiDownload className='w-4 h-4' />
            Download Resume
          </a>

          <div className='mt-4 p-4 bg-white/5 border border-white/5 rounded-xl'>
            <p className='text-xs text-gray-500'>
              📍 Based in Khulna, Bangladesh • Available globally
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

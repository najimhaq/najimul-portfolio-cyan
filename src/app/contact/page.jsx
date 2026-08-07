'use client';

import Section from '@/components/sections/Section';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiSend,
  FiDownload,
} from 'react-icons/fi';

const initialFormState = {
  name: '',
  email: '',
  message: '',
  website: '',
};

export default function Contact() {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const resetTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleChange = (field) => (event) => {
    setFormState((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const resetStatusAfterDelay = () => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = setTimeout(() => {
      setStatus('idle');
      setErrorMessage('');
    }, 5000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormState(initialFormState);
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error.message || 'Could not send your message. Please try again.'
      );
    } finally {
      resetStatusAfterDelay();
    }
  };

  const socialLinks = [
    {
      icon: FiGithub,
      href: 'https://github.com/najimhaq',
      label: 'GitHub',
    },
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
    {
      icon: FiMail,
      href: 'mailto:mdnajimulhaque@gmail.com',
      label: 'Email',
    },
  ];

  const isSubmitting = status === 'submitting';

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
        className='mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-sm'
      >
        <span className='relative flex h-2 w-2'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
          <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
        </span>
        Available for freelance / full-time
      </motion.div>

      <div className='grid grid-cols-1 gap-12 text-left lg:grid-cols-5'>
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className='relative space-y-5 lg:col-span-3'
        >
          {/* Invisible honeypot field: used only to reduce automated spam. */}
          <input
            type='text'
            name='website'
            value={formState.website}
            onChange={handleChange('website')}
            tabIndex={-1}
            autoComplete='off'
            aria-hidden='true'
            className='absolute left-[-9999px] h-px w-px opacity-0'
          />

          <div>
            <label
              htmlFor='name'
              className='mb-1 block text-sm font-medium text-gray-300'
            >
              Name
            </label>

            <input
              id='name'
              name='name'
              type='text'
              required
              minLength={2}
              maxLength={120}
              autoComplete='name'
              value={formState.name}
              onChange={handleChange('name')}
              disabled={isSubmitting}
              className='w-full rounded-xl border border-white/10 bg-gray-800/50 px-5 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-60'
              placeholder='Your name'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='mb-1 block text-sm font-medium text-gray-300'
            >
              Email
            </label>

            <input
              id='email'
              name='email'
              type='email'
              required
              maxLength={160}
              autoComplete='email'
              value={formState.email}
              onChange={handleChange('email')}
              disabled={isSubmitting}
              className='w-full rounded-xl border border-white/10 bg-gray-800/50 px-5 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-60'
              placeholder='you@example.com'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='mb-1 block text-sm font-medium text-gray-300'
            >
              Message
            </label>

            <textarea
              id='message'
              name='message'
              required
              minLength={10}
              maxLength={5000}
              rows={5}
              value={formState.message}
              onChange={handleChange('message')}
              disabled={isSubmitting}
              className='w-full resize-none rounded-xl border border-white/10 bg-gray-800/50 px-5 py-3 text-white placeholder-gray-500 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-60'
              placeholder='Tell me about your project...'
            />
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-purple-500 py-3.5 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 disabled:cursor-not-allowed disabled:opacity-50'
          >
            {isSubmitting && (
              <span className='h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white' />
            )}

            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send message <FiSend className='h-4 w-4' />
              </>
            )}
          </button>

          <div className='min-h-5' aria-live='polite'>
            {status === 'success' && (
              <p className='text-center text-sm text-emerald-400' role='status'>
                Thanks! Your message has been sent. I’ll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className='text-center text-sm text-red-400' role='alert'>
                {errorMessage}
              </p>
            )}
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-col justify-center gap-6 lg:col-span-2'
        >
          <p className='text-sm text-gray-400'>Or reach me directly on:</p>

          <div className='flex flex-wrap gap-3'>
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith('mailto:') ? undefined : '_blank'
                  }
                  rel={
                    link.href.startsWith('mailto:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className='group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-gray-300 transition-colors duration-300 hover:border-cyan-500/30 hover:bg-white/10'
                >
                  <Icon className='h-4 w-4 transition-colors group-hover:text-cyan-400' />
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
            className='flex items-center justify-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-cyan-400 transition-colors hover:bg-cyan-500/20'
          >
            <FiDownload className='h-4 w-4' />
            Download Resume
          </a>

          <div className='mt-4 rounded-xl border border-white/5 bg-white/5 p-4'>
            <p className='text-xs text-gray-500'>
              📍 Based in Khulna, Bangladesh • Available globally
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

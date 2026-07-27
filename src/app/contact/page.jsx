'use client';

import Section from "@/components/sections/Section";


export default function Contact() {
  return (
    <Section
      id='contact'
      title="Let's Work Together"
      description="Have a project in mind? Reach out and let's build something great."
      bgColor='from-gray-950 via-purple-950/20 to-gray-950'
    >
      <div className='flex items-center justify-center gap-2 mb-8'>
        <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
        <p className='text-sm text-gray-400'>
          Available for internships, junior full-stack roles, and freelance projects
        </p>
      </div>
      <form className='space-y-4 max-w-xl mx-auto text-left'>
        <input
          type='text'
          placeholder='Your Name'
          className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50'
        />
        <input
          type='email'
          placeholder='Your Email'
          className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50'
        />
        <textarea
          placeholder='Your Message'
          rows={4}
          className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50'
        />
        <button
          type='submit'
          className='w-full px-8 py-3 rounded-full bg-linear-to-r from-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all'
        >
          Send Message
        </button>
      </form>
    </Section>
  );
}

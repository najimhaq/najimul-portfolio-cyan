'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function Availability() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#22D3EE' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <section id='availability' className='py-24 px-6 bg-gray-950'>
      <div className='max-w-6xl mx-auto'>
        <p className='text-cyan-400 text-sm font-semibold tracking-wide mb-2'>
          SCHEDULE
        </p>
        <h2 className='text-4xl font-bold text-white mb-4'>Availability</h2>
        <p className='text-gray-400 mb-10'>
          Any questions about a project? Feel free to reach out — book a 30 min
          call.
        </p>

        <div className='rounded-2xl border border-white/10 bg-gray-900/40 overflow-hidden h-[600px]'>
          <Cal
            calLink='https://cal.com/najimhaq/30min'
            style={{ width: '100%', height: '100%' }}
            config={{ layout: 'month_view' }}
          />
        </div>
      </div>
    </section>
  );
}

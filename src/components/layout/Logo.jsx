import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href='/'
      aria-label='Najimul Haque — Home'
      className='group inline-flex items-center gap-2.5'
    >
      <svg
        viewBox='0 0 44 44'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3'
        aria-hidden='true'
      >
        <defs>
          <linearGradient id='najimul-gradient' x1='4' y1='4' x2='40' y2='40'>
            <stop stopColor='#22D3EE' />
            <stop offset='0.52' stopColor='#60A5FA' />
            <stop offset='1' stopColor='#A855F7' />
          </linearGradient>

          <filter
            id='najimul-glow'
            x='-60%'
            y='-60%'
            width='220%'
            height='220%'
          >
            <feGaussianBlur stdDeviation='2.2' result='blur' />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>

        <rect
          x='1.5'
          y='1.5'
          width='41'
          height='41'
          rx='12'
          className='fill-black stroke-white/10 transition-all duration-300 group-hover:stroke-cyan-400/50'
        />

        <path
          d='M12 31V13L31.5 31V13'
          stroke='url(#najimul-gradient)'
          strokeWidth='4'
          strokeLinecap='round'
          strokeLinejoin='round'
          filter='url(#najimul-glow)'
        />

        <circle
          cx='31.5'
          cy='12.5'
          r='2.3'
          fill='#C084FC'
          className='transition-all duration-300 group-hover:fill-cyan-300'
        />
      </svg>

      <span className='text-xl font-bold tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent'>
        Najimul
      </span>
    </Link>
  );
}

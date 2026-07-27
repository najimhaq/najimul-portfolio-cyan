import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import ScrollReset from '@/components/ui/ScrollReset';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import SmoothScrollProvider from '@/components/ui/SmoothScroll';
import Footer from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playfair',
});

export const metadata = {
  metadataBase: new URL('https://www.najimul.xyz'),
  title: {
    default: 'Najimul Haque | Full-Stack Developer',
    template: '%s | Najimul Haque',
  },
  description:
    'Portfolio of Najimul Haque, a full-stack developer specializing in React, Next.js, Node.js, Express, and MongoDB. Building fast, modern web applications.',
  keywords: [
    'Najimul Haque',
    'Full Stack Developer',
    'Next.js Developer',
    'MERN Stack',
    'Web Developer Bangladesh',
  ],
  openGraph: {
    title: 'Najimul Haque | Full-Stack Developer',
    description:
      'Portfolio showcasing full-stack projects built with Next.js, Express, and MongoDB.',
    url: 'https://www.najimul.xyz',
    siteName: 'Najimul Haque Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Najimul Haque | Full-Stack Developer',
    description:
      'Portfolio showcasing full-stack projects built with Next.js, Express, and MongoDB.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-theme='dark'
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} dark`}
    >
      <body className='flex min-h-screen flex-col bg-black text-white antialiased font-sans'>
        <SmoothScrollProvider>
          <ScrollReset />
          <Navbar />
          <ScrollProgress />
          <main className='grow'>{children}</main>
          <BackToTop />
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}

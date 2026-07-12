import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import ScrollReset from '@/components/ui/ScrollReset';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import CustomCursor from '@/components/ui/CustomCursor';
import SmoothScrollProvider from '@/components/ui/SmoothScroll';
import Footer from '@/components/layout/Footer';

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
  title: 'Najimul Haque - Web Developer Portfolio',
  description:
    'Professional portfolio of Najimul Haque, a Full Stack Developer specializing in React, Next.js, and Modern Web Technologies',
  keywords: 'Najimul, Portfolio, Web Developer, React, Next.js, Full Stack',
  authors: [{ name: 'Najimul Haque' }],
  openGraph: {
    title: 'Najimul Haque - Web Developer Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js',
    url: 'https://najimul.xyz',
    siteName: 'Najimul Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-theme='dark'
      data-scroll-behavior='smooth'
      suppressHydrationWarning
      className={`${inter.className} ${playfair.className} dark`}
    >
      <body className='flex min-h-screen flex-col bg-black text-white antialiased'>
        <SmoothScrollProvider>
          <ScrollReset />
          <Navbar />
          <ScrollProgress />
          {/* <CustomCursor /> */}
          <main className='grow'>
            <div className='mx-auto max-w-full'>{children}</div>
          </main>
          <BackToTop />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

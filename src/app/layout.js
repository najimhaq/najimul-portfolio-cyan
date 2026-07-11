import { Manrope} from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import ScrollReset from '@/components/ui/ScrollReset';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
});


export const metadata = {
  title:
    '**Lenis** Modern Smooth Scrolling',
  description:
    '**Lenis** Modern Smooth Scrolling, Progress Bar, Back to Top, Parallax, Horizontal Scroll.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      suppressHydrationWarning
      className={manrope.className}
    >
      <body className='flex min-h-screen flex-col bg-black text-white antialiased'>
        <SmoothScroll>
          <ScrollReset />
          <Navbar />
          <ScrollProgress />
          <main className='grow'>{children}</main>
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}

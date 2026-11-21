import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hanumantha.vercel.app'),
  title: 'Hanumantha L. — Computer Science Student',
  description:
    'Personal portfolio of Hanumantha L., a Computer Science student at PES University interested in software engineering, AI, and building practical technology.',
  authors: [{ name: 'Hanumantha L.', url: 'https://github.com/hanuma-svg' }],
  creator: 'Hanumantha L.',
  keywords: [
    'Hanumantha L',
    'Computer Science',
    'PES University',
    'Software Engineer',
    'Full Stack Developer',
    'PostgreSQL',
    'pgvector',
    'Next.js',
    'TypeScript',
    'Bengaluru',
  ],
  openGraph: {
    title: 'Hanumantha L. — Computer Science Student',
    description:
      'Personal portfolio of Hanumantha L., a Computer Science student at PES University interested in software engineering, AI, and building practical technology.',
    url: 'https://hanumantha.vercel.app',
    siteName: 'Hanumantha L. Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Hanumantha L. — Computer Science Student',
    description:
      'Personal portfolio of Hanumantha L., a Computer Science student at PES University interested in software engineering, AI, and building practical technology.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcfcfc' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="font-sans min-h-screen bg-[#fcfcfc] text-zinc-900 dark:bg-[#09090b] dark:text-zinc-100 antialiased selection:bg-zinc-200 selection:text-zinc-900 dark:selection:bg-zinc-800 dark:selection:text-zinc-100 transition-colors duration-150">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 max-w-3xl w-full mx-auto px-6">
              {children}
            </main>
            <div className="max-w-3xl w-full mx-auto px-6">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

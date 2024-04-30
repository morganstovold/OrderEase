import './globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import { ModeToggle } from '@/components/ui/theme/theme-button';
import { ThemeProvider } from '@/components/ui/theme/theme-provider';
import { getURL } from '@/lib/helpers';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

const meta = {
  title: 'OrderEase',
  description: 'Simplifying Businesses Online',
  robots: 'follow, index',
  cardImage: '/og-image.png',
  favicon: '/favicon.ico',
  url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: ['SaaS', 'POS System', 'Online Ordering', 'Digital PIM', 'B2B Ecosystem'],
    authors: [{ name: 'BigBoyLeft', url: 'https://github.com/BigBoyLeft' }],
    creator: 'BigBoyLeft',
    publisher: 'BigBoyLeft',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [{ url: meta.cardImage, alt: meta.title }],
      type: 'website',
      siteName: meta.title
    }
  };
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { absoluteUrl, cn, constructMetadata } from '@/lib/utils';
import { fontMono, fontSans } from '@/lib/fonts';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = constructMetadata({
  title: 'Motion-Primitives',
  description:
    'UI kit to make beautiful, animated interfaces, faster. Open-source and customizable.',
    image: absoluteUrl('/favicon.ico'),
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'bg-background relative flex w-full flex-col justify-center overflow-x-hidden scroll-smooth font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='light'>
          <div className='isolate min-h-screen'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

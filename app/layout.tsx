import type { ReactNode } from 'react';
import '../styles/globals.css';
import { AppShell } from '../components/AppShell';
import { inter, sora } from '../lib/fonts';

export const metadata = {
  title: 'BOSAH LABS | Digital Command Center',
  description: 'Enterprise mission control for Emmanuel Bosah’s digital infrastructure strategy.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} min-h-screen bg-[#040816] font-sans`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

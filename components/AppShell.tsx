import { type ReactNode } from 'react';
import { BackgroundGrid } from './BackgroundGrid';
import { BrandNav } from './BrandNav';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-command-grid text-white">
      <BackgroundGrid />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <BrandNav />
        <div className="mt-12 flex-1">{children}</div>
      </div>
    </div>
  );
}

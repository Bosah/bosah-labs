import Link from 'next/link';

const navItems = [
  { label: 'Mission', href: '#mission' },
  { label: 'Lab', href: '#lab' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' }
];

export function BrandNav() {
  return (
    <header className="relative z-20 flex items-center justify-between gap-4 border-b border-white/10 pb-6 text-sm text-slate-300 sm:pb-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300 shadow-glow">
          BL
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">BOSAH LABS</p>
          <p className="text-base font-semibold text-white/90">Digital Command Center</p>
        </div>
      </div>
      <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="transition-colors duration-200 text-slate-300 hover:text-white">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

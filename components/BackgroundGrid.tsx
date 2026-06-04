export function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-[360px] w-[360px] rounded-full bg-teal-400/8 blur-3xl" />
      <div className="absolute inset-x-0 top-24 h-px bg-white/5" />
      <div className="absolute inset-y-0 left-0 w-px bg-white/5" />
      <div className="absolute inset-y-0 right-0 w-px bg-white/5" />
    </div>
  );
}

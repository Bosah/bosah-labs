import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#040816',
        primary: '#00D4FF',
        secondary: '#00FFC6',
        accent: '#2563EB',
        text: '#FFFFFF',
        muted: '#9CA3AF',
        surface: 'rgba(255,255,255,0.08)',
        surfaceBorder: 'rgba(255,255,255,0.12)'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(0, 212, 255, 0.16)',
        soft: '0 16px 40px rgba(0, 0, 0, 0.22)'
      },
      backgroundImage: {
        'command-grid': 'radial-gradient(circle at top, rgba(0, 212, 255, 0.14), transparent 28%), radial-gradient(circle at 80% 8%, rgba(0, 255, 198, 0.085), transparent 22%)'
      }
    }
  },
  plugins: []
} satisfies Config;

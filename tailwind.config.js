/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind only scans files we explicitly list to keep builds predictable and fast.
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Tipografía moderna (similar a estilos de portfolios actuales):
        // - Sans para texto y títulos
        // - Mono para código/elementos técnicos si se usan
        sans: ['Space Grotesk', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        night: {
          950: '#070709',
          900: '#0b0c10',
          850: '#0f1016',
          800: '#12131a',
          700: '#1a1b24',
        },
        accent: {
          DEFAULT: '#7c6cff',
          soft: 'rgba(124, 108, 255, 0.14)',
          ring: 'rgba(124, 108, 255, 0.35)',
        },
      },
      boxShadow: {
        panel: '0 0 0 1px rgba(148, 163, 184, 0.10)',
        lift: '0 18px 55px rgba(0, 0, 0, 0.55)',
      },
      backgroundImage: {
        // Subtle “premium dark” backdrop similar to modern dev portfolios (no image assets required).
        'grid-fade':
          'radial-gradient(1200px circle at 20% 10%, rgba(124,108,255,0.18), transparent 55%), radial-gradient(900px circle at 80% 30%, rgba(56,189,248,0.10), transparent 50%), linear-gradient(to bottom, rgba(11,12,16,1), rgba(11,12,16,1))',
      },
    },
  },
  plugins: [],
};

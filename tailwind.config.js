/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00D4FF',
          'primary-hover': '#00B8DE',
          'primary-light': '#5CE1E6',
          'primary-dark': '#0090B0',
          secondary: '#7928CA',
          'secondary-light': '#9B51E0',
          accent: '#FF416C',
          gold: '#FFB800',
          bg: '#080B11',
          'bg-secondary': '#0E131F',
          'bg-tertiary': '#141B2D',
          surface: '#1A2238',
          'surface-hover': '#212B47',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-focus': 'rgba(0, 212, 255, 0.4)',
          text: '#F8FAFC',
          'text-secondary': '#94A3B8',
          'text-muted': '#64748B',
          whatsapp: '#25D366',
          'whatsapp-hover': '#20BD5A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 25px rgba(0, 212, 255, 0.35)',
        'glow-primary-lg': '0 0 45px rgba(0, 212, 255, 0.45)',
        'glow-secondary': '0 0 30px rgba(121, 40, 202, 0.35)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'glow-card-hover': '0 20px 40px -15px rgba(0, 212, 255, 0.15), 0 0 0 1px rgba(0, 212, 255, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(0, 212, 255, 0.15) 0%, rgba(121, 40, 202, 0.08) 45%, transparent 70%)',
      },
    },
  },
  plugins: [],
};

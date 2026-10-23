/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020C1B',
          900: '#0A192F', // Authority Deep Navy
          850: '#0E223D',
          800: '#112240',
          700: '#1E3A5F',
          600: '#2A4D7A',
        },
        rescue: {
          50: '#FFF5F0',
          100: '#FFE6DC',
          500: '#FF5A1F', // Urgent Rescue Orange
          600: '#E6470C',
          700: '#C03704',
        },
        emergency: {
          500: '#DC2626',
          600: '#B91C1C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}

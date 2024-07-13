/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '',
        // light theme
        'background-light': '#fff',
        // dark theme
        'background-dark': '#282a36'
      },
      fontFamily: {
        heading: ['JosefinSans'],
        body: ['Montserrat']
      },
      animation: {
        'move-up-down': 'move-up-down 2s ease-in-out infinite'
      },
      keyframes: {
        'move-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
};

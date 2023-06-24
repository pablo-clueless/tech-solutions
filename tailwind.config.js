/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      playfair: ['Playfair Display', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        dock: "url('/images/dock.webp')",
        hero: "url('/images/hero.jpg')",
        map: "url('/images/map.jpg')",
      },
      colors: {
        dark: '#0C1118',
        primary: '#FE0100',
        secondary: '#00133D',
      }
    },
  },
  plugins: [],
}


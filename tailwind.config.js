/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': '#228B22',
        'forest-dark': '#1a6a1a',
        'mint': '#F5FFFA',
        'mint-dark': '#E0F2E9',
        'soft-gold': '#D4AF37',
        'sage': '#8A9A5B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        "hero-pattern": "url('/src/assets/laptop.jpg')",
        "hero-pattern-tablet": "url('/src/assets/laptop(tablet).jpg')",
        "hero-pattern-mobile": "url('/src/assets/laptop(mobile).jpg')",
        "expertise": "url('/src/assets/expertisebg.jpg')",
      },
      screens: {
        'md': '800px',
      }


    },
    fontFamily: {
      signature: ["Dancing Script"]
    }

  },
  plugins: [],
}
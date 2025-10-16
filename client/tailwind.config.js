/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        delius: ['"Delius"', 'cursive'],
        Inconsolata:["Inconsolata", 'monospace']
      },
    },
  },
  plugins: [],
};

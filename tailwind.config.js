/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#e6f1ff',
        'lightest-slate': '#ccd6f6',
        'light-slate': '#a8b2d1',
        'slate': '#8892B0',
        'navy': '#0a192f',
        'lightest-navy': '#233554',
        'dark-navy': '#112240',
        'green': '#79F7DA',
        'hover-color': '#133040',
        'dark-blue': '#112240',
      },
    },
  },
  plugins: [],
}


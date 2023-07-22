/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // TODO alttaki satırı ben ekledim. Container klasörüne gerek kalmazsa bu satır silinecek.
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  theme: { extend: {} },
  plugins: [],
};

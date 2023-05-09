/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sansPro: 'var(--font-SourceSansPro)',
    },
    extend: {
      backgroundImage: {
        'linear-gradient':
          'linear-gradient(102.32deg, #030422 -2.74%, #090114 101.6%)',
        'linear-gradient-card':
          'linear-gradient(90.24deg, rgba(14, 23, 101, 0.45) 0%, rgba(53, 14, 88, 0.45) 98.1%), #121214;',
        bgCards: "url('/src/assets/BackgroundCards.svg')",
      },
      colors: {
        white: {
          300: '#ECE4EF',
          400: '#D8CEDE',
        },
        purple: '#9C83A7',
      },
      dropShadow: {
        dropShadow: '0px 0px 8px rgba(255, 255, 255, 0.4)',
      },
    },
  },
  plugins: [],
}

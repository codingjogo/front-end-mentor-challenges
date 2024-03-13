import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'heading': ['24px', {
        lineHeight: '150%',
        fontWeight: '900',
      }],
      'heading-m': ['20px', {
        lineHeight: '150%',
        fontWeight: '900',
      }],
      'body-m': ['16px', {
        lineHeight: '150%',
        fontWeight: '400',
      }],
      'body-sm': ['14px', {
        lineHeight: '150%',
        fontWeight: '400',
      }],
      'body-s-bold': ['14px', {
        lineHeight: '150%',
        fontWeight: '900',
      }],
      'body-sm-bold': ['12px', {
        lineHeight: '150%',
        fontWeight: '900',
      }],
      'body-s-regular': ['14px', {
        lineHeight: '150%',
        fontWeight: '500',
      }],
      'body-sm-regular': ['12px', {
        lineHeight: '150%',
        fontWeight: '500',
      }],
    },
    screens: {
      'mobile': '375px',
      // => @media (min-width: 375px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        'yellow': 'hsl(47, 88%, 63%)',
        'white':'hsl(0, 0%, 100%)',
        'grey': 'hsl(0, 0%, 50%)',
        'black': 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        figtree: ['var(--font-figtree)'],
      },
      boxShadow: {
        'card-shadow': '8px 8px 0 0 rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
};
export default config;

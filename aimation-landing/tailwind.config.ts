import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        magenta: {
          DEFAULT: '#f90093',
          hover: '#d1007d',
          light: '#ff4ecd',
        },
        black: '#071013',
        'warm-white': '#faf9f7',
        lightblue: '#60AFFF',
        gray: {
          50: '#f5f4f2',
          100: '#efeee9',
          200: '#e4e4e7',
          400: '#a1a1aa',
          600: '#52525b',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(249, 0, 147, 0.15), transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(249, 0, 147, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(249, 0, 147, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    colors: {
      transparent: 'transparent',
      //current: 'currentColor',
      'sand': {
        100: '#c7b38f',
        200: '#bc863e',
        300: '#caa16f',
        400: '#b18e68',
        500: '#804c11',
      },
      // ...
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'main': "url('./assets/bg.webp')",        
        "gradient-45": "linear-gradient(45deg, var(--tw-gradient-stops))"
        
      },
      boxShadow: {
        'solid': '0px 8px 0 0 #804c11',
        'solid-up': '0px -8px 0 0 #804c11',
      },
      keyframes: {
        'fade-in-out': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'right',  },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left', },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.06)', opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)'},
          '100%': { transform: 'rotate(360sdeg)'},
        },
      },
      animation: {
        'fade-in-out': 'fade-in-out 1s infinite',
        'spin': 'spin 1s linear infinite',
        slideIn: 'slideIn 1s ease-in-out forwards',
        pulse: 'pulse 2s infinite',
      },
      
    },

  },
  plugins: [],
};
export default config;

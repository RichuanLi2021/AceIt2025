import type { Config } from "tailwindcss";

export default {
  content: [
    //Make sure the path are correct, otherwise the styling may not apply
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'phone_esm': '375px',
      'phone_sm': '540px',
      'phone_rs': '640px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'monitor': '1536px',
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },
  },
  plugins: [],
} satisfies Config;

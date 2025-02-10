/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ["var(--font-karla)", "sans-serif"], // Class: font-karla
        ubuntu: ["var(--font-ubuntu)", "sans-serif"], // Class: font-ubuntu
        league: ["var(--font-league-script)", "cursive"], // Class: font-league
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 1s ease-in-out forwards",
      },
      keyframes: {
        slideInFromLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
  },
  plugins: [],
};

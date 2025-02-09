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
      backgroundImage: {
        'staff-bg': "url('/assets/images/staff1.jpg')",
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 1s ease-in-out forwards", // Custom slide-in animation
      },
      keyframes: {
        slideInFromLeft: {
          "0%": {
            transform: "translateX(-100%)", // Start off-screen to the left
            opacity: 0, // Fully transparent initially
          },
          "100%": {
            transform: "translateX(0)", // Move to original position
            opacity: 1, // Fully opaque at the end
          },
        },
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem"
      },
    },
  },
  plugins: [],
};

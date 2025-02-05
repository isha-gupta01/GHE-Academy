 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm:"375px",
      md:"768px",
      lg:"1200px"
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        md:"2rem"
      },
    },
  },
  plugins: [],
};

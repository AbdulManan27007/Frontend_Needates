import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1022px',
    xl: '1202px',
   'custom': '1920px'
    },
    colors: {
      // 'blue': '#1fb6ff',
      // 'purple': '#7e5bef',
      // 'pink': '#ff49db',
      'orange': '#FFA62A',
      // 'green': '#13ce66',
      // 'yellow': '#ffc82c',
      'gray-dark': '#D9D9D9',
      // 'gray': '#8492a6',
      // 'gray-light': '#d3dce6',
      'red': '#94131B',
      'black': '#1C1B18',
      'dark-black': ' #101828',
      
     
      
      'oliveGreen': '#252603',
      'white': '#FFFFFF',
      'gray': '#F6F6F6', /*bg-color*/

    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'], 

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    
  },
  plugins: [],
};
export default config;

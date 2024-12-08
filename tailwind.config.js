/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', 
      },

      height: {
        'custom': '50%', // Adding 40% as a custom height value
        'card': '598.54px',
        'ads': '450px'
      },
      width: {
        'card': '820px',
        'btn': '760.15px'
      },
      text: {
        'used': '#6d7280',
        
      },
      colors: {
        'custom-gray': '#d8d8d8',
      },
      
    },
  },
  plugins: [],
}


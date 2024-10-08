/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Saira: ['Saira', 'sans-serif'],
      Orbitron: ['Orbitron', 'sans-serif'],
    },

    lineHeight: {
      120: '120%',
      150: '150%',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '24px',
          sm: '16px',
          lg: '20px',
        },
        maxWidth: {
          lg: '1180px',
        },
      },
      colors: {
        "dark-gray": '#d9d9d9',
        "off-white":'#cccccc',
        "off-blue":'#5893ff',
        "dark-black":'#111111',
      },
      fontSize: {
        'custom-2xl': '28px',
        'custom-4xl': '45px',
        'custom-6xl': '66px'
      },
      backgroundImage: {
        'hero-bg': 'url(../src/assets/images/webp/hero-bg.webp)',
      },
      boxShadow: {
        'nav-shadow': '0px 7px 10.9px 0px #0000002E',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.common-transition': {
          transition: 'all 300ms linear',
        },
        '.custom-container': {
          maxWidth: '1180px',
        },      
      }
      addUtilities(newUtilities)
    },
   
  ],
}

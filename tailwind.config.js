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
        'custom-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        'nav-shadow': '0px 7px 10.9px 0px #0000002E',
        'login-cards': '0 0 16px 6px #A9A9A91F',

      },
      borderImageSource: {
        'explore-bg-gradient': 'linear-gradient(228.77deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 41.25%, rgba(255, 255, 255, 0) 63.78%, rgba(255, 255, 255, 0) 97.97%)',
      }

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
        '.explore-bg-gradient': {
          'border-image-source': 'linear-gradient(228.77deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 41.25%, rgba(255, 255, 255, 0) 63.78%, rgba(255, 255, 255, 0) 97.97%)',
        },
      
      }
      addUtilities(newUtilities)
    },
   
  ],
}

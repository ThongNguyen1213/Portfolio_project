/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        skillScale: {
        '0%': {height: '0%'},
        '100%': {height: '100%'}
       },
       spinAroundY: {
        '0%': { transform: 'rotateY(0deg)'},
        '100%': {transform: 'rotateY(360deg)'}
      },
      },
      animation: {
        skillScale: 'skillScale 0.5s ease-in-out forwards',
        spinAroundY: 'spinAroundY 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      transitionDelay: {
        '5': '75ms',
      },
      opacity: {
        "93": "0.93",
      },
      rotate: {
        "10.5": "10.5deg",
      },
      colors: {
        primary: "#002531",
        midnight: "#121063",
        secondary: "#00f6ff",
        dimWhite: "#CCC8C8",
        brightBlue: "#28bce0",
        lessbrightBlue:"#2088A1",
        morebrightBlue: "#4CC8E5",
        brightYellow: "#fad02c",
        darkBlue: "#052A41",
        shadowBlue: "#1A5665",
        lessdarkBlue: "#074266",
        brightOrange: "#FFB800",
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        tahoma: ["Tahoma", "sans-serif"],
        hammersmith: ["Hammersmith One", "sans-serif"],
        b612: ["B612", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: {
    extend: {
        width: ['hover'],
        display: ["group-hover"],
        filter: ['hover', 'focus'],
    },
  },  
  plugins: [],
};
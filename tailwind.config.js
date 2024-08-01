/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontWeight: {
        bold: ["56px"]
      },
      colors: {
        primary: '#f34c38',
        secondary: '#1d0d0b',
        bgColor: '#060606',
        cardbg: '#101010',
        textColor: 'rgba(255, 255, 255, 0.65)',
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        Lato: ["Lato", "sans-serif"]
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1400px",
        xxl: '1900px',
      }
    },
  },
  plugins: [],
}

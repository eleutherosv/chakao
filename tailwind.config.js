/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["UbuntuBold", "system-ui"]
    },
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "system-ui"]
      }
    }
      colors: {
      chakao: {
        dark: '#2e2438',  // Darker variant
        light: '#5c4a75',  // Lighter variant
        base: '#433253',  // Base color
        medium: '#4c3a62',  // Medium variant
        bckg: '#e4e2eb',  // Background variant
      },
    },
  }
}
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
     
  }
}
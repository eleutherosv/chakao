/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./templates/**/*.twig"],
  theme: {
    extend: {
      colors: {
        chakao: {
          DEFAULT: '#12090A', // This is 'base'
          '50': '#ffffff', // This is '2'
          '100': '#ffffff', // This is '3'
          '200': '#6B745E', // This is '4'
          '300': '#4E4734', // This is '5'
          '400': '#1E1E1E', // This is '6'
          '500': '#1B1414', // This is '7'
          '600': '#414934', // This is '8'
          '700': '#E0DCCF', // This is '9'
          '800': '#43302b', // This is '900'
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    'prettier-plugin-tailwindcss',
  ]

}
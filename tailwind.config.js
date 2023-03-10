/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        soft_black: '#171615',
        deep_red: '#971222',
        bright_red: '#C11A15',
        dark_red: '#60030E',
        off_white: '#EAE3E4',
        grey: '#535353',
      },
      borderRadius: {
        rounded_4xl: '3rem',
        rounded_5xl: '4rem',
      },
      screens: {
        'xxs': '450px',
        'xs': '512px',
        'mini_sm': '580px',
      },
      width: {
        card_width: '420px',
      }
      // fontFamily: {
      //   'inter': []
      // }
    },
  },
  plugins: [],
}

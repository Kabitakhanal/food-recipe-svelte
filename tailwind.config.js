export default {
  plugins: [],
    theme: {
    extend: {
      colors:{
        'primary':'#3f6212',
        'secondary':'#ca8a04'
      },
      fontFamily:{
        'display':['Poppins','sans-serif'],
        'body':['Inter', 'sans-serif']

      },
      keyframes: {
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        bounceCustom: 'bounceCustom 1.5s infinite',
      },
    },
  },
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: false, // or 'media' or 'class'
}


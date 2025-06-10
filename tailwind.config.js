module.exports = {
  theme: {
    extend: {
      screens: {
        'lg-mid': { min: '1024px', max: '1270px' },
        'lg-above-mid': { min: '1280px', max: '1535px' },
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        baloo: ['"Baloo 2"', 'cursive'],
        lilita: ['"Lilita One"', 'cursive'],
        caveat: ['Caveat', 'cursive'],
        hammersmith: ['"Hammersmith One"', 'sans-serif'],
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include all React files
  ],
};

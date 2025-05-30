module.exports = {
  theme: {
    extend: {
      screens: {
        'lg-mid': { min: '1024px', max: '1270px' },
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        baloo: ['"Baloo 2"', 'cursive'],
        lilita: ['"Lilita One"', 'cursive'],
        caveat: ['Caveat', 'cursive'],
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include all React files
  ],
};

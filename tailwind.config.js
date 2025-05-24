module.exports = {
  theme: {
    extend: {
      screens: {
        'lg-mid': { min: '1024px', max: '1270px' }
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure all your source files are listed
  ],
};

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'], // add your preferred file extensions here
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      "title": ['Inter', 'Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        "white": "hsl(0 0% 92%)",
        "lightGray": "hsl(0 0% 84%)",
        "gray": "hsl(0 0% 68%)",
        "darkGray": "hsl(0 0% 31%)",
        "black": "hsl(0 0% 13%)",
        "primary": "hsl(40 100% 50%)",
        "secondary": "hsl(47 100% 50%)",
      }
    },
  },
  plugins: [],
};

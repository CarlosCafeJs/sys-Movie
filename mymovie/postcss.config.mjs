const config = {
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px black',
        DEFAULT: '2px 2px 4px black',
        lg: '3px 3px 6px black',
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;

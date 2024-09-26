/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/view/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pale-purple": "#6B67CE",
        "load-box": "#f5f5f5 ",
        "custom-green": "#48AC86",
        "custom-red": "#FDF3F3",
        "custom-black": "#08080A",
        glass: "rgba(255, 255, 255, 0.88)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mobile: "640px",
        tablet: "768px",
        laptop: "1024px",
        xl: "1200px",
        desktop: "1280px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: ["@tailwindcss/typography"],
};

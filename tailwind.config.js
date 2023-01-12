/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        grytDocs: {
          primary: "#818cf8",
          secondary: "#BF95F9",
          accent: "#FFB86B",
          neutral: "#414558",
          "base-100": "#272935",
          info: "#8BE8FD",
          success: "#52FA7C",
          warning: "#F1FA89",
          error: "#FF5757",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  }
}
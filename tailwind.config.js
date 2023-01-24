/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: ['synthwave',
      {
        grytApp: {
          primary: "#e6cd19",
          secondary: "#D926AA",
          accent: "#1FB2A5",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
  },
};

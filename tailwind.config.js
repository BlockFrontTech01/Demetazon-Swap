/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        lime: "#1cff08",
        yellow: {
          "100": "#faff08",
          "200": "#f6fb08",
          "300": "#f2fa0a",
        },
        aquamarine: {
          "100": "#13ffe0",
          "200": "#07fad4",
          "300": "#07fac0",
        },
        navy: "rgba(2, 23, 136, 0.98)",
        fuchsia: "#dc11ed",
        gold: "#f3e212",
        red: {
          "100": "#ed2310",
          "200": "#ee0d0d",
        },
        crimson: {
          "100": "#f40e5e",
          "200": "#f40c43",
        },
        orangered: "#fa4a07",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "inria-serif": "'Inria Serif'",
        "inknut-antiqua": "'Inknut Antiqua'",
        inika: "Inika",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      xl: "20px",
      mini: "15px",
      sm: "14px",
      mid: "17px",
      "2xs": "11px",
      xs: "12px",
      smi: "13px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq350small: {
        raw: "screen and (max-width: 1512px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

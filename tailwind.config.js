/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: 20,
      screens: {
        mini: "400px",
        mobile: "486px",
        mobilePro: "630px",
        tablet: "768px",
        tabletMinimum: "992px",
        tabletPro: "992px",
        desktop: "1024px",
        desktopPro: "1200px",
        wide: "1440px",
      },
    },
    colors: {
        base:"#fe5d42",
        white:"#fff",
        main:"#f9f9f9",
        text:"#666",
        border:"#e2e2e2",

    },
    fontFamily: {
   
    },
    fontSize: {
      titleXxl: "27px",
      titleXl: "24px",
      titleX: "22px",
      title: "20px",
      desk: "14px",
      sub: "12px",
    },
    screens: {
      mini: "400px",
      mobile: "486px",
      mobilePro: "630px",
      tablet: "768px",
      tabletMinimum: "992px",
      tabletPro: "992px",
      desktop: "1024px",
      desktopPro: "1200px",
      wide: "1440px",
    },
  },
};
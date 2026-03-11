module.exports = {
  darkMode: ["selector", '[zaui-theme="dark"]'],
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        primary: "#f43625",
        "background-light": "#f8f6f5",
        "background-dark": "#221110",
      },
    },
  },
};

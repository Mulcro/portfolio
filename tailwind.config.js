/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        bg: "#030304",
        surface: "#0b0b12",
        "surface-2": "#121220",
        border: "rgba(255, 255, 255, 0.08)",
        foreground: "#f2f2f6",
        muted: "#8d8da3",
        accent: "#8b5cf6",
        "accent-2": "#22d3ee",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(0, 0, 0, 0.6)",
        glow: "0 0 60px -12px rgba(139, 92, 246, 0.45)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #8b5cf6 0%, #22d3ee 100%)",
        "accent-gradient-soft":
          "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(34,211,238,0.15) 100%)",
      },
    },
  },
  plugins: [],
};

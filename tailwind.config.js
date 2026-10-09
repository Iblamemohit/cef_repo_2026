/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        civil: {
          amber: {
            DEFAULT: "#F59E0B",
            hover: "#D97706",
            subtle: "rgba(245, 158, 11, 0.12)",
            border: "rgba(245, 158, 11, 0.25)",
          },
          blueprint: {
            DEFAULT: "#0284C7",
            hover: "#0369A1",
            subtle: "rgba(2, 132, 199, 0.12)",
          },
          dark: {
            canvas: "#080C14",
            surface: "#0E1424",
            surface2: "#141D33",
            surface3: "#1C2846",
            hairline: "rgba(255, 255, 255, 0.08)",
            hairlineStrong: "rgba(255, 255, 255, 0.16)",
          },
          light: {
            canvas: "#F8FAFC",
            surface: "#FFFFFF",
            surface2: "#F1F5F9",
            surface3: "#E2E8F0",
            hairline: "rgba(0, 0, 0, 0.08)",
            hairlineStrong: "rgba(0, 0, 0, 0.14)",
          },
        },
      },
      boxShadow: {
        "hairline": "0 0 0 1px rgba(255, 255, 255, 0.08)",
        "hairline-light": "0 0 0 1px rgba(0, 0, 0, 0.08)",
        "glow-amber": "0 0 20px -5px rgba(245, 158, 11, 0.25)",
        "elevation-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "elevation-light": "0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
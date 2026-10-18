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
        sans: ["Geist", "Geist Fallback", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        "xs": ["10px", { lineHeight: "14px" }],
        "sm": ["11px", { lineHeight: "16px" }],
        "md": ["12px", { lineHeight: "18px" }],
        "lg": ["14px", { lineHeight: "20px" }],
        "xl": ["16px", { lineHeight: "24.8px" }],
        "2xl": ["18px", { lineHeight: "26px" }],
        "3xl": ["20px", { lineHeight: "28px" }],
        "4xl": ["24px", { lineHeight: "32px" }],
      },
      colors: {
        // SInC Design Tokens
        sinc: {
          text: {
            primary: "#cecac3",
            secondary: "#e5e2d1",
            tertiary: "#a69e92",
            inverse: "#b4ada3",
          },
          surface: {
            base: "#000000",
            muted: "#25210f",
            raised: "#252315",
            strong: "#181a1b",
          },
          border: {
            muted: "#3a3f42",
          },
        },
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
            canvas: "#000000", // token: color.surface.base
            surface: "#181a1b", // token: color.surface.strong
            surface2: "#252315", // token: color.surface.raised
            surface3: "#25210f", // token: color.surface.muted
            hairline: "#3a3f42", // token: color.border.muted
            hairlineStrong: "rgba(206, 202, 195, 0.25)",
          },
          light: {
            canvas: "#F8FAFC",
            surface: "#FFFFFF",
            surface2: "#F1F5F9",
            surface3: "#E2E8F0",
            hairline: "rgba(58, 63, 66, 0.15)",
            hairlineStrong: "rgba(58, 63, 66, 0.25)",
          },
        },
      },
      borderRadius: {
        "token-xs": "8px",
        "token-sm": "999px",
        "token-md": "9999px",
      },
      boxShadow: {
        "token-1": "rgba(30, 32, 33, 0.04) 0px 1px 2px 0px, rgba(30, 32, 33, 0.03) 0px 4px 12px 0px",
        "token-2": "rgba(26, 44, 74, 0.1) 3px 3px 0px 0px",
        "token-3": "rgb(26, 44, 74) 0px 0px 0px 1px inset",
        "hairline": "0 0 0 1px #3a3f42",
        "hairline-light": "0 0 0 1px rgba(58, 63, 66, 0.15)",
        "glow-amber": "0 0 20px -5px rgba(245, 158, 11, 0.3)",
        "elevation-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px #3a3f42",
        "elevation-light": "0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(58, 63, 66, 0.12)",
      },
      transitionDuration: {
        instant: "150ms",
        fast: "200ms",
      },
    },
  },
  plugins: [],
};
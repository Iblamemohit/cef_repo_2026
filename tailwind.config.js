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
        sans: ["Geist", "Geist Fallback", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Bricolage Grotesque", "Geist", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        border: {
          DEFAULT: "var(--border)",
          ink: "var(--border-ink)",
        },
        brand: {
          cardinal: "var(--brand-cardinal)",
          "cardinal-dark": "var(--brand-cardinal-dark)",
          teal: "var(--brand-teal)",
          blue: "var(--brand-blue)",
          paloalto: "var(--brand-palo-alto)",
          lagunita: "var(--brand-lagunita)",
        },
        stanford: {
          cardinal: "#8C1515",
          "cardinal-dark": "#820000",
          "cardinal-light": "#B83A4B",
          "palo-alto": "#175E54",
          "palo-alto-light": "#2D716F",
          "palo-verde": "#279989",
          lagunita: "#007C92",
          fog: "#DAD7CB",
          "fog-light": "#F4F4F4",
          stone: "#7F7776",
          sandstone: "#FAF8F5",
          charcoal: "#1C1A17",
          gold: "#D49B24",
        },
        accent: {
          lime: "var(--accent-lime)",
          "lime-dark": "#820000",
          tint: "var(--accent-tint)",
        },
        "on-accent": "var(--on-accent)",
        inverse: {
          DEFAULT: "var(--inverse)",
          foreground: "var(--inverse-foreground)",
          muted: "var(--inverse-muted)",
        },
        pop: {
          peach: "#fed7aa",
        },
        "club-gold": "var(--club-gold)",
        // SInC Design Tokens from design.md
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
            DEFAULT: "var(--brand-cardinal)",
            hover: "var(--brand-cardinal-dark)",
            subtle: "rgba(140, 21, 21, 0.12)",
            border: "rgba(140, 21, 21, 0.28)",
          },
          dark: {
            canvas: "var(--background)",
            surface: "var(--card)",
            surface2: "var(--card)",
            surface3: "var(--card)",
            hairline: "var(--border)",
            hairlineStrong: "var(--border-ink)",
          },
          light: {
            canvas: "var(--background)",
            surface: "var(--card)",
            surface2: "var(--card)",
            surface3: "var(--card)",
            hairline: "var(--border)",
            hairlineStrong: "var(--border-ink)",
          },
        },
      },
      borderRadius: {
        "token-xs": "8px",
        "token-sm": "999px",
        "token-md": "12px",
        "token-lg": "16px",
      },
      boxShadow: {
        "token-1": "rgba(30, 32, 33, 0.04) 0px 1px 2px 0px, rgba(30, 32, 33, 0.03) 0px 4px 12px 0px",
        "token-2": "rgba(26, 44, 74, 0.1) 3px 3px 0px 0px",
        "token-3": "rgb(26, 44, 74) 0px 0px 0px 1px inset",
        "elevation-dark": "0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px var(--border)",
        "elevation-light": "0 10px 30px -10px rgba(0, 0, 0, 0.04), 0 0 0 1px var(--border)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
      },
    },
  },
  plugins: [],
};